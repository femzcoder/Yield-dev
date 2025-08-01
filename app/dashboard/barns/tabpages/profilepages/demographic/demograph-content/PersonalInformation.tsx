// components/demograph-content/EmploymentInformation.tsx
import { FormInput, FormSelect } from "@/components/common/FormInput"
import { ProfileFormValues } from "@/lib/types"
import { Controller, UseFormRegister, FieldErrors, Control } from "react-hook-form"



type Props = {
  register: UseFormRegister<ProfileFormValues>
  errors: FieldErrors<ProfileFormValues>
  control: Control<ProfileFormValues>
}

const PersonalInformation = ({ register, errors, control }: Props) => {
  return (
    <div className="space-y-4">

      <FormInput
        label="First Name"
        // name="lastname"
        placeholder="e.g. Doe"
        {...register("firstname", { required: "Last name is required" })}
        error={errors.lastname}
      />
      <FormInput
        label="Last Name"
        // name="lastname"
        placeholder="e.g. Doe"
        {...register("lastname", { required: "Last name is required" })}
        error={errors.lastname}
      />

      <Controller
        name="gender"
        control={control}
        rules={{ required: "Gender is required" }}
        render={({ field }) => (
          <FormSelect
            label="Gender"
            name="gender"
            value={field.value}
            onChange={field.onChange}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            error={errors.gender}
          />
        )}
      />

      <FormInput
        label="Marital Status"
        // name="marital_status"
        placeholder="e.g. Single"
        {...register("marital_status", { required: "Marital status is required" })}
        error={errors.marital_status}
      />

      <FormInput
        label="Date of Birth"
        // name="dob"
        type="date"
        {...register("dob", { required: "Date of birth is required" })}
        error={errors.dob}
      />
    </div>
  )
}

export default PersonalInformation
