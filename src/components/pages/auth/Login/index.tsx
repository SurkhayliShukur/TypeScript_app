import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../../../Context/GlobalContext'
import { ContextProps } from '../../../../interfaces/data'
import { useNavigate } from 'react-router-dom'
import { ROUTER } from '../../../../constant/Router'
import { isValidEmail, isValidPassword } from '../../../../constant/ValidRegex'
import { LuEye, LuEyeOff } from "react-icons/lu";
import { toast } from "react-toastify"


const Login = () => {
  const { showPassword, setShowPassword, confirmPassword, setConfirmPassword, users } = useGlobalContext() as ContextProps
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const isEmpty: boolean = email === "" || password === ""

  const handleLogin = () => {
    const matchedUser = users.find((user) => user.email === email)
 
    if (isEmpty) {
      toast.warning("Please fill in all fields", {
        autoClose: 1000
      })
    }
    if (!matchedUser) {
      toast.error("User does not exist. Please register first", {
        autoClose: 1500,
      });

      return;
    }
    if (!isValidEmail(email)) {
      toast.warning("Please enter your email", {
        autoClose: 1000
      })
      return
    }
    if (!isValidPassword(password)) {
      toast.warning("Password must be between 5 - 10 , at least 1 letter and 1 number", {
        autoClose: 1000
      })
      return
    }
    if (matchedUser.password !== password) {
      toast.error("Incorrect password. Please try again", {
        autoClose: 1000
      })
      return
    }
    if (password !== confirmPassword) {
      toast.error("Password does not matched. Please try again", {
        autoClose: 1000
      })
      return
    }
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    toast.success("Login is successfully!", {
      autoClose: 1500,
    });

    setTimeout(() => {
      navigate(ROUTER.Product);
    }, 1500);
    setTimeout(() => {
      window.location.reload();
    }, 2000);


  }
  console.log(users)


  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-gray-300 px-10 py-10'>
          <div>
            <h1 className='text-center font-bold text-3xl text-blue-500 mb-4'>
              Login
            </h1>
          </div>
          <div>
            <input
              name='mail'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              type="text" />
          </div>
          <div className='relative'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
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
              placeholder='Password'
              className='bg-gray-600 mb-4 px-4 py-4 w-full lg:w-[20em] rounded-sm outline-none placeholder:text-gray-200 text-white'
              name='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} />
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
              onClick={handleLogin}
              className="bg-gray-800 text-gray-200 py-1 px-4 rounded-md text-xl font-bold"
            >
              Login
            </button>
          </div>
          <div>
            <h2 className="text-white">
              <Link
                className=" text-blue-500 font-bold mt-3 text-xl py-1 hover:opacity-90 transition duration-300 "
                to={ROUTER.Register}
              >
                Register
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login