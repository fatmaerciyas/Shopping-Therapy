import { Cart } from "./Cart";

export interface IBasket {
  basketId: number;
}
export interface Basket extends IBasket {
  cartId: number;
  quantity: number;
  productId: number;
  product: Product;
  userName: string;
  carts: Cart[]; // Array of Cart objects
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
