import { Marquee } from "@/components/ui/marque";
export const clients = [
  {
    name: "Atlas Wealth",
    badge: "Microfinance",
    accent: "sky",
    logo: "/clients/atlas_logo.png",
    website: "https://atlaswealth.rw/",
  },
  {
    name: "Fina Group",
    badge: "Microfinance",
    accent: "emerald",
    logo: "/clients/FINAGROUP.webp",
    website: "https://finagroup.co/",
  },
  {
    name: "Giant Eagle Finance",
    badge: "Microfinance",
    accent: "orange",
    logo: "/clients/GEF_LOG.jpg-removebg-preview.png",
    website: "https://www.gianteaglefinance.rw/",
  },
  {
    name: "Umurage Finance",
    badge: "Microfinance",
    accent: "orange",
    logo: "/clients/umuragefinance.webp",
  },
];
export default function Clients() {
  return (
    <Marquee
      label="Financial institutions growing with Invictus"
      items={clients}
      direction="right"
      duration={44}
    />
  );
}
