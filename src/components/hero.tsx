import Image from "next/image";
import Link from "next/link";

import hero from "@/assets/hero.jpg";
import promoImg from "@/assets/promo.jpg";
import { cn } from "@/lib/utils";

import promo from "~/promo";

import Navbar from "./navbar";
import { Button } from "./ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";

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

      <div className="py-16">
        <div className="border-y border-white/10 backdrop-blur-sm backdrop-brightness-75">
          <div
            className={cn(
              "mx-auto max-w-6xl px-4 sm:px-8",
              promo.active
                ? "grid grid-cols-1 place-items-center gap-x-8 gap-y-16 py-8 max-md:py-16 md:grid-cols-2"
                : "py-16",
            )}
          >
            <div
              className={cn(
                "flex flex-col gap-4 text-white max-md:items-center max-md:text-center",
                !promo.active && "items-center text-center",
              )}
            >
              <h1 className="text-balance text-4xl font-bold drop-shadow-md sm:text-5xl md:text-6xl">
                Queen Helados
              </h1>
              <p className="max-w-[35ch] text-balance text-lg drop-shadow-md sm:text-xl">
                Más de 25 años fabricando helados con los más altos estándares
                de calidad.
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

            {promo.active && (
              <Card className="md:max-w-80">
                <CardHeader className="text-center">
                  <Image
                    src={promoImg}
                    alt=""
                    sizes="auto"
                    className="mb-4 aspect-video h-full w-full rounded bg-secondary object-cover object-center"
                    placeholder="blur"
                    priority={true}
                  />
                  <CardTitle>{promo.title}</CardTitle>
                  <p>{promo.content}</p>
                </CardHeader>
                <CardFooter className="flex-col gap-2">
                  <Button className="w-full" asChild>
                    <Link href="#sucursales">
                      ¡Encontrá tu sucursal más cercana!
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    {promo.requirements}
                  </p>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
