"use client"

import { useState, useEffect } from "react"
import { Menu, X, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-foreground transition-colors duration-300 hover:text-primary"
        >
          <Video className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">AndEdit</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <Button
          asChild
          size="sm"
          className="hidden bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 md:inline-flex"
        >
          <a href="#contato">Orçamento</a>
        </Button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-b-0"
        )}
      >
        <div className="flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contato" onClick={() => setIsOpen(false)}>
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
