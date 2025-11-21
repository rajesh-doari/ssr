// export const dynamic = "force-static";

import Link from "next/link";

export default function Home() {
  console.log("Home Page");

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Rendering Home Page
      </h1>

      <p className="text-lg text-gray-700 text-center mt-3">
        This home page is statically generated at build time.
      </p>

      <div className="flex flex-col gap-3 underline mt-8 text-blue-600 text-lg">
        <Link href="/ssr" className="hover:text-blue-800">Server Side Rendering (SSR)</Link>
        <Link href="/isr" className="hover:text-blue-800">Incremental Static Regeneration (ISR)</Link>
        <Link href="/csr" className="hover:text-blue-800">Client Side Rendering (CSR)</Link>
        <Link href="/ssg" className="hover:text-blue-800">Static Site Generation (SSG)</Link>
      </div>
    </div>
  );
}
