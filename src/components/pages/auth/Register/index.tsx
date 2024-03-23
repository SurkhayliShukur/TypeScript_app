import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from "../../../../Context/GlobalContext"
import { Users, ContextProps } from "../../../../interfaces/data"
import { addUser } from "../../../../config/index"
import { isValidEmail, isValidPhone, isValidPassword } from "../../../../constant/ValidRegex"
import { ROUTER } from '../../../../constant/Router'
import { LuEye, LuEyeOff } from "react-icons/lu";
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
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-gray-50 px-10 py-10 '>
          <div>
            <h1 className='text-center text-blue-500 mb-4 text-3xl font-bold'>
              Register
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
          <div className='relative'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='ConfirmPassword'
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              name='confirmPassword'
              value={confirmPassword}
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
              onClick={handleSubmit}
              className="bg-gray-800 text-gray-200 py-1 px-4 rounded-md text-xl font-bold"
            >
              Register
            </button>
          </div>
          <div>
            <h2 className="text-white">
              <Link
                className="text-cyan-300 font-bold ml-3 text-xl hover:opacity-90 transition duration-300"
                to={ROUTER.Login}
              >
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register