"use client";

import { useState } from "react";
import { useWardrobe } from "@/components/context/WardrobeContext";
import OutfitCard from "@/components/OutfitCard";

export default function OutfitsPage() {
  const { clothing, outfits, addOutfit } = useWardrobe();

  const [name, setName] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  function toggleItem(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function handleCreateOutfit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();

    if (!trimmed) {
      alert("Please enter an outfit name");
      return;
    }

    if (selectedIds.length === 0) {
      alert("Please select at least one item");
      return;
    }

    addOutfit(name, selectedIds);
    setName("");
    setSelectedIds([]);
  }

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredClothing = clothing.filter(
    (item) =>
      normalizedQuery === "" ||
      (item.brand + item.name).toLowerCase().includes(normalizedQuery)
  );

  return (
    <main>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-16 pb-24">
        {/* header */}
        <div className="mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Outfits</h1>
            <p className="text-sm sm:text-base text-[#737373] max-w-xl">
              Combine your wardrobe items into outfits and see what works
              together.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-start justify-between md:flex-row">
          {/* outfits list */}
          <div className="w-full md:w-[60%]">
            {outfits.length === 0 ? (
              <div className="border border-[#262626] rounded-2xl p-10 text-center text-sm text-[#737373]">
                You don&apos;t have any outfits yet. Create one using the form
                on the right.
              </div>
            ) : (
              <ul>
                {outfits.map((outfit) => (
                  <OutfitCard key={outfit.id} outfit={outfit} />
                ))}
              </ul>
            )}
          </div>

          {/* create outfit form */}
          <aside className="bg-[#0a0a0a] border border-[#262626] rounded-2xl p-4 w-full sm:p-6 md:w-[40%]">
            <h2 className="text-lg font-semibold mb-2">Create new outfit</h2>
            <p className="text-xs text-[#737373] mb-4">
              Name your outfit and choose a few items from your wardrobe.
            </p>

            <form onSubmit={handleCreateOutfit} className="space-y-4">
              <div>
                <label
                  htmlFor="outfit-name"
                  className="text-xs uppercase tracking-wide text-[#737373]"
                >
                  Outfit name
                </label>
                <input
                  id="outfit-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-[#262626] rounded-lg px-3 py-2 text-sm outline-none placeholder:text-[#525252]"
                  placeholder="e.g. Casual Friday, Winter Layered"
                />
              </div>
              <div className="flex flex-col gap-1">
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

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="uppercase tracking-wide text-[#737373]">
                    Items
                  </label>
                  <span className="text-[#737373]">
                    {selectedIds.length} selected
                  </span>
                </div>

                <div className="max-h-60 overflow-y-auto rounded-lg border border-[#262626] bg-black/40 p-2 space-y-1">
                  {clothing.length === 0 ? (
                    <p className="text-xs text-[#737373] px-1 py-2">
                      You don&apos;t have any items yet. Add some in the
                      Wardrobe page first.
                    </p>
                  ) : (
                    filteredClothing.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2 rounded-md px-2 py-1 text-xs hover:bg-white/5 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(item.id)}
                          onChange={() => toggleItem(item.id)}
                          className="h-3 w-3 accent-[#22D3EE]"
                        />
                        <span className="truncate">
                          {item.name}{" "}
                          <span className="text-[#737373]">· {item.brand}</span>
                        </span>
                      </label>
                    ))
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#22D3EE] hover:bg-[#0891b2] text-black rounded-xl px-3 py-2 text-sm border border-white/10 disabled:opacity-60 cursor-pointer"
                disabled={clothing.length === 0}
              >
                Save outfit
              </button>
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
}
