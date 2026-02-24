import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Award, Quote, Star, ArrowRight } from "lucide-react"
import { OrganizationSchema, WebSiteSchema } from "@/lib/schema"
import { ClientLogos } from "@/components/client-logos"

export const metadata: Metadata = {
  title: "Copernicus - Premium Brand & Creative Agency",
  description:
    "Full-service brand and creative agency specializing in brand strategy, identity design, advertising, events, and content production.",
}

const capabilities = [
  "Brand Strategy & Identity",
  "Advertising & Campaigns",
  "Print & Production",
  "Event Management",
  "Film & Content",
  "Brand Consultancy",
]

const testimonials = [
  {
    quote:
      "Copernicus transformed our brand completely. The strategy was clear, the creative was bold, and the execution was flawless. They're true partners in growth.",
    author: "Sarah Al-Maktoum",
    role: "CEO",
    company: "Luxe Retail Group",
    rating: 5,
  },
  {
    quote:
      "What impressed us most was their integrated approach. Strategy, design, and production working in perfect harmony. Our brand has never been stronger.",
    author: "Mohammed Hassan",
    role: "Founder",
    company: "TechVenture",
    rating: 5,
  },
  {
    quote:
      "The team's creativity combined with strategic thinking delivered results we didn't expect. Our sales increased 40% in the first six months post-launch.",
    author: "Fatima Al-Sayed",
    role: "Marketing Director",
    company: "Premium Hospitality Group",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div>
      <OrganizationSchema />
      <WebSiteSchema />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] min-h-screen flex items-center">
          <div className="mx-auto max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <h1 className="text-[3.5rem] leading-[1] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-white tracking-tighter">
                    Brands That <span className="block">Resonate.</span>
                    <span className="block text-[var(--copernicus-orange)]">Experiences</span>
                    <span className="block">That Endure.</span>
                  </h1>
                </div>

                <p className="text-lg leading-relaxed text-white/60 max-w-lg">
                  A premium creative agency crafting compelling brand experiences from strategy to production. Transforming vision into reality.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full font-semibold px-10 py-6 bg-[var(--copernicus-orange)] hover:bg-[var(--copernicus-orange-hover)] text-white border-0 text-base"
                  >
                    <Link href="/work">Explore Our Work</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full font-semibold px-10 py-6 bg-transparent hover:bg-white/10 text-white border-2 border-white/20 text-base"
                  >
                    <Link href="/contact">Start a Project</Link>
                  </Button>
                </div>
              </div>

              {/* Right Side - Vertical Grid with Animation */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4 h-[600px] overflow-hidden">
                  {/* Left Column - Scroll Down */}
                  <div className="space-y-4 animate-scroll-down">
                    <div className="aspect-square rounded-lg overflow-hidden bg-white/5">
                      <img
                        src="/home-grid/carousel-posts.jpg"
                        alt="Brand campaigns and social media"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white/5">
                      <img
                        src="/home-grid/cola-bottle.jpg"
                        alt="Coca-Cola product design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-white/5">
                      <img
                        src="/home-grid/pizza-creatives.jpg"
                        alt="Pizza Creatives branding"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="aspect-square rounded-lg overflow-hidden bg-white/5">
                      <img
                        src="/home-grid/carousel-posts.jpg"
                        alt="Brand campaigns and social media"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white/5">
                      <img
                        src="/home-grid/cola-bottle.jpg"
                        alt="Coca-Cola product design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Column - Scroll Up */}
                  <div className="space-y-4 pt-20 animate-scroll-up">
                    <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white/5">
                      <img
                        src="/home-grid/vivo-launch-event.jpg"
                        alt="Vivo launch event campaign"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-white/5">
                      <img
                        src="/home-grid/crunchips-packaging.jpg"
                        alt="Crunchips packaging design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white/5">
                      <img
                        src="/home-grid/vivo-exhibition-booth.jpg"
                        alt="Vivo exhibition booth design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white/5">
                      <img
                        src="/home-grid/vivo-launch-event.jpg"
                        alt="Vivo launch event campaign"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-white/5">
                      <img
                        src="/home-grid/crunchips-packaging.jpg"
                        alt="Crunchips packaging design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2
                className="text-[36px] leading-[1.15] font-semibold mb-4"
                style={{ color: "var(--copernicus-text-primary)" }}
              >
                Trusted by Leading Brands
              </h2>
              <p
                className="text-base leading-[1.6] max-w-2xl mx-auto"
                style={{ color: "var(--copernicus-text-secondary)" }}
              >
                We're proud to partner with forward-thinking organizations across industries
              </p>
            </div>
            <ClientLogos />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--copernicus-text-primary)]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-[36px] leading-[1.15] font-semibold mb-4 text-white">What Our Clients Say</h2>
              <p className="text-base leading-[1.6] max-w-2xl mx-auto text-white/80">
                Don't just take our word for it. Hear from brands we've partnered with.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-[var(--copernicus-orange)] opacity-50" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[var(--copernicus-orange)]"
                        style={{ color: "var(--copernicus-orange)" }}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white text-base leading-[1.6] mb-8">"{testimonial.quote}"</p>

                  {/* Author Info */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="font-medium text-white text-base mb-1">{testimonial.author}</p>
                    <p className="text-white/70 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--copernicus-section-bg)]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2
                className="text-[36px] leading-[1.15] font-semibold mb-6"
                style={{ color: "var(--copernicus-text-primary)" }}
              >
                Discover Our Services
              </h2>
              <p
                className="text-base leading-[1.6] max-w-3xl mx-auto"
                style={{ color: "var(--copernicus-text-secondary)" }}
              >
                Comprehensive brand solutions from strategy to execution. Transforming your vision into reality through strategic thinking and creative excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white border-2 border-black/5 overflow-hidden group hover:border-[var(--copernicus-orange)] transition-all duration-500">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src="/services/brand-strategy.jpg"
                    alt="Brand Strategy & Identity"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-10">
                  <h3
                    className="text-[28px] leading-[1.2] font-medium mb-4"
                    style={{ color: "var(--copernicus-text-primary)" }}
                  >
                    Brand Strategy & Identity
                  </h3>
                  <p className="text-[15.5px] leading-[1.6]" style={{ color: "var(--copernicus-text-secondary)" }}>
                    Strategic foundations and visual systems that define who you are and how you show up in the world.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-black/5 overflow-hidden group hover:border-[var(--copernicus-orange)] transition-all duration-500">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src="/services/advertising-campaigns.jpg"
                    alt="Advertising Campaigns"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-10">
                  <h3
                    className="text-[28px] leading-[1.2] font-medium mb-4"
                    style={{ color: "var(--copernicus-text-primary)" }}
                  >
                    Advertising Campaigns
                  </h3>
                  <p className="text-[15.5px] leading-[1.6]" style={{ color: "var(--copernicus-text-secondary)" }}>
                    Integrated campaigns that break through the noise and drive measurable results across all channels.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-black/5 overflow-hidden group hover:border-[var(--copernicus-orange)] transition-all duration-500">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src="/services/event-management.jpg"
                    alt="Event Management"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-10">
                  <h3
                    className="text-[28px] leading-[1.2] font-medium mb-4"
                    style={{ color: "var(--copernicus-text-primary)" }}
                  >
                    Event Management
                  </h3>
                  <p className="text-[15.5px] leading-[1.6]" style={{ color: "var(--copernicus-text-secondary)" }}>
                    From concept to execution, creating memorable brand experiences that engage and inspire your audience.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold border-[var(--copernicus-border)] bg-transparent"
                style={{
                  borderColor: "var(--copernicus-orange)",
                  color: "var(--copernicus-orange)",
                }}
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* WeAreCopernicus Culture Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <p className="text-sm font-semibold tracking-wider uppercase mb-4 text-[var(--copernicus-orange)]">
                Our Culture
              </p>
              <h2 className="text-[3rem] md:text-[4rem] leading-[1.1] font-bold mb-6">
                <span style={{ color: "var(--copernicus-text-primary)" }}>#WeAreCopernicus</span>
              </h2>
              <p className="text-lg text-[var(--copernicus-text-secondary)]">
                A collective of strategists, designers, and storytellers united by our passion for creating brands that matter
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-white border-2 border-black/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[var(--copernicus-orange)]">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/diverse-team.jpg"
                    alt="Diverse Perspectives"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <h3
                    className="text-[24px] leading-[1.2] font-bold mb-3"
                    style={{ color: "var(--copernicus-text-primary)" }}
                  >
                    Diverse Perspectives
                  </h3>
                  <p className="text-[15px] leading-[1.7]" style={{ color: "var(--copernicus-text-secondary)" }}>
                    Our team brings together talents from around the world, each contributing unique insights that make
                    our work richer and more impactful.
                  </p>
                </div>
              </div>

              <div className="group bg-white border-2 border-black/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[var(--copernicus-orange)]">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/creative-excellence.jpg"
                    alt="Creative Excellence"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <h3
                    className="text-[24px] leading-[1.2] font-bold mb-3"
                    style={{ color: "var(--copernicus-text-primary)" }}
                  >
                    Creative Excellence
                  </h3>
                  <p className="text-[15px] leading-[1.7]" style={{ color: "var(--copernicus-text-secondary)" }}>
                    We push boundaries, challenge conventions, and never settle for good enough. Every project is an
                    opportunity to create something extraordinary.
                  </p>
                </div>
              </div>

              <div className="group bg-white border-2 border-black/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[var(--copernicus-orange)]">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/shared-success.jpg"
                    alt="Shared Success"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <h3
                    className="text-[24px] leading-[1.2] font-bold mb-3"
                    style={{ color: "var(--copernicus-text-primary)" }}
                  >
                    Shared Success
                  </h3>
                  <p className="text-[15px] leading-[1.7]" style={{ color: "var(--copernicus-text-secondary)" }}>
                    When our clients win, we win. We measure our success by the impact we create and the relationships
                    we build along the way.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold border-[var(--copernicus-border)] bg-transparent"
                style={{
                  borderColor: "var(--copernicus-orange)",
                  color: "var(--copernicus-orange)",
                }}
              >
                <Link href="/about">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--copernicus-orange)" }}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Let's Create Something Extraordinary</h2>
            <p className="text-lg mb-10 text-white/90 max-w-2xl mx-auto">
              Ready to transform your brand? Let's discuss how we can bring your vision to life and create measurable
              impact together.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--copernicus-orange)] hover:bg-white/90 font-semibold px-10"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
