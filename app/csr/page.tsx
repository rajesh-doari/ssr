"use client";

import { useEffect, useState } from "react";

export default function CSRPage() {
  console.log('CSR Page')

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>CSR Products (Client Fetch)</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((p: any) => (
            <li key={p.id}>
              {p.title} — ${p.price}
            </li>
          ))}
        </ul>
      )}

      <a href="/">Back</a>
    </div>
  );
}
