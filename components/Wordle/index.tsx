// import "./index.module.css";
import { maxGuesses, urlParam } from './util'
import Game from './Game'
import { useEffect, useState } from 'react'

function useSetting<T>(
  key: string,
  initial: T
): [T, (value: T | ((t: T) => T)) => void] {
  const [current, setCurrent] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initial
    } catch (e) {
      return initial
    }
  })
  const setSetting = (value: T | ((t: T) => T)) => {
    try {
      const v = value instanceof Function ? value(current) : value
      setCurrent(v)
      window.localStorage.setItem(key, JSON.stringify(v))
    } catch (e) {}
  }
  return [current, setSetting]
}

function GameApp() {
  type Page = 'game' | 'about' | 'settings'
  const [page, setPage] = useState<Page>('game')
  var prefersDark = false
  if (typeof window !== 'undefined') {
    prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  const [dark, setDark] = useSetting<boolean>('dark', prefersDark)
  const [colorBlind, setColorBlind] = useSetting<boolean>('colorblind', false)
  const difficulty = 0
  const [keyboard, setKeyboard] = useSetting<string>(
    'keyboard',
    'qwertyuiop-asdfghjkl-EzxcvbnmB'
  )
  const [enterLeft, setEnterLeft] = useSetting<boolean>('enter-left', false)

  return (
    <div className={'App-container' + (colorBlind ? ' color-blind' : '')}>
      <Game
        maxGuesses={maxGuesses}
        hidden={page !== 'game'}
        difficulty={difficulty}
        colorBlind={colorBlind}
        keyboardLayout={keyboard.replace(
          /[BE]/g,
          (x) => (enterLeft ? 'EB' : 'BE')['BE'.indexOf(x)]
        )}
      />
    </div>
  )
}

export default GameApp