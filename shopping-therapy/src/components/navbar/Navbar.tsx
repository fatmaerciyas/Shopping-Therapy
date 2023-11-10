import NavbarLeft from "./navbarItem/NavbarLeft";
import NavbarRight from "./navbarItem/NavbarRight";

export default function Navbar() {
  return (
    <div className="flex item-center justify-between my-5">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
}
