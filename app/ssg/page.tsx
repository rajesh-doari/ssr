export const dynamic = "force-static";

export default async function SSGPage() {
  console.log('SSG Page')

  const products = await fetch("https://dummyjson.com/products?limit=5").then(
    (r) => r.json()
  );

  return (
    <div style={{ padding: 40 }}>
      <h1>SSG Products (Build Time)</h1>

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
