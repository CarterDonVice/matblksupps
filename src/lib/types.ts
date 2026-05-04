export type FlavorId = 'midnight-limeade' | 'mango-passionfruit';
export type PurchaseTypeId = 'subscribe' | 'one-time';

export interface Flavor {
  id: FlavorId;
  name: string;
  shortName: string;
  /** CSS gradient string applied as background to flavor selector swatches. */
  gradient: string;
}

export interface Ingredient {
  name: string;
  dose: string;
  /** Underlined + bolder weight in the open ingredient list. */
  hero?: boolean;
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
  /** First image is the hero. Subsequent slots may be `null` for "coming soon" placeholders. */
  images: (string | null)[];
  shortDescription: string;
  longDescription: string;
  ingredients: Ingredient[];
  inStock: boolean;
  reviewCount: number;
  averageRating: number;
}
