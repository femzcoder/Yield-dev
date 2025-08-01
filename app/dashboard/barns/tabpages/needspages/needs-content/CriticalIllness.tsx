"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { FormInput, FormSelect } from "@/components/common/FormInput";
import { NeedsFormValues } from "@/lib/types";

type Option = { label: string; value: string };

const beneficiaryOptions: Option[] = [
  { label: "Myself", value: "self" },
  { label: "Spouse", value: "spouse" },
  { label: "Children", value: "children" },
];

const calculationOptions: Option[] = [
  { label: "Simple Interest", value: "simple" },
  { label: "Compound Interest", value: "compound" },
];



type Props = {
  control: Control<NeedsFormValues>;
  errors: FieldErrors<NeedsFormValues>;
};

const CriticalIllness = ({ control, errors }: Props) => {
  return (
    <div className="space-y-4">
      {/* c_Beneficiary */}
      <Controller
        name="c_beneficiary"
        control={control}
        rules={{ required: "Please select a beneficiary" }}
        render={({ field }) => (
          <FormSelect
            label="Who is the Beneficiary?"
            options={beneficiaryOptions}
            {...field}
            error={errors.c_beneficiary}
          />
        )}
      />

      {/* Years Needed for Funds */}
      <Controller
        name="c_amountNeeded"
        control={control}
        rules={{
          required: "Please enter the amount",
          min: { value: 1, message: "Amount must be at least 1" },
        }}
        render={({ field }) => (
          <FormInput
            label="Years needed for this funds?"
            type="number"
            placeholder="Enter amount"
            {...field}
            error={errors.c_amountNeeded}
          />
        )}
      />

      {/* Calculation Type */}
      <Controller
        name="c_calculationType"
        control={control}
        rules={{ required: "Please select a calculation type" }}
        render={({ field }) => (
          <FormSelect
            label="Choice of Calculation"
            options={calculationOptions}
            {...field}
            error={errors.c_calculationType}
          />
        )}
      />

      {/* Annual Amount Needed */}
      <Controller
        name="c_amountNeeded"
        control={control}
        rules={{
          required: "Please enter the amount",
          min: { value: 1, message: "Amount must be at least 1" },
        }}
        render={({ field }) => (
          <FormInput
            label="Annual Amount Needed"
            type="number"
            placeholder="Enter amount"
            {...field}
            error={errors.c_amountNeeded}
          />
        )}
      />

      {/* Years Needed */}
      <Controller
        name="c_yearsNeeded"
        control={control}
        rules={{
          required: "Please enter the number of years",
          min: { value: 1, message: "Must be at least 1 year" },
        }}
        render={({ field }) => (
          <FormInput
            label="Number of Years Needed"
            type="number"
            placeholder="Enter number of years"
            {...field}
            error={errors.c_yearsNeeded}
          />
        )}
      />

      {/* Liabilities */}
      <Controller
        name="c_liabilities"
        control={control}
        rules={{ required: "Please enter any liabilities." }}
        render={({ field }) => (
          <FormInput
            label="Liabilities"
            type="text"
            placeholder="Enter liabilities"
            {...field}
            error={errors.c_liabilities}
          />
        )}
      />

      {/* Existing Support */}
      <Controller
        name="c_existingSupport"
        control={control}
        rules={{
          required: "Please enter any support",
        }}
        render={({ field }) => (
          <FormInput
            label="Existing CI Support"
            type="text"
            placeholder=""
            {...field}
            error={errors.c_existingSupport}
          />
        )}
      />

      {/* Total Amount Needed */}
      <Controller
        name="c_totalAmountNeeded"
        control={control}
        rules={{
          required: "Please enter the amount",
          min: { value: 1, message: "Amount must be at least 1" },
        }}
        render={({ field }) => (
          <FormInput
            label="Total Amount Needed"
            type="number"
            placeholder="Enter amount"
            {...field}
            error={errors.c_totalAmountNeeded}
          />
        )}
      />
    </div>
  );
};

export default CriticalIllness;
