import { createContext } from 'react'

interface AppContextTypes {
    handleLogin: (usuario: string, senha: string) => boolean,
    checkLogin: () => boolean,
    logged: boolean
}

export const AppContext = createContext({} as AppContextTypes)