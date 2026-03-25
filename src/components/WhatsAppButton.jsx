import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../data/site';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-[#25D366]/15 bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_24px_50px_rgba(37,211,102,0.28)] hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(37,211,102,0.34)]"
      aria-label="Open WhatsApp booking"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <MessageCircle size={20} />
      </span>
      <span className="hidden pr-1 sm:inline">Book on WhatsApp</span>
    </a>
  );
}
