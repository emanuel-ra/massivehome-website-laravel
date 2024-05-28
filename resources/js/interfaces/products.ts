export type Products = Product[];

export interface Product {
  id: number;
  title: string;
  price: number;  
  discount?:number;
  liquidation?:boolean;
  description: string;
  images: string[];
  colors?: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}