import { NavItem } from '@/components/navbar/nav-item'
import { Bell, Box, Calculator, LayoutDashboard, LayoutGrid, ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export function Layout(): JSX.Element {
    const [activePath, setActivePath] = useState<string>('')
    const { pathname } = useLocation()

    const paths = {
        dashboard: 'dashboard',
        stock: 'stock',
        purchase: 'purchase',
        sales: 'sales',
    }

    useEffect(() => {
        const path = pathname.split('/')[1]

        setActivePath(path)
    }, [pathname])

    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-between items-center sticky top-0 py-4 px-6 shadow-base">
                <div className="border rounded-full p-2">
                    <LayoutGrid size={24} />
                </div>
                <p className="font-bold">TechkilaHub</p>
                <div className="border rounded-full p-2 relative">
                    <Bell size={24} />
                    <div className="bg-error rounded-full w-[10px] h-[10px] absolute top-0 right-0" />
                </div>
            </div>
            <div className="flex flex-col gap-4 p-6 h-full rounded-3xl overflow-y-auto">
                <Outlet />
            </div>
            <div className="flex justify-around sticky bottom-0 p-2 mt-auto shadow-base">
                <NavItem
                    variant={activePath === paths.dashboard ? 'active' : 'default'}
                    icon={<LayoutDashboard size={24} />}
                    to="/"
                />
                <NavItem
                    variant={activePath === paths.stock ? 'active' : 'default'}
                    icon={<Box size={24} />}
                    to="/stock"
                />
                <NavItem
                    variant={activePath === paths.purchase ? 'active' : 'default'}
                    icon={<ShoppingBag size={24} />}
                    to="/purchase"
                />
                <NavItem
                    variant={activePath === paths.sales ? 'active' : 'default'}
                    icon={<Calculator size={24} />}
                    to="/sales"
                />
            </div>
        </div>
    )
}
