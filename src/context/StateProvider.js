import React, { useContext, useReducer } from 'react'
import stateReducer from './stateReducer'

const StateContext = React.createContext(null)



function StateProvider({children}) {

    const [state, dispatch] = useReducer(stateReducer, initialState)

    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    )
}


export default StateProvider




// custom hook
export const useStore = () => {
    return useContext(StateContext)
}


const initialState = {
    todoId: null,
    todos: [],
}