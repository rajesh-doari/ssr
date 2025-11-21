import Image from "next/image";

export default function ProductCard({ product }: any) {
  return (
    <div className="border rounded-xl shadow-sm p-4 bg-white hover:shadow-md cursor-pointer transition">
      <Image
        src={product?.thumbnail || product?.images?.[0]}
        width={200}
        height={200}
        alt={product?.title}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />

      <h2 className="text-lg font-semibold text-gray-800">{product?.title}</h2>

      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
        {product?.description}
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xl font-bold text-green-600">
          ${product?.price}
        </span>
        <span className="text-yellow-500 text-sm">⭐ {product?.rating}</span>
      </div>
    </div>
  );
}
