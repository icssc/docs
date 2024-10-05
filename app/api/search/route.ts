import { createSearchAPI } from "fumadocs-core/search/server";

import { source } from "@/app/source";

export const runtime = "edge";

export const { GET } = createSearchAPI("advanced", {
  indexes: source.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    structuredData: page.data.structuredData,
    id: page.url,
    url: page.url,
  })),
});
