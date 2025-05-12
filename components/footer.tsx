import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link href="/" className="font-bold">
              Jay Mewada
            </Link>
            <nav className="flex gap-4 md:gap-6">
              <Link
                href="#about"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
            <span>© {currentYear} Jay Mewada. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
