export default function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-black">
      <div className="max-w-[1440px] mx-auto px-8 py-8 flex items-center justify-between">
        <p className="text-sm text-[#737373]">© 2025 closet-app.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/djanuskevicius"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#737373] hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/domas-janu%C5%A1kevi%C4%8Dius-4a6033263/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#737373] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:domas02911@gmail.com"
            className="text-sm text-[#737373] hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
