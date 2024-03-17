import { IoPersonOutline } from "react-icons/io5";

const Nav = () => {
  let items = ["NEW ARRIVALS", "TOPS", "PANTS", "ACCESSORIES"];
  return (
    <div className="w-screen justify-between px-10 py-8 flex">
      <div className="lg:flex hidden">logo</div>
      <div className="gap-8 flex">
        {items.map((item, index) => {
          return (
            <div
              className={`${
                index === 0 ? "lg:flex hidden" : ""
              } cursor-pointer`}
              key={item}
            >
              {item}
            </div>
          );
        })}
      </div>
      <IoPersonOutline />
    </div>
  );
};

export default Nav;
