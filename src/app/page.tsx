"use client";

import ProductCard from "@/components/productCard";
import { getProducts, addToCart, addToFavorites } from "@/lib/data";
import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard
            key={p._id}
            product={p}
            onCart={addToCart}
            onFav={addToFavorites}
          />
        ))}
      </div>
    </div>
  );
}
