import { InputField } from '@/components/ui/InputField.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Eye, EyeOff } from 'lucide-react'
import { FormProvider } from '@/components/ui/form-provider.tsx'
import { useBoolean } from '@/hooks/use-boolean.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, loginSchema } from '@/pages/login/schemas/login.schema.ts'
import { useNavigate } from 'react-router-dom'

const defaultValues: LoginSchema = {
    username: '',
    password: '',
}

export function LoginForm(): JSX.Element {
    const navigate = useNavigate()

    const password = useBoolean()

    const methods = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues,
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
        <FormProvider methods={methods} onSubmit={onSubmit} className="px-0">
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
                href="/public"
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
                <a href="/public" className="text-link hover:text-link/75">
                    {' '}
                    Contact Support
                </a>
            </p>
        </FormProvider>
    )
}
