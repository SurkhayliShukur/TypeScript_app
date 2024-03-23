import React, { useState } from 'react'
import { useGlobalContext } from "../../../../Context/GlobalContext"
import { Users, ContextProps } from "../../../../interfaces/data"
import { addUser } from "../../../../config/index"
import { isValidEmail, isValidPhone, isValidPassword } from "../../../../constant/ValidRegex"
import { ROUTER } from '../../../../constant/Router'
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
    if (isPasswordMismatch) {
      toast.error("Password and confirm password do not match", {
        autoClose: 1000,
      });
      return;
    }
    try {
      await addUser(newUser)
      toast.success("Register is successfully", {
        autoClose: 1000
      })
      localStorage.setItem("loggedInUser", JSON.stringify(newUser))
      setNewUser(initialStateUser)
      setConfirmPassword("")
      setTimeout(() => {
        navigate(ROUTER.Login)
      }, 1500)
      setTimeout(() => {
        window.location.reload();
      }, 1750);

    }
    catch (error) {
      console.error("Error adding User:", error);
      toast.error("Error adding User", {
        autoClose: 1000,
      });
    }


  }



  return (
    <>
      <div className='flex justify-center items-center h-screeen'>
        <div className='bg-gray-50 px-10 py-10 '>
          <div>
            <h1 className='text-center text-blue-500 mb-4 text-3xl font-bold'>
              Register
            </h1>
          </div>
          <div>
            <input
              type="text"
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              name='name'
              value={newUser.name}
              onClick={handleInputChange} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register