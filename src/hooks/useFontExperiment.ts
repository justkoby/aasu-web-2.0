import { useCallback, useEffect, useState } from 'react'

export type FontPair = 'lufga' | 'manrope'

const STORAGE_KEY = 'aasu-font-pair'

function getInitialFontPair(): FontPair {
  if (typeof window === 'undefined') return 'lufga'
  return document.documentElement.dataset.fontPair === 'manrope'
    ? 'manrope'
    : 'lufga'
}

export function useFontExperiment() {
  const [fontPair, setFontPairState] = useState<FontPair>(getInitialFontPair)

  useEffect(() => {
    document.documentElement.dataset.fontPair = fontPair
    try {
      localStorage.setItem(STORAGE_KEY, fontPair)
    } catch {
      // Ignore storage errors
    }
  }, [fontPair])

  const setFontPair = useCallback((next: FontPair) => {
    setFontPairState(next)
  }, [])

  return { fontPair, setFontPair }
}
