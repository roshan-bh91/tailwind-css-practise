import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from ".";

const Navbar = () => {
  return (
    <nav className="padding-container flexBetween max-container relative z-30 py-5">
      <Link href={"/"}>
        <Image width={74} height={29} src="/hilink-logo.svg" alt="Logo" />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(({ href, key, label }) => (
          <Link
            key={key}
            href={href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
        <Image
          src={"menu.svg"}
          height={32}
          width={32}
          alt="menu"
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
