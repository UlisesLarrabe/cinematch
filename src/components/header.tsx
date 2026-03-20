import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full py-6 flex items-center justify-center absolute top-0 left-0 z-50">
      <Link
        href="/"
        className="text-4xl font-bold text-white tracking-tighter uppercase"
      >
        Cine<span className="text-red-neutral">Match</span>
      </Link>
    </nav>
  );
};

export default Header;
