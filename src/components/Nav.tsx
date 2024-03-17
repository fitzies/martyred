const Nav = () => {
  let items = ["NEW ARRIVALS", "TOPS", "PANTS", "ACCESSORIES"];
  return (
    <div className="w-screen flex justify-between px-10 py-8">
      <div className="">logo</div>
      <div className="flex gap-8">
        {items.map((item) => {
          return (
            <div className="cursor-pointer" key={item}>
              {item}
            </div>
          );
        })}
      </div>
      <div>Account</div>
    </div>
  );
};

export default Nav;
