import { Card } from "fumadocs-ui/components/card";
import type { Option } from "fumadocs-ui/components/layout/root-toggle";
import { BookA, BookOpenText, Brush, ScrollText } from "lucide-react";

interface RootToggleOption extends Option {
  title: string;
}

export const categories: RootToggleOption[] = [
  {
    icon: <BookA />,
    title: "About",
    description: "Introductory information about us and our projects",
    url: "/docs/about",
  },
  {
    icon: <BookOpenText />,
    title: "Developer Docs",
    description: "Public facing developer projects",
    url: "/docs/developer",
  },
  {
    icon: <ScrollText />,
    title: "Contributor Docs",
    description: "Internal documentation and design reasoning",
    url: "/docs/contributor",
  },
  {
    icon: <Brush />,
    title: "Brand Guide",
    description: "Logos, colors, topography, guidelines",
    url: "/docs/brand",
  },
];

export const homePageCards = categories.map(({ icon, title, description, url }) => (
  <Card key={title} icon={icon} title={title} description={description} href={url} />
));
