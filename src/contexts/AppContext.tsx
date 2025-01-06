import { ReactNode, createContext, useState } from 'react'

interface AppContextTypes {
    handleLogin: (usuario: string, senha: string) => boolean
}

export const AppContext = createContext({} as AppContextTypes)

interface AppContextProps {
    children: ReactNode
}

export function AppContextProvider({ children }: AppContextProps){

    const [logged, setLogged] = useState(false)

    function handleLogin(usuario: string, senha: string){
        if(usuario === 'admin' && senha === 'pass'){
            setLogged(true)
            return true
        }
        return false
    }

    return (
        <AppContext.Provider value={{handleLogin}}>
            {children}
        </AppContext.Provider>
    )
}