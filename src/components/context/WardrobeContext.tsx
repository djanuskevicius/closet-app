"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Clothing, Outfit } from "@/types/clothing";
import {
  loadClothingItems,
  loadOutfits,
  saveClothingItems,
  saveOutfits,
} from "@/lib/storage";

import { mockClothingItems } from "@/mocks/mockClothingItems";

type WardrobeContextValue = {
  clothing: Clothing[];
  outfits: Outfit[];
  addClothing: (data: Omit<Clothing, "id">) => void;
  updateClothing: (id: string, patch: Partial<Omit<Clothing, "id">>) => void;
  removeClothing: (id: string) => void;
  addOutfit: (name: string, clothingItemIds: string[]) => void;
  removeOutfit: (id: string) => void;
  populateWithMockItems: () => void;
};

const WardrobeContext = createContext<WardrobeContextValue | null>(null);

type WardrobeProviderProps = {
  children: ReactNode;
};

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2);
}

export function WardrobeProvider({ children }: WardrobeProviderProps) {
  const [clothing, setClothing] = useState<Clothing[]>(() =>
    loadClothingItems()
  );
  const [outfits, setOutfits] = useState<Outfit[]>(() => loadOutfits());

  useEffect(() => {
    saveClothingItems(clothing);
  }, [clothing]);

  useEffect(() => {
    saveOutfits(outfits);
  }, [outfits]);

  function addClothing(data: Omit<Clothing, "id">) {
    setClothing((prev) => {
      const newItem: Clothing = {
        ...data,
        id: createId(),
      };
      return [...prev, newItem];
    });
  }

  function updateClothing(id: string, patch: Partial<Omit<Clothing, "id">>) {
    setClothing((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item))
    );
  }

  function removeClothing(id: string) {
    setClothing((prev) => prev.filter((item) => item.id !== id));

    setOutfits((prev) =>
      prev.map((outfit) => ({
        ...outfit,
        clothingItemIds: outfit.clothingItemIds.filter(
          (clothingId) => clothingId !== id
        ),
      }))
    );
  }

  function addOutfit(name: string, clothingItemIds: string[]) {
    const newOutfit: Outfit = {
      id: createId(),
      name,
      clothingItemIds,
    };

    setOutfits((prev) => [...prev, newOutfit]);
  }

  function removeOutfit(id: string) {
    setOutfits((prev) => prev.filter((outfit) => outfit.id !== id));
  }

  function populateWithMockItems() {
    setClothing((prev) => {
      if (prev.length > 0) return prev;
      return mockClothingItems;
    });
  }

  const value: WardrobeContextValue = {
    clothing,
    outfits,
    addClothing,
    updateClothing,
    removeClothing,
    addOutfit,
    removeOutfit,
    populateWithMockItems,
  };

  return (
    <WardrobeContext.Provider value={value}>
      {children}
    </WardrobeContext.Provider>
  );
}

export function useWardrobe(): WardrobeContextValue {
  const context = useContext(WardrobeContext);
  if (!context) {
    throw new Error("useWardrobe must be used within a WardrobeProvider");
  }
  return context;
}
