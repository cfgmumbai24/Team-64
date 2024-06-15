import {z} from zod;

export const StudentSchema=z.object({
    title:z.string(),
    content:z.string().min(5,{message:"Content should be 5 or more characters long."}),
    author:z.string(),
    publish_date:z.number(),
    likes:z.number(),
    comments:z.number()
})