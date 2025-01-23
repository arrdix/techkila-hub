import { useFormContext, Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input.tsx'
import { useId } from 'react'
import { FieldErrorMessage } from '@/components/ui/field-error-message.tsx'
import { cn } from '@/libs/utils.ts'

interface Props {
    name: string
    placeholder: string
    label?: string
    type: string
    className?: string
    disabled?: boolean
}

export function InputField({
    name,
    placeholder,
    label,
    type,
    className,
    disabled,
}: Props): JSX.Element {
    const { control } = useFormContext()

    const id = useId()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                return (
                    <div className={cn('flex flex-col gap-2', className)}>
                        <div className="relative rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 ring-foreground has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
                            {label && (
                                <label
                                    htmlFor={id}
                                    className="block px-3 pt-2 text-xs font-medium text-foreground"
                                >
                                    {label}
                                </label>
                            )}
                            <Input
                                {...field}
                                id={id}
                                placeholder={placeholder}
                                type={type}
                                disabled={disabled}
                                value={
                                    type === 'number' && field.value === 0
                                        ? ''
                                        : field.value
                                }
                                onChange={(event) => {
                                    if (type === 'number') {
                                        field.onChange(
                                            Number(event.target.value)
                                        )
                                    } else {
                                        field.onChange(event.target.value)
                                    }
                                }}
                                className="focus-visible:outline-none h-10 pt-0"
                            />
                        </div>
                        {error && (
                            <FieldErrorMessage>
                                {error.message}
                            </FieldErrorMessage>
                        )}
                    </div>
                )
            }}
        />
    )
}
