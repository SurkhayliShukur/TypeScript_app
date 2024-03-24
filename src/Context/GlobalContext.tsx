import { FC, createContext, useContext, useState, useEffect } from "react";
import { ContextProps, LayoutProps, Users } from "../interfaces/data"
import { getUser } from "../config";

const GlobalContext = createContext<ContextProps | undefined>(undefined)

const GlobalContextProvider: FC<LayoutProps> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [users, setUsers] = useState<Users[]>([])
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [loggedInUser, setLoggedInUser] = useState<Users | null>(null)

  const getUsers = async () => {
    const userData = await getUser();
    setUsers(userData);

    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const isUser = userData.find(
        (user: Users) => user.email === "Admin@gmail.com"
      );
      if (isUser && parsedUser.email === "Admin@gmail.com") {
        setLoggedInUser(isUser);
        setIsAdmin(true);
      } else {
        const matchedUser = userData.find(
          (user: Users) => user.email === parsedUser.email
        );
        if (matchedUser) {
          setLoggedInUser(matchedUser);
          // setIsAdmin(false);
        }
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [showDelete, setShowDelete] = useState<boolean>(false)
  const [deleteUser, setDeleteUser] = useState<null>(null)

  const openDelModal = (user: any) => {
    setShowDelete(true)
    setDeleteUser(user)
  }
  const closeModal = () => {
    setShowDelete(false)
    setDeleteUser(null)
  }

  const contextValue: ContextProps = {
    isAdmin,
    users,
    showPassword,
    confirmPassword,
    setShowPassword,
    setConfirmPassword,
    setUsers,
    loggedInUser,
    showDelete,
    setShowDelete,
    closeModal,
    openDelModal,
    deleteUser
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = (): ContextProps => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
}

export { useGlobalContext, GlobalContextProvider }

