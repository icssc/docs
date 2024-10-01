import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center h-screen text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs/developer"
          className="font-semibold underline text-fd-foreground"
        >
          /docs/developer
        </Link>{" "}
        and see the documentation.
      </p>
    </main>
  );
}
