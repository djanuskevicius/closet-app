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

const formInputStyle =
  "bg-black border border-[#262626] rounded-lg px-3 py-2 text-sm outline-none placeholder:text-[#525252]";

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
      if (!onDone) return;
      addClothing(formData);
      setFormData(initialFormData);
      onDone();
    } else if (action === "edit") {
      if (!item) return;
      if (!onDone) return;
      updateClothing(item.id, formData);
      onDone();
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className={formInputStyle}
      />
      <select
        name="category"
        onChange={handleChange}
        value={formData.category}
        required
        className={formInputStyle}
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
        className={formInputStyle}
      />
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={formData.brand}
        onChange={handleChange}
        required
        className={formInputStyle}
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
        required
        className={formInputStyle}
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
        className={formInputStyle}
      />
      <button
        type="submit"
        className="bg-[#111111] hover:bg-white/5 text-white text-sm rounded-xl py-2 border border-white/10 hover:cursor-pointer"
      >
        {action === "add" ? "Add Item" : "Save Changes"}
      </button>
    </form>
  );
}
