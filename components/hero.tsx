"use client"

import { Play, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">
            Disponivel para novos projetos
          </span>
        </div>

        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Transformo suas ideias em{" "}
          <span className="text-primary">videos impactantes</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Edicao de video com dedicacao, criatividade e o melhor custo-beneficio.
          Estou comecando minha jornada e quero crescer junto com voce.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group gap-2 bg-primary px-8 text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105"
          >
            <a href="#portfolio">
              <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Ver Meu Trabalho
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-border bg-transparent px-8 text-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground hover:scale-105"
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar Orcamento
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex animate-bounce justify-center">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
            <div className="h-2 w-1 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
