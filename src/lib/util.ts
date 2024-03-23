import fakedata from "../../fakedata.json";

const getProducts = (type?: string) => {
  if (type === "NEW ARRIVALS") {
    return fakedata.filter((product) => product.new);
  } else if (type) {
    return fakedata.filter((product) => product.type === type);
  }
  return fakedata;
};

const getSpecficProduct = (product: string) => {
  return fakedata.find((item) => item.name === product);
};

export { getProducts, getSpecficProduct };
