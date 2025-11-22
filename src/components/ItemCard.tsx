"use client";

import Modal from "@/components/Modal";
import { useState } from "react";
import type { Clothing } from "@/types/clothing";
import { useWardrobe } from "@/components/context/WardrobeContext";
import Form from "@/components/Form";

export default function ItemCard({ item }: { item: Clothing }) {
  const [open, setOpen] = useState(false);
  const { removeClothing } = useWardrobe();
  return (
    <li className="flex items-center gap-4 bg-[#0a0a0a] border border-[#262626] rounded-2xl p-4">
      <div>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-24 w-24 object-cover bg-transparent rounded-lg"
        />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold">
          {item.brand} {item.name}
        </h3>
        <div className="text-[#737373] text-sm mb-4">
          <p>
            <span className="text-white">Color:</span> {item.color}
          </p>
          <p>
            <span className="text-white">Brand:</span> {item.brand}
          </p>
          <p>
            <span className="text-white">Category:</span> {item.category}
          </p>
          {item.notes && (
            <p>
              <span className="text-white">Notes:</span> {item.notes}
            </p>
          )}
        </div>

        <div className="flex gap-3 ">
          <button
            className="bg-[#111111] hover:bg-white/5 text-red-500 text-sm rounded-xl px-3 py-1 border border-white/10 hover:cursor-pointer"
            onClick={() => {
              if (!confirm("Delete this item?")) return;
              removeClothing(item.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="bg-[#111111] hover:bg-white/5 text-white text-sm rounded-xl px-3 py-1 border border-white/10 hover:cursor-pointer"
          >
            Edit
          </button>
          <Modal isOpen={open} onClose={() => setOpen(false)} title="Edit item">
            <Form
              action="edit"
              item={item}
              onDone={() => {
                setOpen(false);
              }}
            />
          </Modal>
        </div>
      </div>
    </li>
  );
}
