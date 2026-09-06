import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/vlcore-logo.png.asset.json";
import heroImage from "@/assets/hero-living-room.jpg";
import upholsteryAsset from "@/assets/service-upholstery.jpg.asset.json";
import gypsumAsset from "@/assets/service-gypsum.jpg.asset.json";
import cabinetsAsset from "@/assets/service-cabinets.jpg.asset.json";
import furnitureFabricAsset from "@/assets/service-furniture-fabric.jpg.asset.json";
import interiorDecorAsset from "@/assets/service-interior-decor.jpg.asset.json";
import consultationAsset from "@/assets/service-consultation.jpg.asset.json";
import commercialAsset from "@/assets/service-commercial.jpg.asset.json";
import renovationImage from "@/assets/service-renovation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VL Core Interior & Construction | Kampala" },
      {
        name: "description",
        content:
          "VL Core Interior & Construction in Kampala offers upholstery & reupholstery, gypsum works, kitchen and bedroom cabinet installation, furniture & fabric selection, interior decor, and interior & construction consultation.",
      },
      { property: "og:title", content: "VL Core Interior & Construction | Kampala" },
      {
        property: "og:description",
        content:
          "Upholstery, gypsum works, cabinet installation, furniture & fabric selection, interior decor and consultation — warm, finished spaces built across Kampala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    number: "01",
    title: "Upholstery & Reupholstery",
    description:
      "Bring tired furniture back to life with quality fabrics and tailored, durable work.",
    image: upholsteryAsset.url,
    imageAlt:
      "A freshly reupholstered sofa with deep teal and gold cushions in a warm Kampala living room",
  },
  {
    number: "02",
    title: "Gypsum Works",
    description:
      "Smooth ceilings, feature walls, and clean lines for a polished, finished look.",
    image: gypsumAsset.url,
    imageAlt:
      "A modern living room with a smooth gypsum ceiling and deep teal feature wall",
  },
  {
    number: "03",
    title: "Kitchen & Bedroom Cabinet Installation",
    description:
      "Cabinets measured, fitted, and installed to sit perfectly in place.",
    image: cabinetsAsset.url,
    imageAlt:
      "A fitted kitchen with deep teal lower cabinets, warm wood uppers, and gold handles",
  },
  {
    number: "04",
    title: "Furniture & Fabric Selection",
    description:
      "We help you choose pieces and materials that suit your space and your budget.",
    image: furnitureFabricAsset.url,
    imageAlt:
      "Fabric swatches in deep teal velvet, gold, and cream laid out for selection",
  },
  {
    number: "05",
    title: "Interior Decor",
    description:
      "Styling, layering, and finishing touches that make a room feel complete.",
    image: interiorDecorAsset.url,
    imageAlt:
      "A styled living room with layered cushions, gold vases, plants, and deep teal accents",
  },
  {
    number: "06",
    title: "Interior & Construction Consultation",
    description:
      "Clear, practical advice to guide your build or renovation from start to finish.",
    image: consultationAsset.url,
    imageAlt:
      "A consultation meeting reviewing architectural drawings in a modern office",
  },
  {
    number: "07",
    title: "Commercial Design Executions",
    description:
      "End-to-end delivery of offices, retail spaces, and hospitality interiors that reflect your brand and work beautifully every day.",
    image: commercialAsset.url,
    imageAlt:
      "A modern open-plan commercial office with deep teal walls and gold lighting",
  },
  {
    number: "08",
    title: "Site Renovation",
    description:
      "Full site renovations that refresh, repair, and rebuild interiors from structure to final finish.",
    image: renovationImage,
    imageAlt:
      "A home renovation site with workers refinishing walls, deep teal accent wall, and warm wood floors",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="VL Core Interior & Construction logo"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="leading-tight">
            <p className="font-display text-base font-semibold">VL Core</p>
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Interior &amp; Construction
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 sm:flex">
          <a href="#services" className="transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal-deep"
        >
          Get in touch
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
              Kampala, Uganda
            </p>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Rooms that feel finished, warm, and built to last.
            </h1>
            <p className="mt-6 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              VL Core designs and builds refined interiors across Kampala — from
              reupholstered seating to full gypsum and cabinet installations, all
              under one trusted roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal-deep"
              >
                Explore our services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Book a consultation
              </a>
            </div>
          </div>
          <div className="animate-rise">
            <img
              src={heroImage}
              alt="A finished living room by VL Core with a deep teal accent wall, gold cushions, and warm wood cabinetry"
              width={1600}
              height={1000}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-card p-8 shadow-sm lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Who we are
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold">
                A local team, built on trust.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Based in Kampala, VL Core Interior &amp; Construction pairs careful
                interior design with hands-on construction. We treat every project
                like a finished room — slowly, deliberately, and with an eye for
                the details that make a space feel like home.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Whether it is a single reupholstered armchair or a full home
                fit-out, we keep the process simple, friendly, and easy to
                understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What we do
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Eight services, one seamless finish.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 grid size-10 place-items-center rounded-xl bg-secondary/95 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <span className="font-display">{service.number}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 lg:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Let's talk
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold text-primary-foreground sm:text-4xl">
                Planning a project in Kampala?
              </h2>
              <p className="mt-4 max-w-[48ch] text-pretty leading-relaxed text-primary-foreground/75">
                Tell us what you have in mind and we will help you shape it. Reach
                out and we will reply as soon as we can.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-card/10 p-6 ring-1 ring-card/20 backdrop-blur-sm">
                <p className="font-display text-lg text-primary-foreground">
                  VL Core Interior &amp; Construction
                </p>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  Studio in Kampala, Uganda
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-gold/90"
                >
                  Start a conversation
                  <span aria-hidden="true" className="text-base leading-none">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-4">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="VL Core logo"
              className="h-9 w-9 rounded-full object-cover"
            />
            <p className="text-sm font-medium">
              VL Core Interior &amp; Construction
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Interior design &amp; construction · Kampala, Uganda
          </p>
        </div>
      </footer>
    </div>
  );
}
