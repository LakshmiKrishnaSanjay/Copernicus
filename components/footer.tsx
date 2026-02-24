import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const company = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "Creative Talks", href: "/insights" },
  { name: "Contact", href: "/contact" },
]

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center group mb-6">
              <Image
                src="/copernicus-logo-white.svg"
                alt="Copernicus"
                width={140}
                height={58}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              A premium brand and creative agency crafting compelling brand experiences across strategy, design, and
              production.
            </p>
            <div className="mt-6">
              <p className="text-xs font-medium mb-2 text-white/60">#we_are_copernicus</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Get Started</h3>
            <p className="text-sm leading-relaxed mb-6 text-white/70">
              Ready to elevate your brand? Let's create something extraordinary together.
            </p>
            <div className="space-y-3">
              <Button
                asChild
                className="w-full font-semibold"
                style={{
                  backgroundColor: "var(--copernicus-orange)",
                  color: "white",
                }}
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full font-semibold border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom */}
        <div className="text-center">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} Copernicus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
