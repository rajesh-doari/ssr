import { NextResponse } from "next/server";

export async function GET() {
  console.log('Product Api Calling ...')

  const products = await fetch("https://dummyjson.com/products?limit=5")
    .then((r) => r.json());

  return NextResponse.json(products);
}
