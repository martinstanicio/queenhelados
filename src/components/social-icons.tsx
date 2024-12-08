import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "./ui/button";

const social = [
  {
    label: "WhatsApp",
    href: getWhatsAppLink(5491158106098).toString(),
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

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function SocialIcons({ className, ...props }: Props) {
  return (
    <div className={cn("flex justify-evenly gap-6", className)} {...props}>
      {social.map(({ label, href, icon }, i) => (
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
