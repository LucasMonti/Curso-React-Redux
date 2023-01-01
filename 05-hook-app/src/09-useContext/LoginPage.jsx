import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);
  console.log(user)

  return (
    <>
    <h1>LoginPage</h1>
    <hr />

    <pre>
      {JSON.stringify(user)}
    </pre>

    <button 
    onClick={()=> setUser({id: 123, name: 'Lucas', email: 'lucas@lucas.com'})}
    className='btn btn-primary'>
      Establecer Usuario
    </button>
    </>
  )
}
