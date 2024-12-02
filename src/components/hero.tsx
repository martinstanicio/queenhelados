import Image from "next/image";
import Link from "next/link";

import hero from "@/assets/hero.jpg";

import Navbar from "./navbar";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative" id="hero">
      <Image
        src={hero}
        alt=""
        priority
        placeholder="blur"
        sizes="auto"
        className="absolute -z-10 h-full w-full object-cover object-center filter"
      />
      <Navbar />

      <div className="py-16 sm:py-24">
        <div className="flex flex-col items-center gap-4 border-y border-white/10 px-8 py-16 text-center text-white backdrop-blur-sm backdrop-brightness-75">
          <h1 className="text-balance text-4xl font-bold drop-shadow-md sm:text-5xl md:text-6xl">
            Queen Helados
          </h1>
          <p className="max-w-[35ch] text-balance text-lg drop-shadow-md sm:text-xl">
            Más de 25 años fabricando helados con los más altos estándares de
            calidad.
          </p>
          <div className="mt-4 flex gap-4 max-sm:w-full max-sm:flex-col">
            <Button size="lg" className="max-sm:w-full" asChild>
              <Link href="#sucursales">Sucursales</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent max-sm:w-full"
              asChild
            >
              <Link href="#contacto">Contacto</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
