export type ProductCategory = "preworkout" | "protein" | "creatine";

export interface Product {
  id: string;
  slug: string;
  name: string; 
  subName: string; 
  fullName: string;
  category: ProductCategory;
  price: number;
  description: string[];
  shortDescription?: string;
  images: string[];
  sellingPoints?: string[];
  ingredients?: string[];
  dataAiHint?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
