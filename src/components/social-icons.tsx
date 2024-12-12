import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { social as socialLinks } from "~/links";

import { Button } from "./ui/button";

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function SocialIcons({ className, ...props }: Props) {
  return (
    <div className={cn("flex justify-evenly gap-6", className)} {...props}>
      {socialLinks.map(({ label, href, icon }, i) => (
        <Button asChild variant="ghost" size="icon" key={i}>
          <Link href={href} target="_blank">
            <FontAwesomeIcon icon={icon} className="!size-6" />
            <span className="sr-only">{label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
