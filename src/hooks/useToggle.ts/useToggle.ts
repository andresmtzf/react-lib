import { useState, useCallback } from 'react'

export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState)

  const toggleState = useCallback(() => setState((prevState) => !prevState), [])

  return [state, toggleState]
}
