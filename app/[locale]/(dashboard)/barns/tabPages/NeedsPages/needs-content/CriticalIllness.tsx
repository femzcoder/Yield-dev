"use client"

import React from "react"
import { Controller } from "react-hook-form"
import { FormInput, FormSelect } from "@/components/common/FormInput"

type Option = { label: string; value: string }

const beneficiaryOptions: Option[] = [
  { label: "Myself", value: "self" },
  { label: "Spouse", value: "spouse" },
  { label: "Children", value: "children" },
]


const calculationOptions: Option[] = [
  { label: "Simple Interest", value: "simple" },
  { label: "Compound Interest", value: "compound" },
]

const CriticalIllness = ({ control, errors }: any) => {
  return (
    <div className="space-y-4">
      {/* Beneficiary */}
      <Controller
        name="beneficiary"
        control={control}
        rules={{ required: "Please select a beneficiary" }}
        render={({ field }) => (
          <FormSelect
            label="Who is the Beneficiary?"
            options={beneficiaryOptions}
            {...field}
            error={errors.beneficiary}
          />
        )}
      />

      {/* Duration of Loan */}
      <Controller
        name="amountNeeded"
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
            error={errors.amountNeeded}
          />
        )}
      />

      {/* Choice of Calculation */}
      <Controller
        name="calculationType"
        control={control}
        rules={{ required: "Please select a calculation type" }}
        render={({ field }) => (
          <FormSelect
            label="Choice of Calculation"
            options={calculationOptions}
            {...field}
            error={errors.calculationType}
          />
        )}
      />

      {/* Amount Needed */}
      <Controller
        name="amountNeeded"
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
            error={errors.amountNeeded}
          />
        )}
      />

      {/* Years Needed */}
      <Controller
        name="yearsNeeded"
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
            error={errors.yearsNeeded}
          />
        )}
      />

      <Controller
        name="liabilities"
        control={control}
        rules={{
          required: "Please enter any liabilities.",
        //   min: { value: 1, message: "Amount must be at least 1" },
        }}
        render={({ field }) => (
          <FormInput
            label="Liabilities"
            type="text"
            placeholder="Enter liabilities"
            {...field}
            error={errors.liabilities}
          />
        )}
      />
      <Controller
        name="existingSupport"
        control={control}
        rules={{
          required: "Please enter any support",
          min: { value: 1, message: "Amount must be at least 1" },
        }}
        render={({ field }) => (
          <FormInput
            label="Exisiting CI Support"
            type="text"
            placeholder=""
            {...field}
            error={errors.existingSupport}
          />
        )}
      />
      <Controller
        name="totalAmountNeeded"
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
            error={errors.amountNeeded}
          />
        )}
      />
    </div>
  )
}

export default CriticalIllness
