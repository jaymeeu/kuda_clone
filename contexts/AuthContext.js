import { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuth, setisAuth] = useState(false);

    const handleAuth = ()=>{
        setisAuth(!isAuth)
    }
    return (
        <AuthContext.Provider value={{
            isAuth,
            handleAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}
