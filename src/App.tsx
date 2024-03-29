import './App.css'
import { Routes, Route } from "react-router-dom"
import { ROUTER } from './constant/Router'
import Home from './components/pages/Home'
import Add from './components/action/Add'
import Basket from './components/pages/Basket'
import Product from "./components/pages/Products"
import UpdateItem from './components/action/UpdateItem'
import Detail from './components/pages/Detail'
import Login from './components/pages/auth/Login'
import Register from './components/pages/auth/Register'
import User from './components/pages/User'
import UserEdit from './components/action/UserEdit'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function App(): JSX.Element {

  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.Add} element={<Add />} />
        <Route path={ROUTER.Basket} element={<Basket />} />
        <Route path={ROUTER.Product} element={<Product />} />
        <Route path={ROUTER.UpdateItem + "/:id"} element={<UpdateItem />} />
        <Route path={ROUTER.Detail + "/:id"} element={<Detail />} />
        <Route path={ROUTER.Login} element={<Login />} />
        <Route path={ROUTER.User} element={<User />} />
        <Route path={ROUTER.Register} element={<Register />} />
        <Route path={ROUTER.UserEdit + "/:id"} element={<UserEdit />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
