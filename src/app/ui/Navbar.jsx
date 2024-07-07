import Link from "next/link";

export default function Navbar() {
  const navLinks = (
    <>
      <li>
        <Link href={"/features"}>Features</Link>
      </li>
      <li>
        <Link href={"/resources"}>Resources</Link>
      </li>
      <li>
        <Link href={"/pricing"}>Pricing</Link>
      </li>
      <li>
        <Link href={"/login"}>Log in</Link>
      </li>
      <li>
        <Link href={"/dashboard"}>Dashboard</Link>
      </li>
      <li>
        <Link
          className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded hidden lg:block"
          href={"/register"}
        >
          Join for free
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          href={"/"}
          className="lg:block md:block hidden font-bold text-2xl"
        >
          {" "}
          <span className="text-blue-500">T</span>exon
        </Link>
      </div>
      <div className="navbar-end hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end lg:hidden md:hidden">
        <a className="">Texon</a>
      </div>
    </div>
  );
}
