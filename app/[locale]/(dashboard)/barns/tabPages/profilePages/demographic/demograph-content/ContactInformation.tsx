// components/demograph-content/ContactInformation.tsx
import { Controller, Control, FieldErrors, UseFormRegister } from "react-hook-form"
import { FormInput } from "@/components/common/FormInput"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"

type FormValues = {
  phone: string
  email: string
  address: string
}

type Props = {
  register: UseFormRegister<FormValues>
  control: Control<FormValues>
  errors: FieldErrors<FormValues>
}

const ContactInformation = ({ register, control, errors }: Props) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone Number
        </label>
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Phone number is required" }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              id="phone"
              international
              defaultCountry="NG"
              className={`w-full rounded-md border px-3 py-2 text-sm outline-none ${
                errors.phone ? "border-destructive" : "border-input"
              }`}
            />
          )}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <FormInput
        label="Email"
        type="email"
        placeholder="e.g. user@example.com"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format",
          },
        })}
        error={errors.email}
      />

      <FormInput
        label="Address"
        type="text"
        placeholder="e.g. 123 Main St, Ikeja, Lagos"
        {...register("address", {
          required: "Address is required",
        })}
        error={errors.address}
      />
    </div>
  )
}

export default ContactInformation
