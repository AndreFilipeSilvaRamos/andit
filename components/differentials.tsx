"use client"

import { DollarSign, Heart, Zap, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const items = [
  {
    icon: DollarSign,
    title: "Preco Acessivel",
    description:
      "Servico de qualidade com valor justo. Investir no seu conteudo nao precisa custar caro.",
  },
  {
    icon: Heart,
    title: "Comprometimento",
    description:
      "Cada projeto recebe minha total dedicacao. Trabalho ate voce ficar 100% satisfeito.",
  },
  {
    icon: Zap,
    title: "Entrega Rapida",
    description:
      "Respeito prazos e priorizo a agilidade na entrega sem perder qualidade no resultado.",
  },
  {
    icon: Sparkles,
    title: "Edicao Criativa",
    description:
      "Transicoes modernas, efeitos visuais e trilhas que dao vida ao seu conteudo.",
  },
]

export function Differentials() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="diferenciais" className="px-4 py-24" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Diferenciais
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Por que trabalhar comigo?
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Qualidade e compromisso que fazem a diferenca no resultado final do
            seu projeto.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "group rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:bg-secondary/50",
                isVisible
                  ? "animate-fade-up opacity-0"
                  : "opacity-0",
                index === 0 && "animation-delay-0",
                index === 1 && "animation-delay-200",
                index === 2 && "animation-delay-400",
                index === 3 && "animation-delay-600"
              )}
              style={index === 0 ? { animationDelay: "0s" } : undefined}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
