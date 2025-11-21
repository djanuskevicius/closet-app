export type Clothing = {
  id: string;
  name: string;
  category: "top" | "bottom" | "outerwear" | "shoes" | "accessory";
  color: string;
  brand: string;
  imageUrl: string;
  notes?: string;
};

export type Outfit = {
  id: string;
  name: string;
  clothingItemIds: string[];
};
