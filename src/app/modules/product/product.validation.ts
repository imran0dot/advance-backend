import { z } from 'zod';

const productZodSchema = z.object({
    name: z.string()
        .min(1, {
            message: 'Name is required'
        }),
    description: z.string()
        .min(1, {
            message: 'Description is required'
        }),
    price: z.number()
        .nonnegative()
        .min(0.01, {
            message: 'Price must be at least 0.01'
        }),
    category: z.string()
        .min(1, {
            message: 'Category is required'
        }),
    tags: z.array(z.string())
        .min(1, {
            message: 'Tags is required'
        }),
    variants: z.array(
        z.object({
            type: z.string()
                .min(1, {
                    message: 'Variant type is required'
                }),
            value: z.string()
                .min(1, {
                    message: 'Variant value is required'
                }),
        })
    ),
    inventory: z.object({
        quantity: z.number()
            .nonnegative()
            .min(0, {
                message: 'Quantity must be at least 0'
            }),
        inStock: z.boolean(),
    }),
});

export default productZodSchema;