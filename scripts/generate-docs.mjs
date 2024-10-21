import { generateFiles } from "fumadocs-openapi";

void generateFiles({
  input: ["https://anteaterapi.com/openapi.json"], // the OpenAPI schemas
  output: "./content/docs/developer/anteaterapi/rest-api/reference",
  per: "tag",
  name: (_, file) => {
    return file.split(" ").join("-").toLowerCase();
  },
  frontmatter: (title) => (title === "Web Soc" ? { title: "WebSoc" } : {}),
});
