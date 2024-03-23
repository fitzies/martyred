interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  sizes: string[];
  type: "TOPS" | "PANTS" | "ACCESSORIES";
  new: boolean;
}
