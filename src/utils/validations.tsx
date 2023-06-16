import  { z } from "zod"
import * as Yup from 'yup';

export const validationWithMessageSchema = z.object({
    email: z.string({
        required_error:"Email is required",
    })
    .email(),
    message: z.string({
        required_error: "Message is required",
    }),
});

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    
    // message: z.string({
    //     required_error: "Message is required",
    // }),
});