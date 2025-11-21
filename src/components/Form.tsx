"use client";

import { useState } from "react";
import type { Clothing } from "@/types/clothing";
import { useWardrobe } from "@/components/context/WardrobeContext";

const initialFormData: Omit<Clothing, "id"> = {
  name: "",
  category: "top",
  color: "",
  brand: "",
  imageUrl: "",
  notes: "",
};

export default function Form() {
  const { addClothing } = useWardrobe();
  const [formData, setFormData] =
    useState<Omit<Clothing, "id">>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addClothing(formData);
        setFormData(initialFormData);
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <select
        name="category"
        onChange={handleChange}
        value={formData.category}
        required
      >
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="outerwear">Outerwear</option>
        <option value="shoes">Shoes</option>
        <option value="accessory">Accessory</option>
      </select>
      <input
        type="text"
        name="color"
        placeholder="Color"
        value={formData.color}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={formData.brand}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
        required
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />
      <button type="submit">Add Clothing Item</button>
    </form>
  );
}

// export type Clothing = {
//   id: string;
//   name: string;
//   category: "top" | "bottom" | "outerwear" | "shoes" | "accessory";
//   color: string;
//   brand: string;
//   imageUrl: string;
//   notes?: string;
// };
