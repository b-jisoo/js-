export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  quantity: number;
  amount: number;
};

export type Products = {
  Products: Product[];
};

export type CartPage = {
  cartItems: Product[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};
