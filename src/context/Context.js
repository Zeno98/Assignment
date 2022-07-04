import React from 'react'


export const cartContext=React.createContext();

const Context = ({children}) => {

   const[cart,setCart]=React.useState([]);
  return (
    <cartContext.Provider value={{cart,setCart}}>{children}</cartContext.Provider>
  )
}

export default Context