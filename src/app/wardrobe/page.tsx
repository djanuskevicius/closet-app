"use client";

import { useWardrobe } from "@/components/context/WardrobeContext";
import Form from "@/components/Form";
import ItemCard from "@/components/ItemCard";

export default function Wardrobe() {
  const { clothing } = useWardrobe();
  console.log(clothing);

  return (
    <>
      <div>Wardrobe</div>
      <ul>
        <li>
          <strong>Current clothing items:</strong>
        </li>
        {clothing.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
      <Form />
    </>
  );
}
