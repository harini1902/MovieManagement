export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {product: Product};
  Cart: undefined;
};

export interface Product {
  id: number;
  name: string;
  price: number;
}
