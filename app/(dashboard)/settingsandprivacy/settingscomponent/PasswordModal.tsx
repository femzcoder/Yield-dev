import { FormInput } from "@/components/common/FormInput"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { ArrowLeft } from "lucide-react"
import { Formik, Form } from "formik"
import { z } from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"

const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "New password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Confirm password must be at least 8 characters"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

function PasswordModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" flex flex-col bg-white border-none rounded-2xl p-0">
        {/* Header */}
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1 px-4">
            <ArrowLeft onClick={() => onOpenChange(false)} className="cursor-pointer" />
            <h3 className="text-sm font-semibold">Password</h3>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-4 overflow-y-auto">

          <div className="px-1 py-2 shadow-md">
            <p className="font-semibold text-[#2D2D2D]">Change password details below</p>
          </div>

          <Formik
            initialValues={{
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
            validationSchema={toFormikValidationSchema(passwordSchema)}
            onSubmit={(values) => {
              console.log("Profile submitted:", values)
              onOpenChange(false)
            }}
          >
            {({ values,
            //  errors, touched, 
             handleChange, handleBlur }) => (
              <Form className="space-y-4">
                <FormInput
                  name="currentPassword"
                  type="password"
                  label="Current Password"
                  placeholder="Password"
                  value={values.currentPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // error={touched.currentPassword && errors.currentPassword ? errors.currentPassword : undefined}
                />

                <FormInput
                  name="newPassword"
                  type="password"
                  label="New Password"
                  placeholder="Enter New Password"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // error={touched.newPassword && errors.newPassword ? errors.newPassword : undefined}
                />

                <FormInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm New Password"
                  placeholder="Confirm New Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // error={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : undefined}
                />

                <DialogFooter className="flex justify-end space-x-2">
                  <Button className="text-white rounded-[8px]" type="submit">
                    Update Password
                  </Button>
                </DialogFooter>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PasswordModal
