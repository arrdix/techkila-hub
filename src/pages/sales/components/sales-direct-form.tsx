import { InputField } from '@/components/ui/InputField.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    CreateDirectSaleSchema,
    createDirectSaleSchema,
} from '@/pages/sales/schemas/sales-direct.schema.ts'
import { FormProvider } from '@/components/ui/form-provider.tsx'
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
import { CircleX, FilePlus2, Plus } from 'lucide-react'
import { useCallback, useState } from 'react'
import { cn } from '@/libs/utils.ts'
import { useCreateDirectSale } from '@/services/direct-sales/hooks/use-create-direct-sale.ts'
import { Option } from '@/types/shared.ts'
import { ProductService } from '@/services/product/product.service.ts'
import { getBranchOptions } from '@/constants/constants.ts'

const defaultValues: CreateDirectSaleSchema = {
    companyName: '',
    picName: '',
    phoneNumber: '',
    address: '',
    discount: 0,
    branch: '',
    products: [{ id: '', quantity: 1 }],
}

interface Props {
    title: string
    subtitle: string
}

const productService = new ProductService()

export function SalesDirectForm({ title, subtitle }: Props): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)

    const { mutateDirectSale } = useCreateDirectSale()

    const methods = useForm({
        resolver: zodResolver(createDirectSaleSchema),
        defaultValues,
    })

    const {
        control,
        reset,
        handleSubmit,
        formState: { isSubmitting },
        watch,
    } = methods

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'products',
    })

    const handleClose = useCallback(() => {
        setIsOpen(false)
        reset()
    }, [])

    const getProducts = useCallback(async (): Promise<Option[]> => {
        return await productService.getOptions()
    }, [])

    const getBranches = useCallback(async (): Promise<Option[]> => {
        return await getBranchOptions()
    }, [])

    const onSubmit = handleSubmit(async (payload) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolve')
            }, 5000)
        })

        await mutateDirectSale({ payload })

        console.log(payload)
        handleClose()
    })

    return (
        <Drawer dismissible={false} open={isOpen} onOpenChange={setIsOpen}>
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
                        <div className="flex flex-col gap-4">
                            {fields.map((field, i) => {
                                const selectedProduct = watch(
                                    `products.${i}.id`
                                )

                                return (
                                    <div key={field.id} className="flex gap-2">
                                        <ComboboxField
                                            preferId
                                            name={`products.${i}.id`}
                                            placeholder="Select the product"
                                            asyncFn={getProducts}
                                            className={cn(
                                                'w-10/12',
                                                fields.length > 1 && 'w-8/12'
                                            )}
                                        />
                                        <InputField
                                            disabled={!selectedProduct}
                                            name={`products.${i}.quantity`}
                                            label="Qty"
                                            placeholder="Qty"
                                            type="number"
                                            className="w-3/12"
                                        />
                                        {fields.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                className="w-1/12 h-16 text-background px-0"
                                                onClick={() => remove(i)}
                                            >
                                                <CircleX fill="red" />
                                            </Button>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                        <Button
                            type="button"
                            variant="secondary"
                            size="xl"
                            onClick={() => append({ id: '', quantity: 1 })}
                        >
                            <Plus size={18} className="mr-1" />
                            Product
                        </Button>
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
