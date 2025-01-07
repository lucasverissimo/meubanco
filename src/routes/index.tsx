import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router'

import { AppContext } from '../contexts/AppContext'

import { Login } from '../pages/Login'

// auth
import { Dashboard } from '../pages/Dashboard'
import { Carteira } from '../pages/Carteira'
import { Transferencias } from '../pages/Transferencias'
import { Servicos } from '../pages/Servicos'
import { Configuracoes } from '../pages/Configuracoes'


export function RoutesApp(){

    const { checkLogin } = useContext(AppContext);
    
    const is_logged = checkLogin();
    
    if(is_logged){
        return (
            <Routes>                
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/carteira' element={<Carteira />} />
                <Route path='/transferencias' element={<Transferencias />} />
                <Route path='/servicos' element={<Servicos />} />
                <Route path='/configuracoes' element={<Configuracoes />} />

                <Route path='*' element={<Navigate to="/dashboard" />} />
            </Routes>
        )
    }else{
        return (
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        )
    }
}