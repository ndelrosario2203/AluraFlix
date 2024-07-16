import { createContext, useState , useEffect, Children} from 'react'

export const GlobalContext = createContext();

const Context = ({Children}) =>{

    return (
        <GlobalContext.Provider value ={{}}>
             {Children}
        </GlobalContext.Provider>
       )
}

export default Context