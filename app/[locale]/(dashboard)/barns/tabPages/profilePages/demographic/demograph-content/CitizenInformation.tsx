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
  control: Control<FormValues>
  errors: FieldErrors<FormValues>
}

const CitizenInformation = ({ register, control, errors }: Props) => {
  return (
    <div className="space-y-4">
      <Controller
        name="citizen_status"
        control={control}
        rules={{ required: "Citizen status is required" }}
        render={({ field }) => (
          <FormSelect
            label="Citizen Status"
            name="citizen_status"
            value={field.value}
            onChange={field.onChange}
            options={[
              { label: "Citizen", value: "citizen" },
              { label: "Resident", value: "resident" },
              { label: "Visitor", value: "visitor" },
            ]}
            error={errors.citizen_status}
          />
        )}
      />

      <Controller
        name="country"
        control={control}
        rules={{ required: "Country is required" }}
        render={({ field }) => (
          <FormSelect
            label="Country"
            name="country"
            value={field.value}
            onChange={field.onChange}
            options={[
              { label: "Nigeria", value: "nigeria" },
              { label: "Ghana", value: "ghana" },
              { label: "Kenya", value: "kenya" },
              { label: "South Africa", value: "south_africa" },
            ]}
            error={errors.country}
          />
        )}
      />

      <FormInput
        label="Province/State"
        placeholder="e.g. Lagos"
        {...register("province", { required: "Province/State is required" })}
        error={errors.province}
      />

      <FormInput
        label="City"
        placeholder="e.g. Ikeja"
        {...register("city", { required: "City is required" })}
        error={errors.city}
      />

      <Controller
        name="id_method"
        control={control}
        rules={{ required: "Identification method is required" }}
        render={({ field }) => (
          <FormSelect
            label="Identification Method"
            name="id_method"
            value={field.value}
            onChange={field.onChange}
            options={[
              { label: "NIN", value: "nin" },
              { label: "Passport", value: "passport" },
              { label: "Driver’s License", value: "drivers_license" },
            ]}
            error={errors.id_method}
          />
        )}
      />

      <FormInput
        label="Identification Number"
        placeholder="e.g. A12345678"
        {...register("id_number", { required: "Identification number is required" })}
        error={errors.id_number}
      />
    </div>
  )
}

export default CitizenInformation
