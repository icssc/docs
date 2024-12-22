import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { headers } from "next/headers";

import { baseOptions } from "../layout.config";

import { source } from "@/app/source";
import { categories } from "@/lib/categories";

export async function generateViewport() {
  const userAgent = (await headers()).get("user-agent");

  return userAgent?.includes("Discordbot")
    ? {
        themeColor: "#FF87A6",
      }
    : {};
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{
        banner: <RootToggle options={categories} />,
      }}
      tree={source.pageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
