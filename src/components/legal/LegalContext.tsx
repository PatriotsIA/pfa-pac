import { createContext, useContext } from 'react'

export type LegalDoc = 'privacy' | 'terms'

export type LegalContextValue = {
  openLegal: (doc: LegalDoc) => void
}

export const LegalContext = createContext<LegalContextValue | null>(null)

export function useLegal() {
  const value = useContext(LegalContext)
  if (!value) throw new Error('useLegal must be used within LegalProvider')
  return value
}
