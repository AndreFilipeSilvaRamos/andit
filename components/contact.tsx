"use client"

import { Mail, MessageCircle, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/seu_usuario",
    color: "hover:text-pink-400",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    href: "https://tiktok.com/@seu_usuario",
    color: "hover:text-foreground",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@seu_canal",
    color: "hover:text-red-400",
  },
]

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="contato" className="px-4 py-24" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div
          className={cn(
            "rounded-2xl border border-border bg-card p-8 text-center transition-all duration-700 md:p-12",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Contato
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Vamos trabalhar juntos?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-pretty text-muted-foreground">
            Entre em contato para discutir seu projeto. Responderei o mais
            rápido possível com um orçamento personalizado.
          </p>

          {/* WhatsApp CTA */}
          <Button
            asChild
            size="lg"
            className="mb-10 gap-2 bg-primary px-10 text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105"
          >
            <a
              href="https://wa.me/5500000000000?text=Ola!%20Gostaria%20de%20um%20orcamento%20para%20edicao%20de%20video."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </Button>

          {/* Email */}
          <div className="mb-8">
            <a
              href="mailto:seuemail@email.com"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              andrefsramosedit@email.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:scale-110",
                  social.color
                )}
                aria-label={`Visitar perfil no ${social.name}`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
