import React, { useState } from 'react'
import { Users } from '../../../interfaces/data'
import { useNavigate, useParams } from 'react-router-dom'




const initialStateUser: Users = {
  name: "",
  email: "",
  phone: "",
  password: "",
  image: "",
  address: ""
}

const UserEdit = () => {
  const [newUser, setNewUser] = useState<Users[]>(initialStateUser)
  const navigate = useNavigate()
  const {id} = useParams()

  return (
    <>
    </>
  )
}

export default UserEdit