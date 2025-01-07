import { ReactNode, useState } from 'react'
import { AppContext } from './AppContext'


interface AppContextProps {
    children: ReactNode
}

export function AppContextProvider({ children }: AppContextProps){

    const [logged, setLogged] = useState(false)

    function handleLogin(usuario: string, senha: string){        
        if(usuario === 'admin' && senha === 'admin'){
            setLogged(true)
            localStorage.setItem('@meubanco:logado', 'true');
            return true
        }
        return false
    }

    function checkLogin(){
        const is_logged = localStorage.getItem('@meubanco:logado');
        if(is_logged === null){
            return false;
        }else{
            return true;
        }
    }

    return (
        <AppContext.Provider value={{handleLogin, checkLogin, logged}}>
            {children}
        </AppContext.Provider>
    )
}