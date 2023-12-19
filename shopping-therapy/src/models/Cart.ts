import { Basket } from "./Basket";

export interface Cart {
  cartId: number;
  quantity: number;
  productId: number;
  product: Product;
  basketId: number;
  basket: Basket;
  // cargoType: "";
  cargoType: CargoEnum;
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

export enum CargoEnum {
  Getting_ready = "Getting_ready",
  Send_by_cargo = "Send_by_cargo",
  Set_out = "Set_out",
  Distribution = "Distribution",
  Delivered = "Delivered",
}
