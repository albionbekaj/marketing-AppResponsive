import Nav from "./Nav";

function Header() {
  return (
    <header className="top-0 z-[20] mx-auto flex w-full items-center justify-between p-8">
      <h1 className="ml-10 md:ml-40 font-poppins font-bold flex text-[37px]">
        LOGO
      </h1>
      <Nav />
    </header>
  );
}

export default Header;
