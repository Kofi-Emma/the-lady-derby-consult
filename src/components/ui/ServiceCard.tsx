import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full">
      <IconBadge icon={service.icon} />
      <h3 className="mt-6 font-heading text-2xl leading-tight font-semibold text-brand-red">
        {service.title}
      </h3>
      <p className="mt-3 leading-7 text-brand-muted">{service.description}</p>
    </Card>
  );
}
