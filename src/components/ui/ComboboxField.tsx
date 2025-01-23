import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Check, ChevronsUpDown, LoaderCircle } from 'lucide-react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command.tsx'
import { cn } from '@/libs/utils.ts'
import { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FieldErrorMessage } from '@/components/ui/field-error-message.tsx'
import { Option } from '@/types/shared.ts'

type Props = {
    name: string
    placeholder: string
    label?: string
    className?: string
    preferId?: boolean
    asyncFn?: () => Promise<Option[]>
}

export function ComboboxField({
    name,
    placeholder,
    label,
    className,
    preferId,
    asyncFn,
}: Props): JSX.Element {
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const [options, setOptions] = useState<Option[]>([])
    const [isFetching, setIsFetching] = useState<boolean>(false)

    const { control, setValue: setFieldValue } = useFormContext()

    const getId = (name: string): string => {
        return options.find((option) => option.name === name)?.id || ''
    }

    const getOptions = async (): Promise<void> => {
        if (asyncFn) {
            const options: Option[] = await asyncFn()
            setOptions(options)
        }
    }

    useEffect(() => {
        setIsFetching(true)
        ;(async function fetch(): Promise<void> {
            await getOptions()
            setIsFetching(false)
        })()
    }, [])

    return (
        <Controller
            name={name}
            control={control}
            render={({ fieldState: { error } }) => {
                return (
                    <div className={cn('flex flex-col gap-2', className)}>
                        {label && label}
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-full h-16 justify-between"
                                >
                                    {value
                                        ? options.find(
                                              (option) => option.name === value
                                          )?.name
                                        : placeholder}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[350px] p-0">
                                <Command>
                                    <CommandInput
                                        className="h-16"
                                        placeholder="Search..."
                                    />
                                    <CommandList>
                                        <CommandEmpty>
                                            No option found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {isFetching && (
                                                <CommandItem className="h-12">
                                                    <LoaderCircle className="animate-spin" />
                                                    Loading...
                                                </CommandItem>
                                            )}
                                            {!isFetching &&
                                                options.map((option) => (
                                                    <CommandItem
                                                        className="h-12"
                                                        key={option.id}
                                                        value={option.name}
                                                        onSelect={(
                                                            currentValue
                                                        ) => {
                                                            const newValue =
                                                                currentValue ===
                                                                value
                                                                    ? ''
                                                                    : currentValue

                                                            setFieldValue(
                                                                name,
                                                                preferId
                                                                    ? getId(
                                                                          newValue
                                                                      )
                                                                    : newValue
                                                            )
                                                            setValue(newValue)
                                                            setOpen(false)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                'mr-2 h-4 w-4',
                                                                value ===
                                                                    option.name
                                                                    ? 'opacity-100'
                                                                    : 'opacity-0'
                                                            )}
                                                        />
                                                        {option.name}
                                                    </CommandItem>
                                                ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
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
