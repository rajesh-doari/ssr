export const revalidate = 20; // regenerate every 20 sec

export default async function ISRPage() {
  console.log('ISR Page')

  const products = await fetch("https://dummyjson.com/products?limit=5").then(r => r.json());

  return (
    <div style={{ padding: 40 }}>
      <h1>ISR Products (Every 20 sec)</h1>

      <ul>
        {products.products.map((p:any) => (
          <li key={p.id}>{p.title} — ${p.price}</li>
        ))}
      </ul>

      <a href="/">Back</a>
    </div>
  );
}
