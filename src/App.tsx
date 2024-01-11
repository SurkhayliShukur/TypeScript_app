import './App.css'
import { Routes, Route } from "react-router-dom"
import { ROUTER } from './constant/Router'
import Home from './components/pages/Home'
import Add from './components/action/Add'
import Basket from './components/pages/Basket'
import Product from "./components/pages/Product"
import UpdateItem from './components/action/UpdateItem'
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
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
