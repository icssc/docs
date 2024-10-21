import type { HomeLayoutProps } from "fumadocs-ui/home-layout";

import { ICSSC } from "@/components/logos/ICSSC";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <>
        <ICSSC />
        <span className="font-medium [header_&]:text-[15px]">ICS Student Council</span>
      </>
    ),
  },
};
