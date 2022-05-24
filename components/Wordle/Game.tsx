import Link from 'next/link';
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

const TARGET_WORD = "crane"

const WORD_LENGTH = 5

function Game(props: GameProps) {
  const [gameState, setGameState] = useState(GameState.Playing);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [target, setTarget] = useState<string>(TARGET_WORD)

  const [errorMessage, setErrorMessage] = useState("")
  const [doneMessage, setDoneMessage] = useState("")
  const [currentAPY, setCurrentAPY] = useState("8")

  const tableRef = useRef<HTMLTableElement>(null);

  async function share(copiedMessage: string, text?: string) {
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
      setDoneMessage(copiedMessage)
      return
    } catch (e) {
      console.warn('navigator.clipboard.writeText failed:', e)
    }
  }

  useEffect(() => {
    setErrorMessage("")

    const currentApy = wordleScoreToAPY(guesses.length)
    if(guesses.length === 0)
      setCurrentAPY("8")
    else
      setCurrentAPY(currentApy.toString())

    const gameOver = (apy: number) =>
    `Congrats! Click here to earn your ${apy}% APY today!`

    if (gameState == GameState.Won) {
      setDoneMessage(gameOver(currentApy))
    } else if (gameState == GameState.Lost) {
      setDoneMessage("Refresh to try again!")
    }
  }, [gameState, guesses])

  const onKey = (key: string) => {
    if (gameState !== GameState.Playing) {
      if (key === 'Enter') {
        // TODO(!): Show congrats screen? Go to user balance?
      }
      return
    }
    if (guesses.length === props.maxGuesses) return;
    if (/^[a-z]$/i.test(key)) {
      setCurrentGuess((guess) =>
        (guess + key.toLowerCase()).slice(0, WORD_LENGTH)
      );
      tableRef.current?.focus();
    } else if (key === "Backspace") {
      setCurrentGuess((guess) => guess.slice(0, -1));
      setErrorMessage("")
    } else if (key === "Enter") {
      if (currentGuess.length !== WORD_LENGTH) {
        setErrorMessage("Too short");
        return;
      }
      if (!dictionary.includes(currentGuess)) {
        setErrorMessage("Not a valid word");
        return;
      }
      setErrorMessage("")
      // for (const g of guesses) {
      //   const c = clue(g, target);
      //   const feedback = violation(props.difficulty, c, currentGuess);
      //   if (feedback) {
      //     setGameMessage(feedback);
      //     return;
      //   }
      // }
      setGuesses((guesses) => guesses.concat([currentGuess]));
      setCurrentGuess((guess) => "");

      const gameOver = (verbed: string) =>
      `You ${verbed}! The answer was ${target.toUpperCase()}`
      
      if (currentGuess === target) {
        setGameState(GameState.Won);
      } else if (guesses.length + 1 === props.maxGuesses) {
        setGameState(GameState.Lost);
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
      <div className="flex flex-col justify-center items-center">
        { currentAPY && (
          <div className="flex flex-col justify-center items-center">
            <div className="
              flex
              text-5xl font-bold text-main-color hover:text-secondary-color
            "> {/* rounded-md outline outline-secondary-color outline-offset-4 outline-[0.4em] */}
              {currentAPY}.00%
            </div>
            <div className="text-black tracking-wide text-sm">
              Yield through MoonFi
            </div>
          </div>
        )}
        { errorMessage && (
          <p
            className="flex px-3 my-3 text-md font-bold tracking-wide rounded-full bg-red-500"
            role="alert"
            style={{
              color: 'white',
              userSelect: /https?:/.test(errorMessage) ? 'text' : 'none',
              whiteSpace: 'pre-wrap',
            }}
          >
            {errorMessage}
          </p>
        )}
        { doneMessage && (
          <Link href="https://app.moonfi.co/" passHref>
            <a
              className="w-full items-center justify-center rounded-full bg-secondary-color sm:px-5 px-2 py-2 md:mt-5 my-2 text-main-color font-semibold md:tracking-wide md:text-lg sm:text-base text-xs"
              target="_blank" rel="noopener noreferrer"
            >
              {doneMessage}
            </a>
          </Link>
        )}

      </div>
      <Keyboard
        layout={props.keyboardLayout}
        letterInfo={letterInfo}
        onKey={onKey}
      />
      <div className="flex flex-col py-auto">
          {gameState !== GameState.Playing && (
            <button
              className="m-auto rounded-full border border-transparent px-5 py-2 md:mt-5 my-2 text-base font-bold tracking-wide shadow bg-main-color text-white hover:bg-purple hover:text-secondary-color"
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
