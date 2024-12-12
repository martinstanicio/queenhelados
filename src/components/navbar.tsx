"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import { cn } from "@/lib/utils";

import Brand from "./brand";
import SocialIcons from "./social-icons";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const links = [
  { label: "Inicio", path: "#hero" },
  { label: "Sucursales", path: "#sucursales" },
  { label: "Contacto", path: "#contacto" },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-8 px-8 py-4">
      <Brand />

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-white/10 bg-transparent text-white backdrop-blur-sm transition-colors md:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
            <span className="sr-only">Menú</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-between gap-8">
          <SheetHeader>
            <Brand />
            <div className="hidden">
              <SheetTitle />
              <SheetDescription />
            </div>
          </SheetHeader>

          <NavigationMenu className="flex-initial">
            <NavigationMenuList className="flex-col space-x-0 space-y-3">
              {links.map(({ label, path }, i) => (
                <NavigationMenuItem key={i}>
                  <SheetClose asChild>
                    <Link
                      href={path}
                      className={cn(navigationMenuTriggerStyle(), "text-lg")}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <SheetFooter>
            <SocialIcons />
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {links.map(({ label, path }, i) => (
            <NavigationMenuItem key={i}>
              <Link href={path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "border border-white/10 bg-transparent text-white backdrop-blur-sm transition-colors",
                  )}
                >
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
