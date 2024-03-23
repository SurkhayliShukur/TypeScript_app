import { FC, createContext, useContext, useState } from "react";
import { ContextProps, LayoutProps, Users } from "../interfaces/data"
import { getUser } from "../config";


const GlobalContext = createContext<ContextProps | undefined>(undefined)

const GlobalContextProvider: FC<LayoutProps> = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [users, setUsers] = useState<Users[]>([])
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const getUsers = async () => {
        const userData =  await getUser()
        setUsers(userData)
        const storedUser = localStorage.getItem("loggedInUser");
    }

    const value = {
        isAdmin,
        users,
        showPassword,
        confirmPassword,
        setShowPassword,
        setConfirmPassword,
        setUsers
    }
    const Component = GlobalContext.Provider
    return (
        <Component value={value}>
            {children}
        </Component>
    )

}

const useGlobalContext = (): ContextProps => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error("ERROR");
    }
    return context;
}

export { useGlobalContext, GlobalContextProvider }

