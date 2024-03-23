import React, { useState } from 'react'
import { useGlobalContext } from "../../../../Context/GlobalContext"
import { Users, ContextProps } from "../../../../interfaces/data"
import { isValidEmail, isValidPhone, isValidPassword } from "../../../../constant/ValidRegex"
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"


const initialStateUser: Users = {
  name: "",
  email: "",
  phone: "",
  password: "",
  image: "",
  address: ""
}
const Register: React.FC = () => {
  const { showPassword, setShowPassword, confirmPassword, setConfirmPassword } = useGlobalContext() as ContextProps;
  const [newUser, setNewUser] = useState<Users>(initialStateUser)
  const navigate = useNavigate()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setNewUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const isEmpty: boolean = Object.values(newUser).some((vaule) => vaule === "")
  const isPasswordMismatch: boolean = newUser.password !== confirmPassword;

  const handleSubmit = async () => {
    if (isEmpty) {
      toast.error("Please fill in all fields",{
        autoClose:1000
      })
    }
    if (!isValidEmail(newUser.email)) {
      toast.warning("Please enter your email",{
        autoClose:1000
      })
    }
    if(!isValidPhone(newUser.phone)){
      toast.warning("Please enter your phone",{
        autoClose:1000
      })
    }
  }



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