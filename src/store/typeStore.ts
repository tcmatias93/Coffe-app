export interface Price {
  size: string;
  price: string;
  currency: string;
}

export interface Coffee {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: any;
  imagelink_portrait: any;
  ingredients: string;
  special_ingredient: string;
  prices: Price[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
}

export interface Bean {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: any; // Puedes usar `string` si es un enlace o el tipo que corresponda si usas `require()`
  imagelink_portrait: any;
  ingredients: string;
  special_ingredient: string;
  prices: Price[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
}

export interface StoreState {
  CoffeeList: Coffee[];
  BeanList: Bean[];
  CartPrice: number;
  FavoritesList: Coffee[]; // O el tipo que corresponda
  CartList: Coffee[]; // O el tipo que corresponda
  OrderHistoryList: Coffee[]; // O el tipo que corresponda
}
