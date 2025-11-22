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

type FormProps = {
  action: "add" | "edit";
  item?: Clothing;
  onDone?: () => void;
};

export default function Form({ action, item, onDone }: FormProps) {
  const { addClothing, updateClothing } = useWardrobe();
  const [formData, setFormData] = useState<Omit<Clothing, "id">>(() => {
    if (action === "edit" && item) {
      return item;
    } else {
      return initialFormData;
    }
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (action === "add") {
      addClothing(formData);
      setFormData(initialFormData);
    } else if (action === "edit") {
      if (!item) return;
      if (!onDone) return;
      updateClothing(item.id, formData);
      onDone();
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
      <button type="submit">
        {action === "add" ? "Add Item" : "Save Changes"}
      </button>
    </form>
  );
}
