// components/demograph-content/ContactInformation.tsx
import { Controller, Control, FieldErrors, UseFormRegister } from "react-hook-form"
import { FormInput } from "@/components/common/FormInput"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { ProfileFormValues } from "@/lib/types"

type Props = {
  register: UseFormRegister<ProfileFormValues>
  control: Control<ProfileFormValues>
  errors: FieldErrors<ProfileFormValues>
}

const ContactInformation = ({ register, control, errors }: Props) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
         Primary Phone Number
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
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
         Alternate Phone Number
        </label>
        <Controller
          name="alt_phone"
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
        label="Alternate Email"
        type="email"
        placeholder="e.g. user@example.com"
        {...register("alt_email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format",
          },
        })}
        error={errors.email}
      />

      <FormInput
        label="Residential Address Line 1"
        type="text"
        placeholder="e.g. 123 Main St, Ikeja, Lagos"
        {...register("address", {
          required: "Address is required",
        })}
        error={errors.address}
      />
      <FormInput
        label="Residential Address Line 2"
        type="text"
        placeholder="e.g. 123 Main St, Ikeja, Lagos"
        {...register("address2", {
          required: "Address is required",
        })}
        error={errors.address}
      />
      <FormInput
        label="Postal Code"
        type="text"
        placeholder="e.g. 123 Main St, Ikeja, Lagos"
        {...register("postal_code", {
          required: "Postal Code is required",
        })}
        error={errors.postal_code}
      />
      <FormInput
        label="City"
        type="text"
        placeholder="e.g. 123 Main St, Ikeja, Lagos"
        {...register("city", {
          required: "City is required",
        })}
        error={errors.city}
      />
      <FormInput
        label="Country"
        type="text"
        placeholder="e.g. 123 Main St, Ikeja, Lagos"
        {...register("country", {
          required: "Country is required",
        })}
        error={errors.country}
      />
    </div>
  )
}

export default ContactInformation
