/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */


import { useContext, createContext } from 'react'

export const UsersContext = createContext([
  {
    id: 0,
    name: 'default user'
  }
])

const UsersContextProvider = ({ children }) => {
  const users = [{
    id: 1,
    name: 'admin',
  },
  {
    id: 2,
    name: 'Jonatandb',
  }]

  return (
    <UsersContext.Provider value={users}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersContextProvider


export const useUsersContext = () => {
  return useContext(UsersContext)
}