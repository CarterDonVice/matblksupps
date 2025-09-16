export type ProductCategory = "preworkout" | "protein" | "creatine";

export interface Product {
  id: string;
  slug: string;
  name: string; 
  subName: string;
  baseName: string;
  flavor: string;
  fullName: string;
  category: ProductCategory;
  price: number;
  description: string[];
  shortDescription?: string;
  images: string[];
  sellingPoints?: string[];
  ingredients?: string[];
  dataAiHint?: string;
  isOutOfStock?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
