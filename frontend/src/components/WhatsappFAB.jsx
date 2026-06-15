import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "./constants";

export default function WhatsappFAB() {
  return (
    <a
      data-testid="whatsapp-floating-button"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] hover:bg-[#1FB855] flex items-center justify-center text-white shadow-2xl whatsapp-pulse transition-colors"
    >
      <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8" />
    </a>
  );
}
