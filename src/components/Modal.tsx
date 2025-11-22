type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-[#0a0a0a] p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded p-1 text-sm text-gray-400 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>
        {title && <h2 className="mb-4 text-lg font-semibold">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
