import { NavItem } from '@/components/navbar/nav-item'
import { ArrowRight, Bell, Box, Calculator, LayoutDashboard, ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function Layout(): JSX.Element {
	const [activePath, setActivePath] = useState<string>('')
	const {pathname} = useLocation()
	const navigate = useNavigate()

	const paths = {
		dashboard: '',
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
			<div className="flex justify-between items-center sticky top-0 py-4 px-6 bg-white shadow-base z-50">
				<DropdownMenu>
					<DropdownMenuTrigger className="focus:outline-none">
						<div className="border rounded-full p-2 relative">
							<Bell size={22}/>
							<div className="bg-error rounded-full w-[10px] h-[10px] absolute top-0 right-0"/>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="translate-x-2 max-w-[300px]">
						<DropdownMenuLabel>Activities</DropdownMenuLabel>
						{Array.from([1, 2, 3]).map((i) => (
							<div key={i}>
								<DropdownMenuSeparator/>
								<DropdownMenuLabel className="text-xs font-medium">
									<span className="font-bold">Jesse Pinkman</span> issues{' '}
									<span className="font-bold">TKLA-BDG-0124-0123</span> <br/>{' '}
									<span className="text-muted">4m ago</span>
								</DropdownMenuLabel>
							</div>
						))}
						<DropdownMenuSeparator/>
						<Button variant="ghost" className="justify-end gap-1 text-xs w-full">
							Show All Activities <ArrowRight size={16}/>
						</Button>
					</DropdownMenuContent>
				</DropdownMenu>
				<p className="font-bold">TechkilaHub</p>
				<DropdownMenu>
					<DropdownMenuTrigger className="focus:outline-none">
						<Avatar>
							<AvatarImage src="/avatar.png"/>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="-translate-x-2">
						<DropdownMenuLabel>
							Jesse Pinkman <p className="text-xs text-muted">Finance</p>
						</DropdownMenuLabel>
						<DropdownMenuSeparator/>
						<DropdownMenuItem onClick={() => navigate('/login')}>
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="flex flex-col gap-4 p-6 h-full rounded-3xl overflow-y-auto">
				<Outlet/>
			</div>
			<div className="flex justify-around sticky bottom-0 p-2 mt-auto bg-white shadow-base">
				<NavItem
					variant={activePath === paths.dashboard ? 'active' : 'default'}
					icon={<LayoutDashboard size={24}/>}
					to="/"
				/>
				<NavItem
					variant={activePath === paths.stock ? 'active' : 'default'}
					icon={<Box size={24}/>}
					to="/stock"
				/>
				<NavItem
					variant={activePath === paths.purchase ? 'active' : 'default'}
					icon={<ShoppingBag size={24}/>}
					to="/purchase"
				/>
				<NavItem
					variant={activePath === paths.sales ? 'active' : 'default'}
					icon={<Calculator size={24}/>}
					to="/sales"
				/>
			</div>
		</div>
	)
}
