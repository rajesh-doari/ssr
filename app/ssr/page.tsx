export const dynamic = "force-dynamic";

import Link from "next/link";
import ProductCard from "../components/ProductCard";

export default async function SSRPage() {
  console.log("SSR Page");

  const { products } = await fetch("https://dummyjson.com/products?limit=5", {
    // cache: "no-store",
  }).then((r) => r.json());

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        SSR Products (Always Fresh)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Link
        href="/"
        className="block text-center text-blue-600 mt-10 underline"
      >
        Back
      </Link>
    </div>
  );
}
