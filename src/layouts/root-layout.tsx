import {
    ArrowRight,
    Bell,
    Download,
    Package2,
    SquareChartGantt,
    Upload,
} from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
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
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import { NavItem } from '@/components/navbar/nav-item.tsx'

export function Layout(): JSX.Element {
    const [activePath, setActivePath] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { pathname } = useLocation()

    const navigate = useNavigate()

    const paths = {
        dashboard: '',
        stock: 'stock',
        purchase: 'purchase',
        sales: 'sales',
    }

    const onNavClick = useCallback((destination: string) => {
        navigate(destination)
        setIsOpen(false)
    }, [])

    useEffect(() => {
        const path = pathname.split('/')[1]

        setActivePath(path)
    }, [pathname])

    return (
        <div className="flex flex-col h-screen max-w-[640px]">
            <div className="flex justify-between items-center sticky top-0 py-4 px-6 bg-white shadow-base z-50">
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        <div className="border rounded-full p-2 relative">
                            <Bell size={22} />
                            <div className="bg-error rounded-full w-[10px] h-[10px] absolute top-0 right-0" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="translate-x-2 max-w-[300px]">
                        <DropdownMenuLabel>Activities</DropdownMenuLabel>
                        {Array.from([1, 2, 3]).map((i) => (
                            <div key={i}>
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel className="text-xs font-medium">
                                    <span className="font-bold">
                                        Jesse Pinkman
                                    </span>{' '}
                                    issues{' '}
                                    <span className="font-bold">
                                        TKLA-BDG-0124-0123
                                    </span>{' '}
                                    <br />{' '}
                                    <span className="text-muted">4m ago</span>
                                </DropdownMenuLabel>
                            </div>
                        ))}
                        <DropdownMenuSeparator />
                        <Button
                            variant="ghost"
                            className="justify-end gap-1 text-xs w-full"
                        >
                            Show All Activities <ArrowRight size={16} />
                        </Button>
                    </DropdownMenuContent>
                </DropdownMenu>
                {/*<p className="text-xs font-semibold">Jesse Pinkman</p>*/}
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        <Avatar>
                            <AvatarImage src="/avatar.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="-translate-x-2">
                        <DropdownMenuLabel>
                            Jesse Pinkman{' '}
                            <p className="text-xs text-muted">Finance</p>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => navigate('/login')}>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex flex-col gap-4 p-6 h-screen rounded-3xl overflow-y-auto pb-28">
                <Outlet />
            </div>
            <div className="flex flex-col gap-4 px-4 pb-6  bg-transparent absolute bottom-0 h-24 w-full max-w-[640px]">
                <Drawer open={isOpen} onOpenChange={setIsOpen}>
                    <DrawerTrigger className="bg-background w-full h-full rounded-2xl shadow-top">
                        <p className="text-sm font-semibold">TechkilaHub</p>
                    </DrawerTrigger>
                    <DrawerContent className="h-full">
                        <DrawerHeader>
                            <DrawerTitle>
                                <p className="font-bold">TechkilaHub</p>
                            </DrawerTitle>
                            <DrawerDescription>Main Menu</DrawerDescription>
                        </DrawerHeader>
                        <div className="flex justify-center items-center h-full w-full">
                            <div className="grid grid-cols-2 place-items-center gap-2 h-1/2 w-3/4">
                                <NavItem
                                    title="Dashboard"
                                    variant={
                                        activePath === paths.dashboard
                                            ? 'active'
                                            : 'default'
                                    }
                                    icon={<SquareChartGantt size={40} />}
                                    onClick={() => onNavClick('/')}
                                />
                                <NavItem
                                    title="Stock"
                                    variant={
                                        activePath === paths.stock
                                            ? 'active'
                                            : 'default'
                                    }
                                    icon={<Package2 size={40} />}
                                    onClick={() => onNavClick('/stock')}
                                />
                                <NavItem
                                    title="Purchase"
                                    variant={
                                        activePath === paths.purchase
                                            ? 'active'
                                            : 'default'
                                    }
                                    icon={<Upload size={40} />}
                                    onClick={() => onNavClick('/purchase')}
                                />
                                <NavItem
                                    title="Sales"
                                    variant={
                                        activePath === paths.sales
                                            ? 'active'
                                            : 'default'
                                    }
                                    icon={<Download size={40} />}
                                    onClick={() => onNavClick('/sales')}
                                />
                            </div>
                        </div>
                        <DrawerFooter />
                    </DrawerContent>
                </Drawer>
            </div>
            {/*<div className="flex justify-center sticky bottom-0 p-2 mt-auto h-72">*/}

            {/*</div>*/}
        </div>
    )
}
