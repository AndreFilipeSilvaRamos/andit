"use client"

import { Target, TrendingUp, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="sobre" className="px-4 py-24" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text side */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            )}
          >
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
              Sobre Mim
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Dedicação e honestidade em cada projeto
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Sou um editor de video no inicio da minha jornada profissional.
                Ainda não tenho anos de experiência, mas o que me falta em tempo
                de mercado, eu compenso com dedicação, estudo constante e
                compromisso com cada projeto.
              </p>
              <p className="leading-relaxed">
                Acredito na transparência: estou aqui para aprender e evoluir
                junto com meus clientes. Cada vídeo que edito e uma oportunidade
                de entregar o meu melhor e construir uma reputação sólida baseada
                em resultados reais.
              </p>
              <p className="leading-relaxed">
                Meu objetivo e oferecer um serviço de qualidade com preço justo,
                provando que e possível ter um conteúdo visual incrível sem
                precisar investir fortunas.
              </p>
            </div>
          </div>

          {/* Values cards */}
          <div
            className={cn(
              "space-y-4 transition-all duration-700 delay-200",
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            )}
          >
            <div className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  Foco no Resultado
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Cada edição e pensada para alcançar o objetivo do seu projeto,
                  seja engajamento, vendas ou reconhecimento.
                </p>
              </div>
            </div>

            <div className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  Evolução Constante
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Estudo novas tecnicas e tendencias diariamente para entregar
                  edições cada vez melhores.
                </p>
              </div>
            </div>

            <div className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  Parceria Real
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Não sou apenas um prestador de serviço. Quero entender seu
                  projeto e crescer junto com você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
