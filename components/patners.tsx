import {Marquee} from "@/components/ui/marque";

const partners = [
  { name: "National Land Authority", logo: "/partners/NLA.png" },
  { name: "National ID Agency", logo: "/partners/arms_Rwanda.png" },
  { name: "Data Protection Office", logo: "/partners/logo.jpg" },
  { name: "TransUnion", logo: "/partners/transunion-logo.png" },
];

export default function Partners() {
  return (
    <Marquee
      label="Our partners"
      items={partners}
      direction="left"
      duration={44}
    />
  );
}
