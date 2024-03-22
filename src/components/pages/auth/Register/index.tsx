import React, { useState } from 'react'
import { Users } from "../../../../interfaces/data"
import { useNavigate } from 'react-router-dom'


const initialStateUser: Users = {
  name: "",
  email: "",
  phone: "",
  password: "",
  image: "",
  address: ""
}
const Register = () => {
  const [newUser, setNewUser] = useState<Users>(initialStateUser)
  const navigate = useNavigate()

  return (
    <>
    <div className='flex justify-center items-center h-screeen'>
      <div className='bg-gray-50 px-10 py-10 '>

      </div>
    </div>
    </>
  )
}

export default Register