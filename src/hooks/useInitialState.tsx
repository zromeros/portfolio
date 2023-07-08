import { useState } from 'react'

interface State {
  genericValue: any
}

const initialState: State = {
  genericValue: '',
}

const useInitialState = () => {
  const [state, setState] = useState<State>(initialState)

  return {
    state,
    setState,
  }
}

export default useInitialState
