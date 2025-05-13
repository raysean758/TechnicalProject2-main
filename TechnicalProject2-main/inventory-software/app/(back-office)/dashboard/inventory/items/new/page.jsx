"use client";

import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/dashboard/FormHeader";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";

export default function NewItem() {
  const categories = [
    {
      label: "Electronics",
      value: "main",
    },
    {
      label: "Printer",
      value: "sdfjioehufh388838",
    },
  ];
  const units = [
    {
      label: "kg",
      value: "main",
    },
    {
      label: "Pcs",
      value: "sdfjioehufh388838",
    },
  ];
  const brands = [
    {
      label: "Dell",
      value: "main",
    },
    {
      label: "ASUS",
      value: "sdfjioehufh388838",
    },
  ];
  const suppliers = [
    {
      label: "JE Bergase",
      value: "main",
    },
    {
      label: "Govt.lc",
      value: "sdfjioehufh388838",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";

    try {
      const response = await fetch(`${baseUrl}/api/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory/" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800
                dark:border-gray-700 mx-auto my-3"
      >
        <div
          className="grid gap-4 sm:grid-cols-2
                    sm:gap-6"
        >
          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="CategoryID"
            label="Select Item Category"
            register={register}
            className="w-full"
            options={categories}
          />

          <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Item Quantity"
            name="quantity"
            register={register}
            errors={errors}
          />
          <SelectInput
            name="UnitID"
            label="Select Item Unit"
            register={register}
            className="w-full"
            options={units}
          />
          <SelectInput
            name="BrandID"
            label="Select Itemn Brand"
            register={register}
            className="w-full"
            options={brands}
          />
          <TextInput
            label="Buying Price"
            name="buyingPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <SelectInput
            name="SupplierID"
            label="Select Supplier"
            register={register}
            className="w-full"
            options={suppliers}
          />
          <TextInput
            label="Re-Order Point"
            name="reorderPoint"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInput
            label="Item Weight"
            name="weight"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInput
            label="Item Tax Rate in %"
            name="taxRate"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextareaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Item Notes"
            name="notes"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} title="Item" />
      </form>
    </div>
  );
}
