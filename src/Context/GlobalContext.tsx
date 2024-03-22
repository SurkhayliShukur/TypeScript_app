import { FC, createContext, useContext, useState } from "react";
import { ContextProps, LayoutProps, Users } from "../interfaces/data"


const GlobalContext = createContext<ContextProps | undefined>(undefined)

const GlobalContextProvider: FC<LayoutProps> = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [users, setUsers] = useState<Users[]>([])
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const value = {
        isAdmin,
        users,
        showPassword,
        confirmPassword,
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

