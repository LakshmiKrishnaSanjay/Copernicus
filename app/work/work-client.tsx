"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const filters = ["All", "Brand Strategy", "Advertising", "Events", "Content", "Print"]

const projects = [
  {
    id: "pizza-creatives-branding",
    title: "Pizza Creatives Visual Identity",
    client: "Pizza Creatives",
    category: "Brand Strategy",
    image: "/pizza-creatives.jpg",
    tags: ["Brand Strategy", "Content"],
    description: "Complete visual identity system for emerging F&B brand",
  },
  {
    id: "yu-taekwondo-campaign",
    title: "YU Taekwondo Marketing Campaign",
    client: "YU Taekwondo Dubai",
    category: "Advertising",
    image: "/yu-taekwondo.jpg",
    tags: ["Advertising", "Print"],
    description: "Integrated marketing campaign across digital and print channels",
  },
  {
    id: "fasttrack-brand-identity",
    title: "Fasttrack Emarat Brand System",
    client: "Fasttrack Automotive Services",
    category: "Brand Strategy",
    image: "/fasttrack-proposal.webp",
    tags: ["Brand Strategy", "Print"],
    description: "Comprehensive brand identity and governance system",
  },
  {
    id: "vasmed-exhibition-design",
    title: "Vasmed Exhibition Stand Design",
    client: "Vasmed Medical Devices",
    category: "Events",
    image: "/vasmed-exhibition.png",
    tags: ["Events", "Brand Strategy"],
    description: "Premium exhibition stand design for medical trade show",
  },
  {
    id: "copernicus-social-content",
    title: "Copernicus Social Media Series",
    client: "Copernicus Agency",
    category: "Content",
    image: "/copernicus-social-carousel.jpg",
    tags: ["Content", "Advertising"],
    description: "Strategic social media content series and campaign assets",
  },
  {
    id: "powerbox-product-launch",
    title: "Power Box Product Launch Campaign",
    client: "Power Solutions",
    category: "Advertising",
    image: "/powerbox-campaign.jpg",
    tags: ["Advertising", "Content"],
    description: "Multi-channel product launch with integrated marketing",
  },
  {
    id: "fasttrack-ooh-campaign",
    title: "Fasttrack OOH Billboard Campaign",
    client: "Fasttrack Automotive Services",
    category: "Advertising",
    image: "/fasttrack-billboard.png",
    tags: ["Advertising", "Brand Strategy"],
    description: "Large-format out-of-home advertising campaign",
  },
  {
    id: "fasttrack-collateral-system",
    title: "Fasttrack Marketing Collateral",
    client: "Fasttrack Automotive Services",
    category: "Print",
    image: "/fasttrack-brochure.webp",
    tags: ["Print", "Brand Strategy"],
    description: "Premium print collateral and marketing materials",
  },
  {
    id: "project-9",
    title: "Brand Campaign Project 9",
    client: "Client Name",
    category: "Brand Strategy",
    image: "/work-mock-1.jpg",
    tags: ["Brand Strategy"],
    description: "Brand strategy and identity development",
  },
  {
    id: "project-10",
    title: "Advertising Campaign 10",
    client: "Client Name",
    category: "Advertising",
    image: "/work-mock-2.jpg",
    tags: ["Advertising"],
    description: "Full-scale advertising campaign",
  },
  {
    id: "project-11",
    title: "Event Design Project 11",
    client: "Client Name",
    category: "Events",
    image: "/work-mock-3.jpg",
    tags: ["Events"],
    description: "Event branding and experience design",
  },
  {
    id: "project-12",
    title: "Content Creation 12",
    client: "Client Name",
    category: "Content",
    image: "/work-mock-4.jpg",
    tags: ["Content"],
    description: "Content strategy and production",
  },
  {
    id: "project-13",
    title: "Print Design 13",
    client: "Client Name",
    category: "Print",
    image: "/work-mock-5.jpg",
    tags: ["Print"],
    description: "Print collateral and materials",
  },
  {
    id: "project-14",
    title: "Brand Project 14",
    client: "Client Name",
    category: "Brand Strategy",
    image: "/work-mock-6.jpg",
    tags: ["Brand Strategy"],
    description: "Brand development project",
  },
  {
    id: "project-15",
    title: "Ad Campaign 15",
    client: "Client Name",
    category: "Advertising",
    image: "/work-mock-7.jpg",
    tags: ["Advertising"],
    description: "Marketing and advertising campaign",
  },
  {
    id: "project-16",
    title: "Event Activation 16",
    client: "Client Name",
    category: "Events",
    image: "/work-mock-8.jpg",
    tags: ["Events"],
    description: "Event activation and management",
  },
]

export function WorkClientPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 text-balance leading-[1.1]"
              style={{ color: "var(--copernicus-text-primary)" }}
            >
              Our Work
            </h1>
            <p
              className="text-xl sm:text-2xl leading-relaxed mb-8"
              style={{ color: "var(--copernicus-text-secondary)" }}
            >
              A curated selection of projects that showcase our strategic thinking, creative excellence, and meticulous
              execution across diverse industries and markets.
            </p>
            <p className="text-lg" style={{ color: "var(--copernicus-orange)" }}>
              500+ projects delivered. Always evolving. Always exceeding expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--copernicus-section-bg)] border-y border-[var(--copernicus-border)]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={filter === activeFilter ? "default" : "outline"}
                className={
                  filter === activeFilter
                    ? "font-semibold"
                    : "font-semibold border-[var(--copernicus-border)] hover:border-[var(--copernicus-orange)] hover:bg-[var(--copernicus-orange-soft)] bg-transparent"
                }
                style={
                  filter === activeFilter
                    ? {
                        backgroundColor: "var(--copernicus-orange)",
                        color: "white",
                      }
                    : {}
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - Masonry Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredProjects.map((project, index) => {
              // Create varied aspect ratios for visual interest
              const aspectRatios = [
                "aspect-square",      // 1:1
                "aspect-[4/5]",      // portrait
                "aspect-[16/9]",     // landscape
                "aspect-[3/4]",      // tall
                "aspect-square",      // 1:1
                "aspect-[5/4]",      // wide
                "aspect-[4/5]",      // portrait
                "aspect-[16/9]",     // landscape
                "aspect-square",      // 1:1
                "aspect-[3/4]",      // tall
                "aspect-[5/4]",      // wide
                "aspect-square",      // 1:1
                "aspect-[4/5]",      // portrait
                "aspect-[16/9]",     // landscape
                "aspect-[3/4]",      // tall
                "aspect-square",      // 1:1
              ]
              
              return (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-lg"
                >
                  <div className={`relative w-full overflow-hidden ${aspectRatios[index % aspectRatios.length]}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--copernicus-section-bg)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-black mb-3" style={{ color: "var(--copernicus-orange)" }}>
                500+
              </div>
              <p style={{ color: "var(--copernicus-text-secondary)" }}>Projects Delivered</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-3" style={{ color: "var(--copernicus-orange)" }}>
                12+
              </div>
              <p style={{ color: "var(--copernicus-text-secondary)" }}>Markets Served</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-3" style={{ color: "var(--copernicus-orange)" }}>
                98%
              </div>
              <p style={{ color: "var(--copernicus-text-secondary)" }}>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--copernicus-orange)" }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Ready to Create Your Success Story?</h2>
          <p className="text-lg mb-12 text-white/90 max-w-2xl mx-auto">
            Let's collaborate on your next project and create work that stands out, resonates, and delivers measurable
            results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--copernicus-orange)] hover:bg-white/90 font-semibold px-8"
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--copernicus-orange)] bg-transparent font-semibold px-8"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
