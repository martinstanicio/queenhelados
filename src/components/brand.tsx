import Image from "next/image";
import Link from "next/link";

import logo from "@/app/icon.svg";
import { cn } from "@/lib/utils";

export default function Brand({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      className={cn("inline-block h-20 w-auto", className)}
      {...props}
    >
      <Image src={logo} alt="Logo" sizes="auto" className="h-full w-auto" />
      <span className="sr-only">Queen Helados</span>
    </Link>
  );
}
