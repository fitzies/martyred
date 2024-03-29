import Product from "@/components/Product";
import { getProducts } from "@/lib/util";

const Page = ({ params }: { params: { index: string } }) => {
  const index = params.index.replace("-", " ").toUpperCase();
  const products: Product[] = getProducts(index) as unknown as Product[];

  return (
    <div className="w-screen flex flex-col">
      <div className="border-b px-8 py-6">
        <p className="font-bold">{index}</p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-[1px]">
        {products.map((product) => (
          <Product product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
};

export default Page;
