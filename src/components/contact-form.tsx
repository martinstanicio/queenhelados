"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Link from "next/link";

import { formatPhoneNumber, getWhatsAppLink } from "@/lib/whatsapp";

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
import { Textarea } from "./ui/textarea";

const phone = 5491158106098;

const formSchema = z.object({
  name: z
    .string({
      required_error: "Por favor ingrese un nombre.",
    })
    .min(1, "Por favor ingrese un nombre.")
    .trim(),
  message: z
    .string({ required_error: "Por favor ingrese su consulta." })
    .min(1, "Por favor ingrese un mensaje.")
    .trim(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  function onSubmit({ name, message }: z.infer<typeof formSchema>) {
    const link = getWhatsAppLink(phone, message + "\n\n" + `- ${name}`);

    window.open(link.toString(), "_blank");
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

        <Button type="submit">Enviar</Button>

        <p>
          <span className="font-bold">
            ¿Estás teniendo problemas con el formulario?
          </span>{" "}
          Podés comunicarte de forma directa con nosotros mediante WhatsApp:{" "}
          <Link
            href={getWhatsAppLink(phone).toString()}
            target="_blank"
            className="text-primary hover:underline focus:underline"
          >
            {formatPhoneNumber(phone, 2, 1, 2)}
          </Link>
        </p>
      </form>
    </Form>
  );
}
