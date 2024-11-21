import { Cards } from "fumadocs-ui/components/card";
import { homePageCards } from "@/lib/categories";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="mt-6 mb-4 text-2xl font-medium">Welcome to ICSSC</h1>
      <Cards>{...homePageCards}</Cards>
    </main>
  );
}
