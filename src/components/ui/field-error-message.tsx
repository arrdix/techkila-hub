import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export function FieldErrorMessage({ children }: Props): JSX.Element {
    return <p className="pl-4 text-sm text-error">{children}</p>
}
