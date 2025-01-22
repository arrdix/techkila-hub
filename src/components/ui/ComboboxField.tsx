import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Check, ChevronsUpDown } from 'lucide-react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command.tsx'
import { cn } from '@/libs/utils.ts'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FieldErrorMessage } from '@/components/ui/field-error-message.tsx'

type Props = {
    name: string
    placeholder: string
    label?: string
    options: {
        id: string
        name: string
    }[]
}

export function ComboboxField({
    name,
    placeholder,
    label,
    options,
}: Props): JSX.Element {
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    const { control, setValue: setFieldValue } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({ fieldState: { error } }) => {
                return (
                    <div className="flex flex-col gap-2">
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
                                            {options.map((option) => (
                                                <CommandItem
                                                    className="h-12"
                                                    key={option.id}
                                                    value={option.name}
                                                    onSelect={(
                                                        currentValue
                                                    ) => {
                                                        console.log(
                                                            currentValue
                                                        )
                                                        const newValue =
                                                            currentValue ===
                                                            value
                                                                ? ''
                                                                : currentValue

                                                        setFieldValue(
                                                            name,
                                                            newValue
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
