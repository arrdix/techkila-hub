import { FormProvider } from '@/components/ui/form-provider.tsx'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
    CreateEcommerceSaleSchema,
    createEcommerceSaleSchema,
} from '@/pages/sales/schemas/sales-ecommerce.schema.ts'
import { InputField } from '@/components/ui/InputField.tsx'
import { Button } from '@/components/ui/button.tsx'
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
import { useCreateEcommerceSale } from '@/services/ecommerce-sales/hooks/use-create-ecommerce-sale.ts'
import { Branch, Platform } from '@/types/enum.ts'
import { MOCK_BRANCH, MOCK_PLATFORM } from '@/constants/mock.ts'
import { ComboboxField } from '@/components/ui/ComboboxField.tsx'

const defaultValues: CreateEcommerceSaleSchema = {
    orderNo: '',
    total: 0,
    branch: '' as Branch,
    platform: '' as Platform,
}

interface Props {
    title: string
    subtitle: string
}

export function SalesEcommerceForm({ title, subtitle }: Props): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { mutateEcommerceSale } = useCreateEcommerceSale()

    const methods = useForm({
        resolver: zodResolver(createEcommerceSaleSchema),
        defaultValues,
    })

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting },
    } = methods

    const onSubmit = handleSubmit(async (payload) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolve')
            }, 5000)
        })

        await mutateEcommerceSale({ payload })

        console.log(payload)

        reset()
        setIsOpen(false)
    })

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger className="flex gap-4 justify-start items-center p-6  border rounded-lg w-full">
                <FilePlus2 size={20} />
                {title}
            </DrawerTrigger>
            <DrawerContent className="gap-4">
                <DrawerHeader>
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerDescription>{subtitle}</DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-col max-h-[350px]">
                    <FormProvider methods={methods} onSubmit={onSubmit}>
                        <InputField
                            name="orderNo"
                            label="Order No"
                            placeholder="Enter the order bo"
                            type="text"
                        />
                        <InputField
                            name="total"
                            label="Total"
                            placeholder="Enter the total order"
                            type="number"
                        />
                        <ComboboxField
                            name="branch"
                            placeholder="Select the branch"
                            options={MOCK_BRANCH}
                        />
                        <ComboboxField
                            name="platform"
                            placeholder="Select the platform"
                            options={MOCK_PLATFORM}
                        />

                        <Button size="xl" isLoading={isSubmitting}>
                            Create
                        </Button>
                    </FormProvider>
                </div>
                <DrawerFooter />
            </DrawerContent>
        </Drawer>
    )
}
