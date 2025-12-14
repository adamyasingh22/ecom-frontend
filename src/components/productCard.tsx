"use client";

import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  onCart: (productId: string) => void;
  onFav: (productId: string) => void;
}

export default function ProductCard({ product, onCart, onFav }: ProductCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition border border-gray-200">
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 object-cover mx-auto rounded"
      />

      <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
        {product.title}
      </h3>

      <p className="text-center text-indigo-600 text-lg font-bold mt-1">
        ₹{product.price}
      </p>

      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={() => onCart(product._id)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Add to Cart
        </button>

        <button
          onClick={() => onFav(product._id)}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
        >
          Favorite
        </button>
      </div>
    </div>
  );
}
