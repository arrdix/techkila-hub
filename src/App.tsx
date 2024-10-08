import { Layout } from '@/layouts/layout'
import { Dashboard } from '@/pages/dashboard'
import { Login } from '@/pages/login'
import { Purchase } from '@/pages/purchase'
import { Sales } from '@/pages/sales'
import { Stock } from '@/pages/stock'
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/sales" element={<Sales />} />
            </Route>
        </Routes>
    )
}

export default App
