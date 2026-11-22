import { useCallback, useEffect, useState } from 'react'

export type FontPair = 'lufga-inter' | 'lufga-lufga' | 'manrope-inter'

const STORAGE_KEY = 'aasu-font-pair'

function getInitialFontPair(): FontPair {
  if (typeof window === 'undefined') return 'lufga-inter'
  const val = document.documentElement.dataset.fontPair
  if (val === 'lufga-lufga' || val === 'manrope-inter') return val
  return 'lufga-inter'
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
