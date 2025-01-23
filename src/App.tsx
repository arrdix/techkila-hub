import { Layout } from '@/layouts/root-layout'
import { Dashboard } from '@/pages/dashboard/dashboard.tsx'
import { Login } from '@/pages/login/login.tsx'
import { Purchase } from '@/pages/purchase/purchase.tsx'
import { Sales } from '@/pages/sales/sales.tsx'
import { SalesDetail } from '@/pages/sales-detail/sales-detail.tsx'
import { Stock } from '@/pages/stock/stock.tsx'
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/sales/:id" element={<SalesDetail />} />
            </Route>
        </Routes>
    )
}

export default App
