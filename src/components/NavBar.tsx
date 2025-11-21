"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="h-16 border-b border-[#262626] sticky top-0 bg-black z-50">
      <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-white">
          closet-app
        </Link>

        {/* Center: Links */}
        <div className="flex gap-8">
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

        {/* Right: Buttons */}
        <div className="flex gap-3">
          <a
            href="https://github.com/djanuskevicius/closet-app"
            target="_blank"
            rel="noreferrer"
            className="bg-[#111111] hover:bg-white/5 text-white rounded-xl px-3 py-1 border border-white/10"
          >
            View GitHub
          </a>
          <Link
            href="/wardrobe"
            className="bg-[#22D3EE] hover:bg-[#0891b2] text-black rounded-xl px-3 py-1 border border-white/10"
          >
            Open App
          </Link>
        </div>
      </div>
    </nav>
  );
}
