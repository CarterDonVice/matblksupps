export type FlavorId = 'midnight-limeade' | 'mango-passionfruit';
export type PurchaseTypeId = 'subscribe' | 'one-time';

export interface Flavor {
  id: FlavorId;
  name: string;
  shortName: string;
  accentHex: string;
}

export interface IngredientGroup {
  title: string;
  blurb: string;
  items: { name: string; dose: string }[];
}

export interface Review {
  id: string;
  stars: number;
  title?: string;
  body: string;
  author: string;
  date: string;
  verified?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subName: string;
  category: 'pre-workout';
  price: number;
  subscribePrice: number;
  flavors: Flavor[];
  images: string[];
  shortDescription: string;
  longDescription: string;
  sellingPoints: string[];
  ingredientGroups: IngredientGroup[];
  inStock: boolean;
  reviewCount: number;
  averageRating: number;
}
