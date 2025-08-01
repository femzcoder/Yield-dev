// components/demograph-content/EmploymentInformation.tsx
import { FormInput } from "@/components/common/FormInput"
import { ProfileFormValues } from "@/lib/types"
import { UseFormRegister, FieldErrors, Control } from "react-hook-form"

type Props = {
  register: UseFormRegister<ProfileFormValues>
  control: Control<ProfileFormValues>
  errors: FieldErrors<ProfileFormValues>
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
