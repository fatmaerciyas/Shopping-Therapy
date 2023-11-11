export interface Cart {
  id: number;
  buyerId: string;
  items: CartItem[];
}

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  image: string;
  quantity: number;
}
