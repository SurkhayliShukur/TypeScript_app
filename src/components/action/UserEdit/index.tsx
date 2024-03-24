import React, { useState } from 'react'
import { updateUser } from '../../../config'
import { Users } from '../../../interfaces/data'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { ContextProps } from '../../../interfaces/data'
import { ROUTER } from '../../../constant/Router'
import { isValidEmail, isValidPassword, isValidPhone } from '../../../constant/ValidRegex'
import { toast } from "react-toastify"
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
  const { showPassword, setShowPassword, loggedInUser } = useGlobalContext() as ContextProps
  const [newUser, setNewUser] = useState<Users[]>(initialStateUser)
  const isEmpty: boolean = Object.values(newUser).some((value) => value === "")
  const navigate = useNavigate()
  const { id } = useParams()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }
  const handleSumbit = async () => {
    if (isEmpty) {
      toast.error("Please fill in all fields", {
        autoClose: 1000
      })
    }
    if (!isValidEmail(newUser.email)) {
      toast.warning("Please enter your email", {
        autoClose: 1000
      })
      return
    }
    if (!isValidPhone(newUser.phone)) {
      toast.warning("Please enter your phone", {
        autoClose: 1000
      })
      return
    }
    if (!isValidPassword(newUser.password)) {
      toast.warning("Password must be between 5 - 10 , at least 1 letter and 1 number", {
        autoClose: 1000
      })
      return
    }
    try {
      await updateUser(Number(id), newUser)
      localStorage.setItem("loggedInUser", JSON.stringify(newUser))
      setNewUser(initialStateUser)
      toast.success("updated successfully", {
        autoClose: 1000
      })
      setTimeout(() => {
        navigate(ROUTER.User)
      }, 1500)
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }
    catch (error) {
      console.log("Error", error)
    }

  }

  return (
    <>
    </>
  )
}

export default UserEdit