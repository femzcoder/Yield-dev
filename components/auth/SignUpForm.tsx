"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { FormInput } from "../common/FormInput"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Link from "next/link"
// import { useParams } from "next/navigation"

type SignupFormInputs = {
  email: string
  password: string
  confirmPassword: string
}

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<SignupFormInputs>()
  // const params = useParams()
  // const currentLang = params?.locale as string;
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev)
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev)

  const validatePasswordStrength = (value: string) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    return (
      strongRegex.test(value) || "Password must be 8+ chars, include A-Z, a-z, 0-9 & symbol"
    )
  }

  const onSubmit = async (data: SignupFormInputs) => {
    setLoading(true)
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!res.ok) throw new Error("Signup failed")

      const result = await res.json()
      console.log("Signup successful:", result)

      // Redirect or show success message here
    } catch (err) {
      console.error("Signup error:", err)
      alert("Signup failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="text-center font-bold text-[28px]">Create an account</CardTitle>
          <CardDescription className="text-center">Fill the form below to sign up</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Email */}
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <FormInput
                  className="border border-[#F2F1F1] outline-0"
                  label="Email"
                  isImportant={true}
                  type="email"
                  {...field}
                  error={errors.email}
                />
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                validate: validatePasswordStrength,
              }}
              render={({ field }) => (
                <div className="relative">
                  <FormInput
                    className="border border-[#F2F1F1] outline-0"
                    label="Password"
                    isImportant={true}
                    type={showPassword ? "text" : "password"}
                    {...field}
                    error={errors.password}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-[38px] text-gray-500 hover:text-black"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                </div>
              )}
            />

            {/* Confirm Password */}
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm your password",
                validate: (val) =>
                  val === watch("password") || "Passwords do not match",
              }}
              render={({ field }) => (
                <div className="relative">
                  <FormInput
                    className="border border-[#F2F1F1] outline-0"
                    label="Confirm Password"
                    isImportant={true}
                    type={showConfirmPassword ? "text" : "password"}
                    {...field}
                    error={errors.confirmPassword}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-[38px] text-gray-500 hover:text-black"
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon size={18} />
                    ) : (
                      <EyeIcon size={18} />
                    )}
                  </button>
                </div>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full rounded-[8px] text-white" disabled={loading}>
              {loading ? "Creating account..." : "Sign Up"}
            </Button>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href={`/login`} className="underline underline-offset-4 gradient-text font-semibold">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
