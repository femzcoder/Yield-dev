"use client"

import { useForm, Controller } from "react-hook-form"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormInput } from "../common/FormInput"
import Link from "next/link"
import { redirect } from "next/navigation"
import Image from "next/image"

type LoginFormInputs = {
  email: string
  password: string
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  // const params = useParams()
  // const currentLang = params?.locale as string;
  const [loading, setLoading] = useState(false)

  const validatePasswordStrength = (value: string) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    return (
      strongRegex.test(value) || "Password must be 8+ chars, include A-Z, a-z, 0-9 & symbol"
    )
  }

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true)
    console.log(data)

    redirect(`/${'community'}`)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-none">
        <CardHeader>
          <div className="flex w-full items-center justify-center">
            <Image
              className=''
              src={'/icons/Logo-dark.png'}
              alt="Yield Logo"
              width={100}
              height={50}
            />
          </div>

          <CardTitle className="text-center font-bold text-[28px]">Log In</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">

              {/* Email Field */}
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
                    label="Email"
                    type="email"
                    {...field}
                    error={errors.email}
                  />
                )}
              />

              {/* Password Field */}
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
                      label="Password"
                      type={'password'}
                      {...field}
                      error={errors.password}
                    />
                    {/* <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-[38px] text-gray-500 hover:text-black"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                    </button> */}
                  </div>
                )}
              />

              {/* Forgot Password */}
              {/* <div className="flex justify-end text-sm">
                <a href="#" className="underline underline-offset-4">
                  Forgot your password?
                </a>
              </div> */}

              {/* Submit Button */}
              <Button type="submit" className="w-full rounded-[8px] text-white" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>

              {/* Footer */}
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href={`/signup`} className="underline underline-offset-4 gradient-text font-semibold">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
