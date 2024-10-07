import { Button } from '@/components/ui/button'
import ValidatedInput from '@/components/utils/validated-input'
import { LoginDto } from '@/dto/login'
import { loginSchema } from '@/schema/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function Login(): JSX.Element {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const hookForm = useForm<LoginDto>({
        resolver: zodResolver(loginSchema),
    })
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = hookForm

    function onSubmit(values: LoginDto): void {
        console.log(values)
    }

    return (
        <div className="flex flex-col gap-6">
            <p className="font-bold">TechkilaHub</p>
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-extrabold">
                    Sign in to your <br /> Account
                </h2>
                <p className="text-sm text-muted">
                    Enter your username and password to log in to your account
                </p>
            </div>
            <form
                onSubmit={handleSubmit((values) => onSubmit(values))}
                className="flex flex-col gap-2"
            >
                <ValidatedInput
                    name="username"
                    placeholder="Username"
                    error={errors.username}
                    register={register}
                    type="text"
                />
                <div className="relative">
                    <ValidatedInput
                        name="password"
                        placeholder="Password"
                        error={errors.password}
                        register={register}
                        type={showPassword ? 'text' : 'password'}
                    />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-[25px] right-[5px]"
                        type="button"
                        onClick={() => setShowPassword((oldValue) => !oldValue)}
                    >
                        {showPassword ? (
                            <EyeOff size={18} className="text-muted" />
                        ) : (
                            <Eye size={18} className="text-muted" />
                        )}
                    </Button>
                </div>
                <a href="/" className="text-sm text-link ml-auto">
                    Forgot Password?
                </a>

                <Button size="lg" type="submit" className="w-full">
                    Log in
                </Button>
                <p className="text-center text-sm">
                    Don&apos;t have an account?
                    <a href="/" className="text-link">
                        {' '}
                        Contact Support
                    </a>
                </p>
            </form>
            <div className="flex flex-col items-center justify-center gap-10 mt-4 w-full">
                <div className="w-64 h-px bg-gray-200 border-0 relative">
                    <span className="flex justify-center bg-background w-28 absolute left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <p className="text-muted text-sm">or login with</p>
                    </span>
                </div>
                <Button variant="outline" className="gap-2 font-semibold text-base w-full">
                    <img className="w-5 h-5" src="/google.svg" alt="Google Logo" />
                    Google
                </Button>
            </div>
        </div>
    )
}
