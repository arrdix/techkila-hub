import { InputField } from '@/components/ui/InputField.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider } from '@/components/ui/form-provider.tsx'
import {
    CreateServiceSaleSchema,
    createServiceSaleSchema,
} from '@/pages/sales/schemas/sales-service.schema.ts'
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
import { useCallback, useState } from 'react'
import { useCreateServiceSale } from '@/services/service-sales/hooks/use-create-service-sale.ts'
import { Option } from '@/types/shared.ts'
import { getBranchOptions } from '@/constants/constants.ts'

const defaultValues: CreateServiceSaleSchema = {
    companyName: '',
    picName: '',
    phoneNumber: '',
    address: '',
    serviceName: '',
    total: 0,
    discount: 0,
    branch: '',
}

interface Props {
    title: string
    subtitle: string
}

export function SalesServiceForm({ title, subtitle }: Props): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)

    const { mutateServiceSale } = useCreateServiceSale()

    const methods = useForm({
        resolver: zodResolver(createServiceSaleSchema),
        defaultValues,
    })

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting },
    } = methods

    const handleClose = useCallback(() => {
        setIsOpen(false)
        reset()
    }, [])

    const getBranches = useCallback(async (): Promise<Option[]> => {
        return await getBranchOptions()
    }, [])

    const onSubmit = handleSubmit(async (payload) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolve')
            }, 3000)
        })

        await mutateServiceSale({ payload })

        console.log(payload)
        handleClose()
    })

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger className="flex gap-4 justify-start items-center p-6  border rounded-lg w-full">
                <FilePlus2 size={20} />
                {title}
            </DrawerTrigger>
            <DrawerContent className="gap-4 h-5/6">
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
                            name="serviceName"
                            label="Service Name"
                            placeholder="Enter the service name"
                            type="text"
                        />
                        <InputField
                            name="total"
                            label="Total"
                            placeholder="Enter the total"
                            type="number"
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
                            asyncFn={getBranches}
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
