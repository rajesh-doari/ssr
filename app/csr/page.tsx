"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

export default function CSRPage() {
  console.log("CSR Page");

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        CSR Products (Client Fetch)
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <Link
        href="/"
        className="block text-center text-blue-600 mt-10 underline"
      >
        Back
      </Link>
    </div>
  );
}
