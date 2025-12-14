export interface Product {
_id: string;
title: string;
price: number;
category: string;
image: string;
description?: string;
}


export interface CartItem {
_id: string;
productId: Product;
quantity: number;
}


export interface FavoriteItem {
_id: string;
productId: Product;
}