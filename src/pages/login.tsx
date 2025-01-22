import { Button } from '@/components/ui/button'
import { LoginDto } from '@/dto/login'
import { loginSchema } from '@/schema/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { InputField } from '@/components/ui/InputField.tsx'
import { FormProvider } from '@/components/ui/form-provider.tsx'
import { useBoolean } from '@/hooks/use-boolean.tsx'

export function Login(): JSX.Element {
    const navigate = useNavigate()
    const password = useBoolean()

    const methods = useForm<LoginDto>({
        resolver: zodResolver(loginSchema),
    })
    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods

    const onSubmit = handleSubmit(async (data) => {
        console.log(data)

        navigate('/')
    })

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

            <FormProvider
                methods={methods}
                onSubmit={onSubmit}
                className="px-0"
            >
                <InputField
                    name="username"
                    label="Username"
                    placeholder="Enter your username"
                    type="text"
                />
                <div className="relative">
                    <InputField
                        name="password"
                        label="Password"
                        placeholder="Password"
                        type={password.value ? 'text' : 'password'}
                    />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-[16px] right-[5px]"
                        type="button"
                        onClick={password.onToggle}
                    >
                        {password.value ? (
                            <EyeOff size={20} className="text-muted" />
                        ) : (
                            <Eye size={20} className="text-muted" />
                        )}
                    </Button>
                </div>

                <a
                    href="/"
                    className="text-sm text-link ml-auto hover:text-link/75"
                >
                    Forgot Password?
                </a>

                <Button
                    size="lg"
                    type="submit"
                    className="w-full"
                    isLoading={isSubmitting}
                >
                    Log in
                </Button>

                <p className="text-center text-sm">
                    Don&apos;t have an account?
                    <a href="/" className="text-link hover:text-link/75">
                        {' '}
                        Contact Support
                    </a>
                </p>
            </FormProvider>

            <div className="flex flex-col items-center justify-center gap-10 mt-4 w-full">
                <div className="w-64 h-px bg-gray-200 border-0 relative">
                    <span className="flex justify-center bg-background w-28 absolute left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <p className="text-muted text-sm">or login with</p>
                    </span>
                </div>
                <Button
                    variant="outline"
                    className="gap-2 font-semibold text-base w-full"
                >
                    <img
                        className="w-5 h-5"
                        src="/google.svg"
                        alt="Google Logo"
                    />
                    Google
                </Button>
            </div>
        </div>
    )
}
