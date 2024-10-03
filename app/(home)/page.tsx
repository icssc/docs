import { Card, Cards } from "fumadocs-ui/components/card";
import { Brush, BookOpenText, ScrollText } from "lucide-react";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="mt-6 mb-4 text-2xl font-medium">Welcome to ICSSC</h1>
      <Cards>
        <Card
          icon={<Brush />}
          href="/docs/brand"
          title="Brand Guide"
          description="Logos, colors, topography, guidelines"
        />
        <Card
          icon={<BookOpenText />}
          href="/docs/developer"
          title="Developer Docs"
          description="Public facing developer projects"
        />
        <Card
          icon={<ScrollText />}
          href="/docs/contributor"
          title="Contributor Docs"
          description="Internal documentation and design reasoning"
        />
      </Cards>
    </main>
  );
}
