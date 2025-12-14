import type { Product, CartItem, FavoriteItem } from "./types";

// Fetch all products
export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/products`, {
    cache: "no-store",
  });
  return response.json();
}

// Fetch cart
export async function getCart(): Promise<CartItem[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/cart`, {
    cache: "no-store",
  });
  return response.json();
}

// Fetch favorites
export async function getFavorites(): Promise<FavoriteItem[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/favorites`, {
    cache: "no-store",
  });
  return response.json();
}

// Add item to cart
export async function addToCart(productId: string | number) {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity: 1 }),
  });
}

// Add item to favorites
export async function addToFavorites(productId: string | number) {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE}/favorites`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  });
}
