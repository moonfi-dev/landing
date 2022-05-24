import { useEffect, useRef, useState } from "react";
import { Row, RowState } from "./Row";
import dictionary from "./words/dictionary.json";
import { Clue, clue, describeClue, violation } from "./clue";
import { Keyboard } from "./Keyboard";
import targetList from "./words/targets.json";
import {
  describeSeed,
  dictionarySet,
  Difficulty,
  gameName,
  pick,
  resetRng,
  seed,
  speak,
  urlParam,
  wordleScoreToAPY,
} from "./util";

enum GameState {
  Playing = 'PLAYING',
  Won = 'WON',
  Lost = 'LOST',
}

interface GameProps {
  maxGuesses: number
  hidden: boolean
  difficulty: Difficulty
  colorBlind: boolean
  keyboardLayout: string
}

const targets = targetList.slice(0, targetList.indexOf("murky") + 1); // Words no rarer than this one

const WORD_LENGTH = 5

function randomTarget(wordLength: number): string {
  const eligible = targets.filter((word) => word.length === wordLength);
  let candidate: string;
  do {
    candidate = pick(eligible);
  } while (/\*/.test(candidate));
  return candidate;
}

function parseUrlGameNumber(): number {
  const gameParam = urlParam("game");
  if (!gameParam) return 1;
  const gameNumber = Number(gameParam);
  return gameNumber >= 1 && gameNumber <= 1000 ? gameNumber : 1;
}

function Game(props: GameProps) {
  const [gameState, setGameState] = useState(GameState.Playing);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [wordLength, setWordLength] = useState(WORD_LENGTH);
  const [gameNumber, setGameNumber] = useState(parseUrlGameNumber());
  const [target, setTarget] = useState(() => {
    resetRng();
    return randomTarget(wordLength);
  });
  const [hint, setHint] = useState<string>("Make your first guess!")
  const currentSeedParams = () =>
    `?seed=${seed}&length=${wordLength}&game=${gameNumber}`;
  useEffect(() => {
    if (seed) {
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname + currentSeedParams()
      );
    }
  }, [wordLength, gameNumber]);
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const result: number = guesses.length
    const apy = wordleScoreToAPY(result)
    const gameOver = (verbed: string) =>
    `You ${verbed}.\n Click Earn Now on the top right\n to earn ${apy}% APY today!`

    if (gameState == GameState.Won) {
      setHint(gameOver(`won in ${result}`))
    } else if (gameState == GameState.Lost) {
      setHint(gameOver('lost'))
    }
  }, [gameState, guesses, target])

  async function share(copiedHint: string, text?: string) {
    var url = 'https://moonfi.co'
    const body = url + (text ? '\n\n' + text : '')
    if (
      /android|iphone|ipad|ipod|webos/i.test(navigator.userAgent) &&
      !/firefox/i.test(navigator.userAgent)
    ) {
      try {
        await navigator.share({ text: body })
        return
      } catch (e) {
        console.warn('navigator.share failed:', e)
      }
    }
    try {
      await navigator.clipboard.writeText(body)
      setHint(copiedHint)
      return
    } catch (e) {
      console.warn('navigator.clipboard.writeText failed:', e)
    }
    setHint(url)
  }

  const startNextGame = () => {
    const newWordLength = WORD_LENGTH;
    setWordLength(newWordLength);
    setTarget(randomTarget(newWordLength));
    console.log(target)
    setHint("");
    setGuesses([]);
    setCurrentGuess("");
    setGameState(GameState.Playing);
    setGameNumber((x) => x + 1);
  };

  const onKey = (key: string) => {
    if (gameState !== GameState.Playing) {
      if (key === "Enter") {
        startNextGame();
      }
      return;
    }
    if (guesses.length === props.maxGuesses) return;
    if (/^[a-z]$/i.test(key)) {
      setCurrentGuess((guess) =>
        (guess + key.toLowerCase()).slice(0, wordLength)
      );
      tableRef.current?.focus();
      setHint("");
    } else if (key === "Backspace") {
      setCurrentGuess((guess) => guess.slice(0, -1));
      setHint("");
    } else if (key === "Enter") {
      if (currentGuess.length !== wordLength) {
        setHint("Too short");
        return;
      }
      if (!dictionary.includes(currentGuess)) {
        setHint("Not a valid word");
        return;
      }
      for (const g of guesses) {
        const c = clue(g, target);
        const feedback = violation(props.difficulty, c, currentGuess);
        if (feedback) {
          setHint(feedback);
          return;
        }
      }
      setGuesses((guesses) => guesses.concat([currentGuess]));
      setCurrentGuess((guess) => "");

      const gameOver = (verbed: string) =>
      `You ${verbed}! The answer was ${target.toUpperCase()}`
      console.log(target)
      if (currentGuess === target) {
        setHint(gameOver("won"));
        setGameState(GameState.Won);
      } else if (guesses.length + 1 === props.maxGuesses) {
        setHint(gameOver("lost"));
        setGameState(GameState.Lost);
      } else {
        setHint("");
        speak(describeClue(clue(currentGuess, target)));
      }
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey && !e.metaKey) {
        onKey(e.key)
      }
      if (e.key === 'Backspace') {
        e.preventDefault()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [currentGuess, gameState, target])

  let letterInfo = new Map<string, Clue>()
  const tableRows = Array(props.maxGuesses)
    .fill(undefined)
    .map((_, i) => {
      const guess = [...guesses, currentGuess][i] ?? ''
      const cluedLetters = clue(guess, target)
      const lockedIn = i < guesses.length
      if (lockedIn) {
        for (const { clue, letter } of cluedLetters) {
          if (clue === undefined) break
          const old = letterInfo.get(letter)
          if (old === undefined || clue > old) {
            letterInfo.set(letter, clue)
          }
        }
      }
      return (
        <Row
          key={i}
          wordLength={WORD_LENGTH}
          rowState={
            lockedIn
              ? RowState.LockedIn
              : i === guesses.length
              ? RowState.Editing
              : RowState.Pending
          }
          cluedLetters={cluedLetters}
        />
      )
    })

  return (
    <div className="Game">
      <table
        className="Game-rows"
        tabIndex={0}
        aria-label="Table of guesses"
        ref={tableRef}
      >
        <tbody>{tableRows}</tbody>
      </table>
      <p
        className="text-xl"
        role="alert"
        style={{
          color: 'var(--main-color)',
          userSelect: /https?:/.test(hint) ? 'text' : 'none',
          whiteSpace: 'pre-wrap',
        }}
      >
        {hint || `\u00a0`}
      </p>
      <Keyboard
        layout={props.keyboardLayout}
        letterInfo={letterInfo}
        onKey={onKey}
      />
      <div className="flex flex-col py-auto">
          {gameState !== GameState.Playing && (
            <button
              className="m-auto rounded-full border border-transparent bg-main-color px-10 py-4 text-base text-white shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-main-color disabled:cursor-not-allowed disabled:opacity-50"
              disabled={false}
              onClick={() => {
                const emoji = props.colorBlind
                  ? ['⬛', '🟦', '🟧']
                  : ['⬛', '🟨', '🟩']
                const score = gameState === GameState.Lost ? 'X' : guesses.length
                share(
                  'Result copied to clipboard!',
                  `${gameName} ${score}/${props.maxGuesses}\n` +
                    guesses
                      .map((guess) =>
                        clue(guess, target)
                          .map((c) => emoji[c.clue ?? 0])
                          .join('')
                      )
                      .join('\n')
                )
              }}
            >
              Share your result!
            </button>
          )}
      </div>
    </div>
  )
}

export default Game
