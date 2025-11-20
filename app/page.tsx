// export const dynamic = "force-static";

export default function Home() {
  console.log('Home Page')
  return (
    <div style={{ padding: 40 }}>
      <h1>Rendering Demo</h1>
      <p>This home page is statically generated at build time.</p>

      <ul>
        <li>
          <a href="/ssr">Server Side Rendering (SSR)</a>
        </li>
        <li>
          <a href="/isr">Incremental Static Regeneration (ISR)</a>
        </li>
        <li>
          <a href="/csr">Client Side Rendering (CSR)</a>
        </li>
        <li>
          <a href="/ssg">Static Site Generation (SSG)</a>
        </li>
      </ul>
    </div>
  );
}
