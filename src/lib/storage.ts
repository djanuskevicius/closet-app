import type { Clothing, Outfit } from "@/types/clothing"; // import types

const CLOTHING_KEY = "closet_clothing_items"; // set up localStorage keys
const OUTFITS_KEY = "closet_outfits";

function isBrowser(): boolean {
  // check if code is running in browser
  return typeof window !== "undefined";
}

function loadFromLocalStorage<T>(key: string): T[] {
  if (!isBrowser()) return []; // return empty array if not in browser

  try {
    const rawData = window.localStorage.getItem(key); // get data from localStorage
    if (!rawData) return []; // return empty array if no data

    const parsedData = JSON.parse(rawData); // parse JSON data

    if (!Array.isArray(parsedData)) return []; // return empty array if data is not an array

    return parsedData as T[]; // return parsed data
  } catch (error) {
    console.error(
      `Failed to load items for key ${key} from localStorage: `,
      error
    );
    return [];
  }
}

function saveToLocalStorage<T>(key: string, items: T[]): void {
  if (!isBrowser()) return; // return empty array if not in browser

  try {
    const rawData = JSON.stringify(items); // convert items to JSON string
    window.localStorage.setItem(key, rawData); // save data to localStorage
  } catch (error) {
    console.error(
      `Failed to save items for key ${key} to localStorage: `,
      error
    );
  }
}

export function loadClothingItems(): Clothing[] {
  return loadFromLocalStorage<Clothing>(CLOTHING_KEY);
}

export function saveClothingItems(items: Clothing[]): void {
  saveToLocalStorage<Clothing>(CLOTHING_KEY, items);
}

export function loadOutfits(): Outfit[] {
  return loadFromLocalStorage<Outfit>(OUTFITS_KEY);
}

export function saveOutfits(items: Outfit[]): void {
  saveToLocalStorage<Outfit>(OUTFITS_KEY, items);
}
