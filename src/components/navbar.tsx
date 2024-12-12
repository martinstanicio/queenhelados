"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { nav as navLinks, social as socialLinks } from "~/links";

import Brand from "./brand";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-8 px-8 py-4">
      <Brand />

      <nav className="flex items-center gap-2 md:hidden">
        {socialLinks.map(({ label, href, icon }, i) => (
          <Button
            asChild
            variant="outline"
            size="icon"
            key={i}
            className="border-white/10 bg-transparent text-white backdrop-blur-sm transition-colors"
          >
            <Link href={href} target="_blank">
              <FontAwesomeIcon icon={icon} />
              <span className="sr-only">{label}</span>
            </Link>
          </Button>
        ))}
      </nav>

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {navLinks.map(({ label, href }, i) => (
            <NavigationMenuItem key={i}>
              <Link href={href} legacyBehavior passHref>
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
