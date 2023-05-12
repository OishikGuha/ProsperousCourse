import "../app/globals.css";

const NavBar = () => {
  return (
    <nav className="flex flex-row h-auto justify-between p-5 backdrop-blur-sm shadow-md sticky top-0 bg-[#121212] border-b-2 border-black z-[2] bg-opacity-80">
      <div className="">
        <img src="/logo.png" alt="logo" width={40} className="rounded-md" />
      </div>
      <div className="">
        <ul className="flex flex-row space-x-4 text-xl mt-[5%] ">
          <li className="text-white">
            <a href="#card"> Buy</a>
          </li>
          <li className="text-white">
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
