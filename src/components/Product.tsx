import Link from "next/link";

const Product = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/product/${product.name.toLowerCase().replace(/ /g, "-")}`}
      className="border p-4 -m-px flex flex-col gap-4 cursor-pointer"
      key={product.name}
    >
      <div className="w-full lg:h-[50vh] h-[30vh] bg-zinc-900 rounded-lg"></div>
      <h2>{product.name}</h2>
      <p className="text-gray-400 text-sm">${product.price}</p>
    </Link>
  );
};

export default Product;
