import { ToastContainer } from 'react-toastify'
import { Circle } from 'lucide-react'

export function Toaster(): JSX.Element {
    return (
        <ToastContainer
            icon={({ type }) => {
                switch (type) {
                    case 'info':
                        return <Circle fill="blue" className="text-blue-800" />
                    case 'error':
                        return <Circle fill="red" className="text-error" />
                    case 'success':
                        return <Circle fill="green" className="text-success" />
                    case 'warning':
                        return (
                            <Circle fill="yellow" className="text-yellow-500" />
                        )
                    default:
                        return null
                }
            }}
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeButton={false}
            toastStyle={{
                borderRadius: '10px',
                paddingInline: '1rem',
            }}
            className="px-8 py-4"
        />
    )
}
