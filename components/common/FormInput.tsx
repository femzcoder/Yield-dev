// components/FormInput.tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { FieldError } from "react-hook-form"
import PhoneInput from "react-phone-number-input/input"
import 'react-phone-number-input/style.css'

interface BaseProps {
  label: string
  name?: string
  error?: FieldError
  helperText?: string
  isImportant?: boolean
  className?: string,
  parentStyle?:string
}

interface InputProps extends BaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: string
  type?: "text" | "email" | 'number' | "password" | "date"
}

export const FormInput = ({
  label,
  name,
  error,
  helperText,
  className,
  isImportant = false,
  type = "text",
  ...props
}: InputProps) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}{isImportant && <span className="text-sm font-bold text-red-600">*</span>}</Label>
    <Input
      id={name}
      name={name}
      type={type}
      className={cn(
        "border border-[#F2F1F1] outline-0 rounded-[8px] outline-none focus-visible:ring-2 focus-visible:ring-ring bg-[#F2F1F1]",
        error && "border-destructive",
        className
      )}
      aria-invalid={!!error}
      {...props}
    />
    {error ? (
      <p className="text-[12px] text-red-600">{error.message}</p>
    ) : helperText ? (
      <p className="text-[12px] text-muted-foreground">{helperText}</p>
    ) : null}
  </div>
)

interface SelectInputProps extends BaseProps {
  options: { label: string; value: string }[]
  onChange: (value: string) => void
  value: string
}

export const FormSelect = ({
  label,
  name,
  options,
  onChange,
  value,
  error,
  helperText,
}: SelectInputProps) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}</Label>
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="bg-[#F2F1F1] outline-0 w-full border border-[#F2F1F1] rounded-[8px]" id={name}>
        <SelectValue placeholder={`Select ${label}`} />
      </SelectTrigger>
      <SelectContent className="bg-white border border-[#F2F1F1] rounded-[8px]">
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error ? (
      <p className="text-sm text-destructive">{error.message}</p>
    ) : helperText ? (
      <p className="text-sm text-muted-foreground">{helperText}</p>
    ) : null}
  </div>
)

interface CheckboxProps extends BaseProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export const FormCheckbox = ({
  label,
  name,
  checked,
  onChange,
  error,
  helperText,
  parentStyle
}: CheckboxProps) => (
  <div className={`flex items-start space-x-2 ${parentStyle}`}>
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="mt-1 outline-0"
    />
    <div className="space-y-1 leading-none">
      <Label className="font-normal" htmlFor={name}>{label}</Label>
      {error ? (
        <p className="text-sm text-destructive">{error.message}</p>
      ) : helperText ? (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  </div>
)

interface RadioGroupProps extends BaseProps {
  options: { label: string; value: string }[]
  selected: string
  onChange: (value: string) => void
}

export const FormRadioGroup = ({
  label,
  name,
  options,
  selected,
  onChange,
  error,
  helperText,
}: RadioGroupProps) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <div className="flex flex-col space-y-1">
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center space-x-2">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={selected === opt.value}
            onChange={() => onChange(opt.value)}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
    {error ? (
      <p className="text-sm text-destructive">{error.message}</p>
    ) : helperText ? (
      <p className="text-sm text-muted-foreground">{helperText}</p>
    ) : null}
  </div>
)

interface PhoneInputProps extends BaseProps {
  value: string
  onChange: (value: string | undefined) => void
  placeholder?: string
}

export const FormPhoneInput = ({
  label,
  name,
  value,
  onChange,
  error,
  helperText,
  placeholder = "Enter phone number",
}: PhoneInputProps) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}</Label>
    <PhoneInput
      id={name}
      name={name}
      international
      defaultCountry="NG"
      value={value}
      onChange={(val) => onChange(val || "")}
      placeholder={placeholder}
      className={cn(
        "w-full border rounded px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        error && "border-destructive focus-visible:ring-destructive"
      )}
    />
    {error ? (
      <p className="text-sm text-destructive">{error.message}</p>
    ) : helperText ? (
      <p className="text-sm text-muted-foreground">{helperText}</p>
    ) : null}
  </div>
)
