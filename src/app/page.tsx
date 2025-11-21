import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* hero section */}
      <section className="max-w-[1440px] mx-auto px-8 pt-24 pb-32">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* left column */}
          <div className="col-span-6">
            <h1 className="mb-6 text-5xl font-bold">
              Organize your wardrobe without losing your mind
            </h1>
            <p className="text-[#737373] text-lg mb-8 max-w-[500px]">
              A simple tool to catalog your clothing and build outfits. All
              stored locally in your browser.
            </p>
            <div className="flex gap-3 mb-8">
              <Link
                href="/wardrobe"
                className="bg-[#22D3EE] hover:bg-[#0891b2] text-black rounded-xl px-3 py-1 border border-white/10"
              >
                Try demo
              </Link>
              <Link
                href="https://github.com/djanuskevicius/closet-app"
                target="_blank"
                rel="noreferrer"
                className="bg-[#111111] hover:bg-white/5 text-white rounded-xl px-3 py-1 border border-white/10"
              >
                Browse code
              </Link>
            </div>
            <p className="text-xs text-[#737373]">
              Built with Next.js, React, TypeScript, Tailwind
            </p>
          </div>

          {/* right column */}
          <div className="col-span-5">
            <h2 className="mb-8">How it works</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-[#22D3EE]/10 rounded-full flex items-center justify-center text-[#22D3EE] text-sm">
                  1
                </div>
                <div>
                  <h4 className="mb-1">Add your clothes</h4>
                  <p className="text-[#737373]">
                    Upload photos and basic details about each item
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-[#22D3EE]/10 rounded-full flex items-center justify-center text-[#22D3EE] text-sm">
                  2
                </div>
                <div>
                  <h4 className="mb-1">Tag them with categories and notes</h4>
                  <p className="text-[#737373]">
                    Organize by type, color, season, and occasion
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-[#22D3EE]/10 rounded-full flex items-center justify-center text-[#22D3EE] text-sm">
                  3
                </div>
                <div>
                  <h4 className="mb-1">Build outfits</h4>
                  <p className="text-[#737373]">
                    Combine pieces into complete looks
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-[#22D3EE]/10 rounded-full flex items-center justify-center text-[#22D3EE] text-sm">
                  4
                </div>
                <div>
                  <h4 className="mb-1">Use filters to decide what to wear</h4>
                  <p className="text-[#737373]">
                    Quickly find the perfect outfit for any day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features section */}
      <section className="max-w-[1440px] mx-auto px-8 py-24 border-t border-[#262626]">
        <div className="grid grid-cols-12 gap-6">
          {/* feature 1 */}
          <div className="col-span-4 bg-[#0a0a0a] border border-[#262626] rounded-2xl p-8">
            <h3 className="mb-3">Catalog everything</h3>
            <p className="text-[#737373]">
              Add photos, brands, categories, colors, and notes for every piece
              of clothing you own.
            </p>
          </div>

          {/* feature 2 */}
          <div className="col-span-4 bg-[#0a0a0a] border border-[#262626] rounded-2xl p-8">
            <h3 className="mb-3">Build outfits</h3>
            <p className="text-[#737373]">
              Combine items into complete looks. Save them for later.
            </p>
          </div>

          {/* feature 3 */}
          <div className="col-span-4 bg-[#0a0a0a] border border-[#262626] rounded-2xl p-8">
            <h3 className="mb-3">Filtering</h3>
            <p className="text-[#737373]">
              Filter by category, or use the search bar to find exactly what you
              need.
            </p>
          </div>
        </div>
      </section>

      {/* tech stack section */}
      <section className="max-w-[1440px] mx-auto px-8 py-24 border-t border-[#262626]">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Built with modern web tech
        </h2>

        <div className="flex justify-center gap-3 flex-wrap">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "LocalStorage",
          ].map((tech) => (
            <span
              key={tech}
              className="border-[#262626] bg-[#0a0a0a] text-white px-4 py-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* about section */}
      <section className="max-w-[1440px] mx-auto px-8 py-24 border-t border-[#262626]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold">About</h2>
          <p className="text-[#737373] text-lg">
            I am Domas, a frontend developer learning React, Next.js, TypeScript
            and Tailwind. This app is part of my preparation for the Vinted
            Academy Web Engineering application. I built it to show that I can
            structure a project, manage state cleanly, and design a simple and
            functional UI.
          </p>
        </div>
      </section>
    </div>
  );
}
