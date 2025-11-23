import { useWardrobe } from "@/components/context/WardrobeContext";
import type { Clothing, Outfit } from "@/types/clothing";

export default function OutfitCard({ outfit }: { outfit: Outfit }) {
  const { clothing, removeOutfit } = useWardrobe();

  function handleDelete() {
    if (!confirm("Delete this outfit?")) return;
    removeOutfit(outfit.id);
  }

  function getItemsForOutfit(outfit: Outfit): Clothing[] {
    return clothing.filter((item) => outfit.clothingItemIds.includes(item.id));
  }

  const items = getItemsForOutfit(outfit);

  return (
    <li className="bg-[#0a0a0a] border border-[#262626] rounded-2xl p-4 sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-semibold">{outfit.name}</h2>
          <p className="text-xs text-[#737373]">
            {items.length} item
            {items.length === 1 ? "" : "s"}
          </p>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="text-xs text-red-500 hover:text-red-400 cursor-pointer"
        >
          Delete
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-xs text-[#737373]">
          Items for this outfit are no longer in your wardrobe.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-[#262626] rounded-xl p-2 flex flex-col gap-2 bg-[#050505]"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-[#111111]">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[10px] text-[#737373]">
                    No image
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium">{item.name}</span>
                <span className="text-[10px] text-[#737373]">{item.brand}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
