import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { attachFile, createOpenAPI } from "fumadocs-openapi/server";
import { icons } from "lucide-react";
import { createElement } from "react";

import { docs, meta } from "@/.source";
import logos from "@/components/logos";
import { IconContainer } from "@/components/ui/IconContainer";

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in logos) {
      return createElement(IconContainer, {
        icon: logos[icon as keyof typeof logos],
      });
    }
    if (icon in icons) {
      return createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      });
    }
  },
  pageTree: {
    attachFile,
  },
});

export const openapiAnteaterAPI = createOpenAPI({});
