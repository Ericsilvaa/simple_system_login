import React from 'react'
import * as C from './styles'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'


const Home = () => {
  const { signout } = useAuth()
  const navigate = useNavigate()
  

  function handleLogout() {
    signout()
    navigate('/')
  }



  return (
    <C.Container>
      <C.Title>Bem vindo a Home</C.Title>
      <Button Text='Logout' onClick={handleLogout} />
    </C.Container>
  )
}

export default Home