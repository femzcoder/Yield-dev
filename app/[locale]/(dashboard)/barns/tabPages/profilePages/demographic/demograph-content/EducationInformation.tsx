// components/demograph-content/EducationInformation.tsx
import { FormInput, FormSelect } from "@/components/common/FormInput"
import {
  Controller,
  UseFormRegister,
  FieldErrors,
  Control,
  useFieldArray,
} from "react-hook-form"
import { Button } from "@/components/ui/button"

type FormValues = {
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

const languageOptions = [
  { label: "English", value: "english" },
  { label: "French", value: "french" },
  { label: "Yoruba", value: "yoruba" },
  { label: "Igbo", value: "igbo" },
  { label: "Hausa", value: "hausa" },
]

const EducationInformation = ({ register, control, errors }: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "languages",
  })

  const addLanguage = () => {
    append({ name: "", level: "basic" }) // default
  }

  return (
    <div className="space-y-6">
      <FormInput
        label="Highest Education Level"
        placeholder="e.g. Bachelor's Degree"
        {...register("degree", { required: "Degree is required" })}
        error={errors.degree}
      />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">Languages</h3>
          <Button type="button" className="gradient-text" variant={'ghost'} onClick={addLanguage} size="sm">
            + Add
          </Button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="space-y-2 px-4 rounded-md flex gap-3 items-center">
            <Controller
              name={`languages.${index}.name`}
              control={control}
              rules={{ required: "Language is required" }}
              render={({ field }) => (
                <FormSelect
                  label=""
                  name=""
                  value={field.value}
                  onChange={field.onChange}
                  options={languageOptions}
                  error={errors.languages?.[index]?.name}
                />
              )}
            />

            <div className="space-y-1">
              {/* <label className="text-sm font-medium">Proficiency</label> */}
              <div className="flex items-center gap-4">
                {["basic", "fluent"].map((level) => (
                  <label key={level} className="flex items-center gap-1">
                    <input
                      type="radio"
                      className=""
                      value={level}
                      {...register(`languages.${index}.level`)}
                      defaultChecked={field.level === level}
                    />
                    <span className="capitalize">{level}</span>
                  </label>
                ))}
              </div>
              {errors.languages?.[index]?.level && (
                <p className="text-sm text-destructive">
                  {errors.languages[index]?.level?.message}
                </p>
              )}
            </div>

            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => remove(index)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationInformation
