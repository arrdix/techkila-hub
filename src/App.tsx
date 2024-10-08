import { Layout } from '@/layouts/Layout'
import { Dashboard } from '@/pages/dashboard'
import { Login } from '@/pages/login'
import { Stock } from '@/pages/stock'
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/stock" element={<Stock />} />
            </Route>
        </Routes>
    )
}

export default App
