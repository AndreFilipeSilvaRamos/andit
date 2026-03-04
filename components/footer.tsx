import { Video } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Video className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            AndEdit
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} VideoEdit. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a
            href="#home"
            className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            Início
          </a>
          <a
            href="#portfolio"
            className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            Portfólio
          </a>
          <a
            href="#contato"
            className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  )
}
