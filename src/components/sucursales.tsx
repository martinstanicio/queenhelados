import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import { formatPhoneNumber, getWhatsAppLink } from "@/lib/whatsapp";

import sucursales from "~/sucursales";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

export default function Sucursales() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={sucursales[0].name}
      className="w-full space-y-8"
    >
      {sucursales.map(
        ({ name, address, phone, map, facebook, instagram }, i) => (
          <AccordionItem
            value={name}
            key={i}
            className="overflow-hidden rounded-md border"
          >
            <AccordionTrigger className="w-full bg-secondary p-4 font-bold text-secondary-foreground transition-all hover:brightness-95 focus:brightness-95 data-[state='open']:bg-primary data-[state='open']:text-primary-foreground">
              {name}
            </AccordionTrigger>
            <AccordionContent className="grid-cols-3 gap-4 p-4 max-md:space-y-4 md:grid">
              <iframe
                src={map}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="col-span-2 aspect-[4/3] w-full rounded border-0 bg-secondary"
              ></iframe>
              <div>
                <h4 className="mb-2 text-xl font-bold">{name}</h4>
                <p>{address}</p>
                <ul className="my-4 flex list-none gap-2">
                  <li>
                    <Button
                      asChild
                      size="icon"
                      className="bg-green-500 transition-all hover:bg-green-600 focus:bg-green-600"
                    >
                      <Link
                        href={getWhatsAppLink(phone).toString()}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <span className="sr-only">WhatsApp {name}</span>
                      </Link>
                    </Button>
                  </li>
                  {instagram && (
                    <li>
                      <Button
                        asChild
                        size="icon"
                        className="bg-rose-500 transition-all hover:bg-rose-600 focus:bg-rose-600"
                      >
                        <Link href={instagram} target="_blank">
                          <FontAwesomeIcon icon={faInstagram} />
                          <span className="sr-only">Instagram {name}</span>
                        </Link>
                      </Button>
                    </li>
                  )}
                  {facebook && (
                    <li>
                      <Button
                        asChild
                        size="icon"
                        className="bg-blue-500 transition-all hover:bg-blue-600 focus:bg-blue-600"
                      >
                        <Link href={facebook} target="_blank">
                          <FontAwesomeIcon icon={faFacebook} />
                          <span className="sr-only">Facebook {name}</span>
                        </Link>
                      </Button>
                    </li>
                  )}
                </ul>
                <p>
                  Teléfono:{" "}
                  <Link
                    href={`tel:${phone}`}
                    className="text-primary hover:underline focus:underline"
                  >
                    {formatPhoneNumber(phone, 2, 1, 2)}
                  </Link>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ),
      )}
    </Accordion>
  );
}
