export interface Product {
  productId: number;
  name: string;
  description?: string;
  image?: string;
  stock: number;
  price: number;

  brand: string;
  quantity: number;
  category: string;

  //   productCarts?: any;
  //   productCategories?: any;
  //   comments?: any;
}
