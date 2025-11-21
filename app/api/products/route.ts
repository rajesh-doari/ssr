import { NextResponse } from "next/server";

export async function GET() {
  console.log("----- PRODUCT API CALLING ------");
  const products = await fetch("https://dummyjson.com/products").then((r) =>
    r.json()
  );

  return NextResponse.json(products);
}
