"use client";

import { getCart } from "../../lib/data";
import { useEffect, useState } from "react";
import type { CartItem } from "../../lib/types";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    getCart().then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="grid gap-5">
          {items.map((item) => (
            <div key={item._id} className="bg-grey p-5 rounded-xl shadow">
              <h3>{item.productId?.title}</h3>
              <p>₹{item.productId?.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
