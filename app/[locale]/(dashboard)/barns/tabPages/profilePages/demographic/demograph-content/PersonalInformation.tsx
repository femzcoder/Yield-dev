// components/demograph-content/EmploymentInformation.tsx
import { FormInput, FormSelect } from "@/components/common/FormInput"
import { Controller, UseFormRegister, FieldErrors, Control } from "react-hook-form"

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
  control: Control<FormValues>
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
