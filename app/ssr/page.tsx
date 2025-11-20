export const dynamic = "force-dynamic";

export default async function SSRPage() {
  console.log('SSR Page')

  const products = await fetch("https://dummyjson.com/products?limit=5", {
    cache: "no-store",
  }).then((r) => r.json());

  return (
    <div style={{ padding: 40 }}>
      <h1>SSR Products (Always Fresh)</h1>

      <ul>
        {products.products.map((p:any) => (
          <li key={p.id}>
            {p.title} — ${p.price}
          </li>
        ))}
      </ul>

      <a href="/">Back</a>
    </div>
  );
}
