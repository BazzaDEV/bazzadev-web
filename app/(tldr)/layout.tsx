import { cn } from "@/lib/utils"
import "@/app/globals.css"
import type { Metadata } from "next"
import { jetbrains_mono, inter } from "@/app/fonts"

export const metadata: Metadata = {
  title: "Kian Bazarjani",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          jetbrains_mono.variable,
          inter.variable,
          "min-h-screen max-w-xl flex flex-col m-auto py-10 px-7"
        )}
      >
        <div className="flex-1">{children}</div>
        <footer className={cn("text-slate-400 text-sm flex flex-col")}>
          <div>Copyright © 2023 by Kian Bazarjani.</div>

          <span className="sm:whitespace-pre">
            Built with ❤️ // Next.js, shadcn/ui, Framer Motion.
          </span>
        </footer>
      </body>
    </html>
  )
}