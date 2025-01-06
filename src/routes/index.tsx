import { Routes, Route } from 'react-router'

import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'

export function RoutesApp(){
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}