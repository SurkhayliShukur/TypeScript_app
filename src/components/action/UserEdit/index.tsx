import React, { useState } from 'react'
import { updateUser } from '../../../config'
import { Users } from '../../../interfaces/data'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { ContextProps } from '../../../interfaces/data'
import { ROUTER } from '../../../constant/Router'
import { isValidEmail, isValidPassword, isValidPhone } from '../../../constant/ValidRegex'
import { toast } from "react-toastify"
import { LuEye, LuEyeOff } from "react-icons/lu";
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
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-gray-300 px-10 py-10  '>
          <div>
            <h1 className='text-center text-blue-500 mb-4 text-3xl font-bold'>
              Edit
            </h1>
          </div>
          <div>
            <input
              type="text"
              placeholder='Name'
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              name='name'
              value={newUser.name}
              onChange={handleInputChange} />
          </div>
          <div>
            <input
              type="email"
              placeholder='Email'
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              name='email'
              value={newUser.email}
              onChange={handleInputChange} />
          </div>
          <div>
            <input
              type="text"
              placeholder='Phone'
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              name='phone'
              value={newUser.phone}
              onChange={handleInputChange} />
          </div>
          <div>
            <input
              type="text"
              placeholder='Address'
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              name='address'
              value={newUser.address}
              onChange={handleInputChange} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Image_URL"
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              name='image'
              value={newUser.image}
              onChange={handleInputChange} />
          </div>

          <div className='relative'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              name='password'
              value={newUser.password}
              onChange={handleInputChange} />
            {showPassword ? (
              <LuEyeOff
                className="absolute right-[3%] bottom-[30%]  text-[40px] text-stone-300  cursor-pointer hover:scale-105 transition-all duration-700"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <LuEye
                className="absolute right-[3%] bottom-[30%]  text-[40px] text-stone-300  cursor-pointer hover:scale-105 transition-all duration-700"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <div className=" flex justify-center items-center flex-col mb-3">
            <button
              onClick={handleSumbit}
              className="bg-gray-800 text-gray-200 py-1 px-4 rounded-md text-xl font-bold"
            >
              Save Changes
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate(ROUTER.User)}
              className="text-cyan-300 font-bold ml-3 text-xl hover:opacity-90 transition duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserEdit