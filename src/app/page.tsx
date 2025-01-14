import {
  faBasketShopping,
  faLocationDot,
  faPhone,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

import BenefitCard from "@/components/benefit-card";
import ContactForm from "@/components/contact-form";
import Hero from "@/components/hero";
import Sucursales from "@/components/sucursales";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-4 px-4 py-12 sm:grid-cols-2 lg:max-w-6xl lg:grid-cols-4">
        <BenefitCard
          title="Sucursales"
          description="Encuentra tu sucursal más cercana."
          icon={faLocationDot}
        />
        <BenefitCard
          title="Contactanos"
          description="Call center disponible para tus inquietudes."
          icon={faPhone}
        />
        <BenefitCard
          title="Mayorista y minorista"
          description="Calidad y cantidad al mejor precio."
          icon={faBasketShopping}
        />
        <BenefitCard
          title="Beneficios para socios"
          description="Accedé a descuentos en todas tus compras."
          icon={faTag}
        />
      </section>
      <Separator />
      <section
        id="sucursales"
        className="mx-auto max-w-4xl space-y-8 px-4 py-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold">Sucursales</h2>
          <p className="text-balance sm:text-lg">
            Encontrá <strong>tu sucursal más cercana</strong> y disfrutá de un
            refrescante helado. ¡Te esperamos!
          </p>
        </div>
        <Sucursales />
      </section>
      <Separator />
      <section id="contacto" className="mx-auto max-w-4xl space-y-8 px-4 py-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold">Contacto</h2>
          <p className="text-balance sm:text-lg">
            No dudes en contactarnos hoy mismo para resolver cualquier{" "}
            <strong>duda</strong> o <strong>inconveniente</strong> que tengas,
            ¡estamos encantados de ayudarte!
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
