// components/demograph-content/EmploymentInformation.tsx
import { FormInput } from "@/components/common/FormInput"
import { UseFormRegister, FieldErrors } from "react-hook-form"

type FormValues = {
  // Personal Information
  firstname: string
  lastname: string
  gender: string
  marital_status: string
  dob: string
  // Contact Information
  phone: string
  email: string
  address: string
  // Employment Information
  occupation: string
  employer: string
  // Citizen Information
  citizen_status: string
  country: string
  province: string
  city: string
  id_method: string
  id_number: string
  // Education Information
  degree: string
  languages: {
    name: string
    level: "basic" | "fluent"
  }[]
}

type Props = {
  register: UseFormRegister<FormValues>
  errors: FieldErrors<FormValues>
}

const EmploymentInformation = ({ register, errors }: Props) => {
  return (
    <div className="space-y-4">
      <FormInput
        label="Occupation"
        // name="occupation"
        placeholder="e.g. Software Engineer"
        {...register("occupation", { required: "Occupation is required" })}
        error={errors.occupation}
      />
      <FormInput
        label="Employer"
        // name="employer"
        placeholder="e.g. Microsoft"
        {...register("employer", { required: "Employer is required" })}
        error={errors.employer}
      />
    </div>
  )
}

export default EmploymentInformation
