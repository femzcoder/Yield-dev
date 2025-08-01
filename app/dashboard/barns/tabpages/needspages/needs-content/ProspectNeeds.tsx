import { Controller, Control, FieldErrors } from "react-hook-form";
import { FormCheckbox } from "@/components/common/FormInput";
import { ActionText } from "@/components/Typo";
import { NeedsFormValues } from "@/lib/types";

interface CategoryType {
  label: string;
  name: keyof FormValues;
  options: { label: string; value: string }[];
}

type FormValues = {
  wealthAccumulation: string[];
  protection: string[];
};

const categories: CategoryType[] = [
  {
    label: "Wealth Accumulation",
    name: "wealthAccumulation",
    options: [
      { label: "Savings", value: "savings" },
      { label: "Retirement", value: "retirement" },
      { label: "Education", value: "education" },
    ],
  },
  {
    label: "Protection",
    name: "protection",
    options: [
      { label: "Death", value: "health" },
      { label: "Total or Permanent Disabilities", value: "life" },
      { label: "Critical Illness", value: "disability" },
    ],
  },
];

type Props = {
  control: Control<NeedsFormValues>;
  errors: FieldErrors<NeedsFormValues>;
};

const ProspectNeed = ({ control, errors }: Props) => {
  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category.name}>
          <ActionText title={category.label} />

          <Controller
            name={category.name}
            control={control}
            defaultValue={[]}
            rules={{
              validate: (value) =>
                value.length > 0 || "Please select at least one option",
            }}
            render={({ field }) => {
              const { value, onChange } = field;

              const toggleValue = (checked: boolean, optionValue: string) => {
                if (checked) {
                  onChange([...value, optionValue]);
                } else {
                  onChange(value.filter((v: string) => v !== optionValue));
                }
              };

              return (
                <div className="space-y-2 mt-2">
                  {category.options.map((option) => (
                    <FormCheckbox
                      parentStyle={`flex-row-reverse justify-between w-full rounded-[8px] border items-center pl-2 py-2 ${
                        value.includes(option.value)
                          ? "border-[#C79438]"
                          : "border-[#f2f1f1]"
                      }`}
                      key={option.value}
                      label={option.label}
                      name={`${category.name}_${option.value}`}
                      checked={value.includes(option.value)}
                      onChange={(checked: boolean) =>
                        toggleValue(checked, option.value)
                      }
                      // error={errors?.[category.name]}
                    />
                  ))}
                  {errors?.[category.name] && (
                    <p className="text-red-500 text-sm">
                      {errors[category.name]?.message as string}
                    </p>
                  )}
                </div>
              );
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProspectNeed;
