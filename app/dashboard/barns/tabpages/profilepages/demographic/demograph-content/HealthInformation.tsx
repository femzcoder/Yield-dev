// components/demograph-content/EmploymentInformation.tsx
import { FormSelect } from "@/components/common/FormInput"
import { Controller, FieldErrors, Control } from "react-hook-form"

type FormValues = {
  recently_smoked: string
  hasDisability: string
  disability: string

}

type Props = {
  control: Control<FormValues>
  errors: FieldErrors<FormValues>
}

const HealthInformation = ({ control, errors }: Props) => {
  return (
    <div className="space-y-4">
      <Controller
        name="recently_smoked"
        control={control}
        rules={{ required: "All Health information is required" }}
        render={({ field }) => (
          <FormSelect
            label="Have you smoked in the last 12 months?"
            name="recently_smoked"
            value={field.value}
            onChange={field.onChange}
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            error={errors.recently_smoked}
          />
        )}
      />
      <Controller
        name="hasDisability"
        control={control}
        rules={{ required: "All Health information is required" }}
        render={({ field }) => (
          <FormSelect
            label="Have you smoked in the last 12 months?"
            name="hasDisability"
            value={field.value}
            onChange={field.onChange}
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
              { label: "Prefer not to say", value: "undefined" },
            ]}
            error={errors.hasDisability}
          />
        )}
      />
      <Controller
        name="disability"
        control={control}
        rules={{ required: "All Health information is required" }}
        render={({ field }) => (
          <FormSelect
            label="If yes, please indicate the type(s):"
            name="disability"
            value={field.value}
            onChange={field.onChange}
            options={[
              { label: "P", value: "citizen" },
              { label: "Resident", value: "resident" },
              { label: "Visitor", value: "visitor" },
            ]}
            error={errors.disability}
          />
        )}
      />
    </div>
  )
}

export default HealthInformation
