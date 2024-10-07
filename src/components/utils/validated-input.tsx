import { FieldError, UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface ValidatedInputProps<T extends FieldValues> {
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    autoFocus?: boolean
    type: string
    placeholder: string
    name: Path<T>
    register: UseFormRegister<T>
    error: FieldError | undefined
}

function ValidatedInput<T extends FieldValues>(props: ValidatedInputProps<T>): JSX.Element {
    const { onKeyDown, autoFocus, type, placeholder, name, register, error } = props

    return (
        <div>
            <label htmlFor={name} className="text-xs font-medium text-muted">
                {placeholder}
            </label>
            <input
                onKeyDown={onKeyDown}
                className="border rounded-md h-10 pl-3 text-sm w-full placeholder:text-base placeholder:font-normal focus:outline-black"
                id={name}
                placeholder={placeholder}
                autoFocus={autoFocus}
                type={type}
                {...register(name)}
            />
            {error && <span className="text-error text-sm">{error.message}</span>}
        </div>
    )
}

export default ValidatedInput
