import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { BookOpenText, Brush, ScrollText } from "lucide-react";
import type { ReactNode } from "react";

import { baseOptions } from "../layout.config";

import { source } from "@/app/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{
        banner: (
          <RootToggle
            options={[
              {
                icon: <Brush />,
                title: "Brand Guide",
                description: "Logos, colors, topography, guidelines",
                url: "/docs/brand",
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
            ]}
          />
        ),
      }}
      tree={source.pageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
