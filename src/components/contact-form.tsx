"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Link from "next/link";
import { useState } from "react";

import { formatPhoneNumber, getWhatsAppLink } from "@/lib/whatsapp";

import { callCenter } from "~/contacts";
import sucursales, { names as sucursalesNames } from "~/sucursales";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const formSchema = z
  .object({
    name: z
      .string({
        required_error: "Por favor ingrese un nombre.",
      })
      .min(1, "Por favor ingrese un nombre.")
      .trim(),
    subject: z.enum(["Pedido", "Reclamo", "Consulta administrativa"], {
      required_error: "Por favor seleccione un asunto.",
    }),
    sucursal: z.enum(sucursalesNames).optional(),
    message: z
      .string({ required_error: "Por favor ingrese su consulta." })
      .min(1, "Por favor ingrese un mensaje.")
      .trim(),
  })
  .superRefine(({ subject, sucursal }, ctx) => {
    // If the subject is not "Pedido", sucursal input is hidden and not required
    // If the subject is "Pedido", sucursal input is required
    if (subject == "Pedido" && !sucursal) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Por favor seleccione una sucursal.",
        path: ["sucursal"],
      });
    }

    return z.NEVER;
  });

export default function ContactForm() {
  const [subject, setSubject] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", message: "" },
  });

  function onSubmit({
    name,
    subject,
    sucursal,
    message,
  }: z.infer<typeof formSchema>) {
    const phone =
      subject == "Pedido"
        ? sucursales.find((suc) => suc.name == sucursal)?.phone || callCenter
        : callCenter;

    const link = getWhatsAppLink(
      phone,
      `Nombre: ${name}
      Asunto: ${subject}
      
      ${message}`,
    );
    window.open(link, "_blank");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Juan Pérez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asunto</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setSubject(value);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Motivo de su consulta" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Pedido">Pedido</SelectItem>
                  <SelectItem value="Reclamo">Reclamo</SelectItem>
                  <SelectItem value="Consulta administrativa">
                    Consulta administrativa
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {subject == "Pedido" && (
          <FormField
            control={form.control}
            name="sucursal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sucursal</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Elija una sucursal" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sucursalesNames.map((name, i) => (
                      <SelectItem value={name} key={i}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tu mensaje</FormLabel>
              <FormControl>
                <Textarea rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>Enviar</span>
        </Button>

        <p>
          <span className="font-bold">¿Problemas con el formulario?</span> Podés
          comunicarte de forma directa con nuestro Call Center:{" "}
          <Button variant="link" asChild>
            <Link href={getWhatsAppLink(callCenter)} target="_blank">
              {formatPhoneNumber(callCenter, 2, 1, 2)}
            </Link>
          </Button>
        </p>
      </form>
    </Form>
  );
}
