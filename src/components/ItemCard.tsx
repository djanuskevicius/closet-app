"use client";

import { useState } from "react";
import type { Clothing } from "@/types/clothing";
import { useWardrobe } from "@/components/context/WardrobeContext";
import Form from "@/components/Form";

export default function ItemCard({ item }: { item: Clothing }) {
  const [isEditing, setIsEditing] = useState(false);
  const { removeClothing } = useWardrobe();
  return (
    <li className="flex items-center gap-4">
      <p>{item.name}</p>
      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.name} width={100} height={100} />
      )}
      <button
        className="text-red-500"
        onClick={() => {
          if (!confirm("Delete this item?")) return;
          removeClothing(item.id);
        }}
      >
        X
      </button>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      {isEditing && (
        <Form action="edit" item={item} onDone={() => setIsEditing(false)} />
      )}
    </li>
  );
}
