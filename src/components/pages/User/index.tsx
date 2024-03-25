import { useGlobalContext } from "../../../Context/GlobalContext"
import { ContextProps } from "../../../interfaces/data"
import { useNavigate } from "react-router-dom"
import { FaRegTrashCan, FaPen } from "react-icons/fa6";
import Layout from "../../layout/Layout"
import { ROUTER } from "../../../constant/Router";
import DeleteUser from "../../action/DeleteUser";

const User = () => {
    const { loggedInUser, openDelModal } = useGlobalContext() as ContextProps
    const navigate = useNavigate()
    return (
        <Layout>
            <div className="flex flex-col items-center pt-[5vh]">
                {
                    loggedInUser && (
                        <>
                            <h1 className="text-stone-200 font-bold text-3xl tracking-wide pb-5">
                                {loggedInUser.name}: Data
                            </h1>
                            <div className="w-4/12 text-stone-200 text-center text-lg">
                                <img
                                    className="w-full h-[300px] object-cover rounded-t-lg"
                                    src={loggedInUser.image}
                                    alt={loggedInUser.name} />

                                <div className="bg-gray-950 rounded-b-lg py-4 ">
                                    <h2>Name: {loggedInUser.name} </h2>
                                    <p>Email: {loggedInUser.email} </p>
                                    <address>Address: {loggedInUser.address}</address>
                                    <div>
                                        <button
                                            onClick={() => navigate(`${ROUTER.UserEdit}/${loggedInUser.id}`)}
                                            className="px-7 py-2 bg-blue-700 rounded-md hover:opacity-75 transition-all duration-700 m-5">
                                            <FaPen />
                                        </button>
                                        <button
                                            className="px-7 py-2 ml-2 bg-red-700 rounded-md hover:opacity-75 transition-all duration-700 "
                                            onClick={() => openDelModal(loggedInUser)}
                                        >
                                            <FaRegTrashCan size={20} />
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </>
                    )
                }
            </div>
            <DeleteUser/>
        </Layout>
    )
}

export default User