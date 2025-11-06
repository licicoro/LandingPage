export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    total: number;
}