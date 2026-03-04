"use client"

import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Video Promocional",
    description:
      "Edicao dinamica para divulgacao de produto digital. Cortes rapidos, trilha envolvente e legendas animadas.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Conteudo para Redes Sociais",
    description:
      "Edicao otimizada para Instagram e TikTok com formato vertical, transicoes modernas e ritmo acelerado.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Video Institucional",
    description:
      "Montagem clean e profissional com color grading, graficos e animacoes de texto.",
    videoId: "dQw4w9WgXcQ",
  },
]

export function Portfolio() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section id="portfolio" className="px-4 py-24" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Portfólio
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Meus Trabalhos
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Confira alguns dos projetos que ja realizei. Substitua os vídeos
            abaixo pelos seus próprios links do YouTube.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/40",
                isVisible ? "animate-fade-up opacity-0" : "opacity-0",
                index === 0 && "animation-delay-0",
                index === 1 && "animation-delay-200",
                index === 2 && "animation-delay-400"
              )}
              style={index === 0 ? { animationDelay: "0s" } : undefined}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
