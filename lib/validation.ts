// lib/validation.ts
import * as yup from "yup"

export const userFormSchema = yup.object({
  name: yup.string().required("Name is required").min(3, "Name too short"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup.number().optional().min(18, "Must be at least 18"),
})
