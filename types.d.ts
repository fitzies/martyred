interface Product {
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: { [key: "XS" | "S" | "M" | "L" | "XL"]: number };
  type: "TOPS" | "PANTS" | "ACCESSORIES";
  color: string[];
  new: boolean;
}
