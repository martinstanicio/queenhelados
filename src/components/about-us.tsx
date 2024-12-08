import Image from "next/image";

import aboutUs from "@/assets/about-us.jpg";

export default function AboutUs() {
  return (
    <section className="grid gap-8 md:grid-cols-2">
      <Image
        src={aboutUs}
        alt="El frente de nuestro local en Belén de Escobar."
        placeholder="blur"
        className="aspect-[16/9] overflow-hidden rounded bg-secondary object-cover object-center shadow"
      />
      <div className="space-y-4 self-center">
        <h3 className="text-xl font-bold">¿Quiénes somos?</h3>
        <p>
          Nosotros somos{" "}
          <span className="font-bold text-primary">Queen Helados</span>. Lorem
          ipsum dolor <strong>sit amet</strong>, consectetur adipisicing elit.
          Quis blanditiis deleniti a beatae? Explicabo, ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet{" "}
          <strong>consectetur adipisicing elit</strong>. Porro fuga sapiente
          consequatur? Ratione maiores obcaecati ipsum.
        </p>
      </div>
    </section>
  );
}
