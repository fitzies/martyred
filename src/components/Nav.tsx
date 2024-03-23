import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";

const Nav = () => {
  let items = ["NEW ARRIVALS", "TOPS", "PANTS", "ACCESSORIES"];
  return (
    <div className="w-screen justify-between px-10 py-8 flex border-b">
      <div className="lg:flex hidden">logo</div>
      <div className="gap-8 flex">
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
      <IoPersonOutline />
    </div>
  );
};

export default Nav;
