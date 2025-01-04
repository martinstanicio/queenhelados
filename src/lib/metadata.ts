import type { Metadata } from "next";

import { names } from "~/sucursales";

export const siteName = "Queen Helados";
export const title = "Helados que enamoran";
export const description =
  "Refresca tu día con helados de agua, deléitate con helados de crema o lleva un pote para compartir con amigos.";
export const keywords = [
  "heladería",
  "postres",
  "mayorista",
  "minorista",
  "helados",
  "helados de agua",
  "helados de crema",
  "helados frutales",
  "potes de helado",
  ...names,
  ...names.map((name) => `mejor helado ${name}`),
  ...names.map((name) => `heladería en ${name}`),
];

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: `${title} | ${siteName}`,
  },
  description,
  keywords,
  creator: "Martín Stanicio",
  generator: "Next.js",
  openGraph: {
    siteName,
    title,
    description,
    type: "website",
    locale: "es",
    url: "/",
  },
};
