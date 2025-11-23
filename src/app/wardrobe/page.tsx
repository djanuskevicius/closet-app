"use client";

import type { Clothing } from "@/types/clothing";
import { useState } from "react";
import { useWardrobe } from "@/components/context/WardrobeContext";
import Form from "@/components/Form";
import ItemCard from "@/components/ItemCard";
import Modal from "@/components/Modal";

type CategoryFilter = "all" | Clothing["category"];

export default function Wardrobe() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

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
    <main className="min-h-screen bg-black">
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-16 pb-24">
        {/* header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Wardrobe</h1>
            <p className="text-sm sm:text-base text-[#737373] max-w-xl">
              View, filter, and manage your clothing items in one place.
            </p>
          </div>
        </div>

        {/* filter bar */}
        <div className="mb-10 bg-[#0a0a0a] border border-[#262626] rounded-2xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            {/* category */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="filter-category"
                className="text-xs uppercase tracking-wide text-[#737373]"
              >
                Category
              </label>
              <select
                name="filter-category"
                id="filter-category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="bg-black border border-[#262626] rounded-lg px-3 py-2 text-sm outline-none"
              >
                <option value="all">All categories</option>
                <option value="top">Tops</option>
                <option value="bottom">Bottoms</option>
                <option value="outerwear">Outerwear</option>
                <option value="shoes">Shoes</option>
                <option value="accessory">Accessories</option>
              </select>
            </div>

            {/* search */}
            <div className="flex flex-col gap-1 md:min-w-[220px]">
              <label
                htmlFor="search"
                className="text-xs uppercase tracking-wide text-[#737373]"
              >
                Search
              </label>
              <input
                id="search"
                type="search"
                placeholder="Search by name or brand"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-black border border-[#262626] rounded-lg px-3 py-2 text-sm outline-none placeholder:text-[#525252]"
              />
            </div>
            <div className="self-center md:self-end">
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className="bg-[#111111] hover:bg-white/5 text-white text-sm rounded-lg px-12 py-2 border border-white/10 hover:cursor-pointer"
              >
                Add Item
              </button>
              <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Add Item"
              >
                <Form
                  action="add"
                  onDone={() => {
                    setOpen(false);
                  }}
                />
              </Modal>
            </div>
          </div>

          {/* count */}
          <div className="text-xs sm:text-sm text-right text-[#737373]">
            {filteredClothing.length} item
            {filteredClothing.length === 1 ? "" : "s"}
          </div>
        </div>

        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10 items-start">
          {/* items grid / empty state */}
          {filteredClothing.length === 0 ? (
            <div className="border border-[#262626] rounded-2xl p-10 text-center text-[#737373] text-sm">
              No items found. Try changing the filters or add your first item
              below.
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredClothing.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </ul>
          )}

          {/* form side panel */}
          <aside className="bg-[#0a0a0a] border border-[#262626] rounded-2xl p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-2">Add new item</h2>
            <p className="text-xs text-[#737373] mb-4">
              Fill out the form to add a new clothing item to your wardrobe.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
