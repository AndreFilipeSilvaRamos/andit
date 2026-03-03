"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Differentials } from "@/components/differentials"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Differentials />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
