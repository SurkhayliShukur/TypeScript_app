import React from 'react'
import { useGlobalContext } from '../../../../Context/GlobalContext'
import { ContextProps } from '../../../../interfaces/data'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const { showPassword, setShowPassword, confirmPassword, setConfirmPassword,users } = useGlobalContext() as ContextProps
  const navigate = useNavigate()


  return (
    <div>Login</div>
  )
}

export default Login