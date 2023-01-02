export interface iProducts{
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iProductsValue{
  products: iProducts[];
}

