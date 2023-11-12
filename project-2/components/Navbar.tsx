import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="padding-container flexBetween max-container">
      <Link href={"/"}>
        <Image width={74} height={29} src="/hilink-logo.svg" alt="Logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
