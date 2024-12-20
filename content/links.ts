import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { getWhatsAppLink } from "@/lib/whatsapp";

import { callCenter } from "./contacts";

export const nav = [
  { label: "Inicio", href: "#hero" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Contacto", href: "#contacto" },
];

export const social = [
  {
    label: "WhatsApp",
    href: getWhatsAppLink(callCenter).toString(),
    icon: faWhatsapp,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/queenhelados.oficial/",
    icon: faInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Queenhelados.oficial/",
    icon: faFacebook,
  },
];
