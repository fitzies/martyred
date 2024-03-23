import { getProducts } from "@/lib/util";

const Page = ({ params }: { params: { index: string } }) => {
  const index = params.index.replace("-", " ").toUpperCase();
  const products: Product[] = getProducts(index) as Product[];

  return (
    <div className="w-screen flex flex-col">
      <div className="border-b px-8 py-6">
        <p className="font-bold">{index}</p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-[1px]">
        {products.map((product) => (
          <div
            className="border p-4 -m-px flex flex-col gap-4 cursor-pointer"
            key={product.name}
          >
            <div className="w-full lg:h-[50vh] h-[30vh] bg-zinc-900 rounded-lg"></div>
            <h2>{product.name}</h2>
            <p className="text-gray-400 text-sm">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
