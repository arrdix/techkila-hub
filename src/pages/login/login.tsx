import { LoginForm } from '@/pages/login/components/login-form.tsx'
import { LoginThirdParty } from '@/pages/login/components/login-third-party.tsx'

export function Login(): JSX.Element {
    return (
        <div className="flex flex-col gap-6 p-8">
            <p className="font-bold">TechkilaHub</p>
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-extrabold">
                    Sign in to your <br /> Account
                </h2>
                <p className="text-sm text-muted">
                    Enter your username and password to log in to your account
                </p>
            </div>

            <LoginForm />

            <div className="flex flex-col items-center justify-center gap-10 mt-4 w-full">
                <LoginThirdParty />
            </div>
        </div>
    )
}
