import { FormInput, FormRadioGroup } from "@/components/common/FormInput"
import { ProfileFormValues } from "@/lib/types"
import { Controller, FieldErrors, Control, UseFormRegister } from "react-hook-form"

type Props = {
  register: UseFormRegister<ProfileFormValues>
  control: Control<ProfileFormValues>
  errors: FieldErrors<ProfileFormValues>
}

const HealthInformation = ({ register, control, errors }: Props) => {
  return (
    <div className="space-y-4">
      {/* Smoker */}
      <Controller
        name="recently_smoked"
        control={control}
        rules={{ required: "Please specify if you smoke" }}
        render={({ field }) => (
          <FormRadioGroup
            label="Smoker"
            invert={true}
            name="recently_smoked"
            selected={field.value}
            onChange={field.onChange}
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            error={errors.recently_smoked}
          />
        )}
      />

      {/* Recently smoked */}
      <Controller
        name="hasDisability"
        control={control}
        rules={{ required: "Please specify if you smoked in the last 12 months" }}
        render={({ field }) => (
          <FormRadioGroup
            label="Pre-existing conditions"
            name="hasDisability"
            invert={true}
            selected={field.value}
            onChange={field.onChange}
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
              { label: "Not sure", value: "undefined" },
            ]}
            error={errors.hasDisability}
          />
        )}
      />

      <FormInput
        label="Note"
        type="text"
        placeholder="Write message here"
        {...register("note", {
          required: "Note is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid note format",
          },
        })}
        error={errors.note}
      />

    </div>
  )
}

export default HealthInformation
