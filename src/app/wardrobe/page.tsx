"use client";

import type { Clothing } from "@/types/clothing";
import { useState } from "react";
import { useWardrobe } from "@/components/context/WardrobeContext";
import Form from "@/components/Form";
import ItemCard from "@/components/ItemCard";

export default function Wardrobe() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | Clothing["category"]
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { clothing } = useWardrobe();

  const filteredClothing = clothing.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const matchesSearch =
      normalizedQuery === "" ||
      (item.brand + item.name).toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  const categoryOptions: Clothing["category"][] = [
    "top",
    "bottom",
    "outerwear",
    "shoes",
    "accessory",
  ];

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;

    if (value === "all") {
      setSelectedCategory("all");
      return;
    }

    if (categoryOptions.includes(value as Clothing["category"])) {
      setSelectedCategory(value as Clothing["category"]);
      return;
    }

    throw new Error("Invalid category selected");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>Wardrobe</div>
      <div>
        <strong>Current clothing items:</strong>
        <select
          name="filter-category"
          id="filter-category"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e)}
        >
          <option value="all">All Categories</option>
          <option value="top">Tops</option>
          <option value="bottom">Bottoms</option>
          <option value="outerwear">Outerwear</option>
          <option value="shoes">Shoes</option>
          <option value="accessory">Accessories</option>
        </select>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>
      <ul>
        {filteredClothing.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
      <Form action="add" />
    </div>
  );
}
