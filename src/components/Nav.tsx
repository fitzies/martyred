import Link from "next/link";
import { IoCart, IoCartOutline, IoPersonOutline } from "react-icons/io5";

const Nav = () => {
  let items = ["NEW ARRIVALS", "TOPS", "PANTS", "ACCESSORIES"];
  return (
    <div className="w-screen px-10 py-8 flex justify-between border-b">
      <div className="lg:flex hidden">logo</div>
      <div className="gap-8 flex justify-center items-center">
        {items.map((item, index) => {
          return (
            <Link
              href={`/${item.replace(" ", "-").toLowerCase()}`}
              key={item}
              className={`${
                index === 0 ? "lg:flex hidden" : ""
              } cursor-pointer hover:font-bold`}
            >
              {item}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-6">
        <IoCartOutline />
        {/* <IoPersonOutline /> */}
      </div>
    </div>
  );
};

export default Nav;
