import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/254720176247?text=Hi%20Milespace%2C%20I%27d%20love%20to%20discuss%20a%20project.";

export function FloatingContact() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-lg hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:outline-none"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

