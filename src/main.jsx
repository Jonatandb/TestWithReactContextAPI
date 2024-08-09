import { createRoot } from 'react-dom/client'
import './index.css'
import UsersContextProvider from './contexts/UsersContext.jsx'
import ListaUsuarios from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <UsersContextProvider>
      <ListaUsuarios />
    </UsersContextProvider>
    <ListaUsuarios />
  </>,
)

