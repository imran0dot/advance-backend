import { z } from "zod";

export const OrderSchema = z.object({
    email: z.string(),
    productId: z.string(),
    price: z.number(),
    quantity: z.number(),
});
