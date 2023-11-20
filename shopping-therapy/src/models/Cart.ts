export interface Cart {
  cartId: number;
  quantity: number;
  productId: number;
  product: Product;
}

export interface Product {
  productId: number;
  name: string;
  description: string;
  image: string;
  stock: number;
  price: number;
  brand: string;
  quantity: number;
  categoryId: number;
  category: any;
}
