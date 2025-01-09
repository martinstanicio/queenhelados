import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HTMLAttributes } from "react";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  icon: IconDefinition;
};

export default function BenefitCard({
  title,
  description,
  icon,
  ...props
}: Props) {
  return (
    <Card {...props}>
      <CardHeader className="space-y-4">
        <CardTitle className="flex flex-col items-center gap-4 text-center">
          <FontAwesomeIcon icon={icon} className="size-5 text-primary" />
          <span>{title}</span>
        </CardTitle>
        <CardDescription className="text-balance text-center">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
