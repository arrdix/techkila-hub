import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export function FormContainer({ children }: Props): JSX.Element {
    return <div className="">{children}</div>
}
