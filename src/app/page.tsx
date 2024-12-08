import AboutUs from "@/components/about-us";
import ContactForm from "@/components/contact-form";
import Hero from "@/components/hero";
import Sucursales from "@/components/sucursales";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="sobre-nosotros"
        className="mx-auto max-w-4xl space-y-8 px-4 py-12"
      >
        <h2 className="text-center text-4xl font-bold">Sobre Nosotros</h2>
        <AboutUs />
      </section>
      <Separator />
      <section
        id="sucursales"
        className="mx-auto max-w-4xl space-y-8 px-4 py-12"
      >
        <h2 className="text-center text-4xl font-bold">Sucursales</h2>
        <Sucursales />
      </section>
      <Separator />
      <section id="contacto" className="mx-auto max-w-4xl space-y-8 px-4 py-12">
        <h2 className="text-center text-4xl font-bold">Contacto</h2>
        <ContactForm />
      </section>
    </main>
  );
}
