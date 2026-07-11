import { Card } from "fumadocs-ui/components/card";
import type { Option } from "fumadocs-ui/components/layout/root-toggle";
import { BookA, CodeXml, ScrollText } from "lucide-react";

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
    icon: <CodeXml />,
    title: "Developer Docs",
    description: "For developers using our projects",
    url: "/docs/developer",
  },
  {
    icon: <ScrollText />,
    title: "Contributor Docs",
    description: "For open-source and internal contributors",
    url: "/docs/contributor",
  },
];

export const homePageCards = categories.map(({ icon, title, description, url }) => (
  <Card key={title} icon={icon} title={title} description={description} href={url} />
));
