import { ReactNode } from 'react'
import { Platform } from '@/types/enum.ts'
import { Badge } from '@/components/ui/badge.tsx'

type Props = {
    children: ReactNode
    platform: Platform
    onClick?: () => void
}

export function EcommerceBadge({
    platform,
    children,
    onClick,
}: Props): JSX.Element {
    if (platform === 'Shopee') {
        return (
            <Badge
                variant="default"
                className="bg-orange-500"
                onClick={onClick}
            >
                {children}
            </Badge>
        )
    }

    if (platform === 'Tokopedia') {
        return (
            <Badge variant="default" className="bg-green-800" onClick={onClick}>
                {children}
            </Badge>
        )
    }

    return (
        <Badge variant="default" onClick={onClick}>
            {children}
        </Badge>
    )
}
