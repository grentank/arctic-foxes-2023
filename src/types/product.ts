export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: Rating;
};

export type Rating = {
  count: number;
};

export type ProductFromApi = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ApiRating;
};

export type ApiRating = {
  rate: number;
  count: number;
};

export type BuyProductHandlerType<Arg = ProductType['id']> = (id: Arg) => void;