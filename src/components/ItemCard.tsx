"use client";

import Modal from "@/components/Modal";
import { useState } from "react";
import type { Clothing } from "@/types/clothing";
import { useWardrobe } from "@/components/context/WardrobeContext";
import Form from "@/components/Form";

type ItemCardProps = {
  item: Clothing;
};

export default function ItemCard({ item }: ItemCardProps) {
  const [open, setOpen] = useState(false);
  const { removeClothing } = useWardrobe();

  function handleDelete() {
    if (!confirm("Delete this item?")) return;
    removeClothing(item.id);
  }

  return (
    <li className="flex flex-row md:flex-col items-center gap-4 bg-[#0a0a0a] border border-[#262626] rounded-2xl p-4">
      {/* image */}
      <div>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-24 w-24 object-cover bg-transparent rounded-lg"
        />
      </div>

      {/* details */}
      <div>
        <div className="mb-2 ">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-xs text-[#737373]">{item.brand}</p>
        </div>

        <div className="text-[#737373] text-sm mb-4 capitalize">
          <p>
            <span className="text-white">Color:</span> {item.color}
          </p>
          <p>
            <span className="text-white">Category:</span> {item.category}
          </p>
          {item.notes && (
            <p className="normal-case">
              <span className="text-white">Notes:</span> {item.notes}
            </p>
          )}
        </div>

        <div className="flex gap-3 ">
          <button
            className="bg-[#111111] hover:bg-white/5 text-red-500 text-sm rounded-xl px-3 py-1 border border-white/10 hover:cursor-pointer"
            onClick={handleDelete}
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
