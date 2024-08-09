import {  useUsersContext } from './contexts/UsersContext'

function ListaUsuarios() {
  const users = useUsersContext()
  console.log(...users)

  return (
    <>
      <h3>Usuarios:</h3>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  )
}

export default ListaUsuarios

