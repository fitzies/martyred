import fakedata from "../../fakedata.json";

const getProducts = (type?: string) => {
  if (type === "NEW ARRIVALS") {
    return fakedata.filter((product) => product.new);
  } else if (type) {
    return fakedata.filter((product) => product.type === type);
  }
  return fakedata;
};

export { getProducts };
