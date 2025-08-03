// comCompanyemograph-content/EducationInformation.tsx
import { FormInput, FormSelect } from "@/components/common/FormInput"
import {
  Controller,
  UseFormRegister,
  FieldErrors,
  Control,
} from "react-hook-form"
import { ProfileFormValues } from "@/lib/types"


type Props = {
  register: UseFormRegister<ProfileFormValues>
  control: Control<ProfileFormValues>
  errors: FieldErrors<ProfileFormValues>
}

const languageOptions = [
  { label: "Active", value: "active" },
  { label: "French", value: "french" },
  { label: "Yoruba", value: "yoruba" },
  { label: "Igbo", value: "igbo" },
  { label: "Hausa", value: "hausa" },
]

const CompanyInformation = ({ register, control, errors }: Props) => {

  return (
    <div className="space-y-6">
      <FormInput
        label="Company"
        placeholder="e.g. Bachelor's Degree"
        {...register("company", { required: "Degree is required" })}
        error={errors.degree}
      />
      <FormInput
        label="Company Address 1"
        placeholder="e.g. Bachelor's Degree"
        {...register("company_address_1", { required: "Degree is required" })}
        error={errors.degree}
      />
      <FormInput
        label="Company Address 2"
        placeholder="e.g. Bachelor's Degree"
        {...register("company_address_2", { required: "Degree is required" })}
        error={errors.degree}
      />
      <FormInput
        label="Company ID"
        placeholder="e.g. Bachelor's Degree"
        {...register("company_id", { required: "Degree is required" })}
        error={errors.degree}
      />

        <Controller
              name={`company_status`}
              control={control}
              rules={{ required: "Company Status is required" }}
              render={({ field }) => (
                <FormSelect
                  label=""
                  name=""
                  value={field.value}
                  onChange={field.onChange}
                  options={languageOptions}
                //   error={errors.languages?.name}
                />
              )}
            />
              <FormInput
        label="Website"
        placeholder="e.g. Bachelor's Degree"
        {...register("company_website", { required: "Degree is required" })}
        error={errors.degree}
      />
            <FormInput
        label="Total Annual Revenue"
        placeholder="e.g. Bachelor's Degree"
        {...register("company_annual_revenue", { required: "Degree is required" })}
        error={errors.degree}
      />
            <FormInput
        label="Number of Years in Business"
        placeholder="e.g. Bachelor's Degree"
        {...register("company_years", { required: "Degree is required" })}
        error={errors.degree}
      />
            <FormInput
        label="Number of Employees"
        placeholder="e.g. Bachelor's Degree"
        {...register("company_employees", { required: "Degree is required" })}
        error={errors.degree}
      />




    </div>
  )
}

export default CompanyInformation
