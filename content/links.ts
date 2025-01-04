import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { getWhatsAppLink } from "@/lib/whatsapp";

import { callCenter } from "./contacts";
import sucursales from "./sucursales";

const mainSucursal = sucursales[0];

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
    href: mainSucursal.instagram,
    icon: faInstagram,
  },
  {
    label: "Facebook",
    href: mainSucursal.facebook,
    icon: faFacebook,
  },
];
