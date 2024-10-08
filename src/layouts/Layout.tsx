import { NavItem } from '@/components/navbar/nav-item'
import { Bell, Box, Calculator, LayoutDashboard, LayoutGrid, ShoppingBag } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function Layout(): JSX.Element {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-between items-center sticky top-0 py-4 px-6 shadow-base">
                <div className="border rounded-full p-2">
                    <LayoutGrid size={20} />
                </div>
                <p className="font-semibold">Bruno Major</p>
                <div className="border rounded-full p-2 relative">
                    <Bell size={20} />
                    <div className="bg-error rounded-full w-[10px] h-[10px] absolute top-0 right-0" />
                </div>
            </div>
            <div className="flex flex-col gap-4 p-6 h-full rounded-3xl overflow-y-auto">
                <Outlet />
            </div>
            <div className="flex justify-around sticky bottom-0 p-4 mt-auto shadow-base">
                <NavItem variant="active" to="/" icon={<LayoutDashboard size={20} />} />
                <NavItem to="/stock" icon={<Box size={20} />} />
                <NavItem to="/purchase" icon={<ShoppingBag size={20} />} />
                <NavItem to="/sales" icon={<Calculator size={20} />} />
            </div>
        </div>
    )
}
