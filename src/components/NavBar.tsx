"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-16 border-b border-[#262626] sticky top-0 bg-black/90 backdrop-blur z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-sm sm:text-base">
          closet-app
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/wardrobe"
            className={`text-sm transition-colors ${
              pathname === "/wardrobe"
                ? "text-white"
                : "text-[#737373] hover:text-white"
            }`}
          >
            Wardrobe
          </Link>
          <Link
            href="/outfits"
            className={`text-sm transition-colors ${
              pathname === "/outfits"
                ? "text-white"
                : "text-[#737373] hover:text-white"
            }`}
          >
            Outfits
          </Link>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex gap-3">
          <a
            href="https://github.com/djanuskevicius/closet-app"
            target="_blank"
            rel="noreferrer"
            className="bg-[#111111] hover:bg-white/5 text-white rounded-xl px-3 py-1 border border-white/10 text-sm"
          >
            View GitHub
          </a>
          <Link
            href="/wardrobe"
            className="bg-[#22D3EE] hover:bg-[#0891b2] text-black rounded-xl px-3 py-1 border border-white/10 text-sm"
          >
            Open App
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-[#262626] px-4 py-3 flex flex-col gap-3">
          <Link
            href="/wardrobe"
            className="text-sm text-[#737373] hover:text-white"
            onClick={() => setOpen(false)}
          >
            Wardrobe
          </Link>
          <Link
            href="/outfits"
            className="text-sm text-[#737373] hover:text-white"
            onClick={() => setOpen(false)}
          >
            Outfits
          </Link>
          <a
            href="https://github.com/djanuskevicius/closet-app"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#737373] hover:text-white"
            onClick={() => setOpen(false)}
          >
            View GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
