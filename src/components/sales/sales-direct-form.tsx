import { InputField } from '@/components/ui/InputField.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    CreateDirectSaleSchema,
    createDirectSaleSchema,
} from '@/components/sales/schemas/sales-direct-schema.ts'
import { FormProvider } from '@/components/ui/form-provider.tsx'
import { MOCK_BRANCH } from '@/constants/mock.ts'
import { ComboboxField } from '@/components/ui/ComboboxField.tsx'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import { FilePlus2 } from 'lucide-react'
import { useState } from 'react'

const defaultValues: CreateDirectSaleSchema = {
    companyName: '',
    picName: '',
    phoneNumber: '',
    address: '',
    discount: 0,
    branch: '',
}

interface Props {
    title: string
    subtitle: string
}

export function SalesDirectForm({ title, subtitle }: Props): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)

    const methods = useForm({
        resolver: zodResolver(createDirectSaleSchema),
        defaultValues,
    })

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting },
    } = methods

    const handleClose = (): void => {
        setIsOpen(false)
        reset()
    }

    const onSubmit = handleSubmit(async (data) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolve')
            }, 5000)
        })

        console.log(data)
        handleClose()
    })

    return (
        <Drawer dismissible={false} open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger className="flex gap-4 justify-start items-center p-6  border rounded-lg w-full">
                <FilePlus2 size={20} />
                {title}
            </DrawerTrigger>
            <DrawerContent className="gap-4 h-full">
                <DrawerHeader>
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerDescription>{subtitle}</DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-col h-[80%]">
                    <FormProvider
                        methods={methods}
                        onSubmit={onSubmit}
                        scrollable
                    >
                        <InputField
                            name="companyName"
                            label="Company Name"
                            placeholder="Enter the company name"
                            type="text"
                        />
                        <InputField
                            name="picName"
                            label="PIC Name"
                            placeholder="Enter the PIC name"
                            type="text"
                        />
                        <InputField
                            name="phoneNumber"
                            label="Phone Number"
                            placeholder="Enter the phone number"
                            type="text"
                        />
                        <InputField
                            name="address"
                            label="Address"
                            placeholder="Enter the address"
                            type="text"
                        />
                        <InputField
                            name="discount"
                            label="Discount"
                            placeholder="Enter the discount"
                            type="number"
                        />
                        <ComboboxField
                            name="branch"
                            placeholder="Select the branch"
                            options={MOCK_BRANCH}
                        />

                        <Button
                            type="submit"
                            size="xl"
                            isLoading={isSubmitting}
                        >
                            Create
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="xl"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                    </FormProvider>
                </div>
                <DrawerFooter />
            </DrawerContent>
        </Drawer>
    )
}
