import Link from "next/link";

export default function Navbar() {
  const listItem = [
    { id: 1, loc: "About", href: "/about" },
    { id: 2, loc: "Map", href: "/map" },
    { id: 3, loc: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="px-8 w-full flex border-b-4 border-b-yellow-400 justify-between items-center h-20 bg-zinc-900 text-yellow-400">
      {/* Logo */}
      <Link href="/">
        <span className="text-3xl font-bold font-sans tracking-wide hover:text-yellow-500">
          Daily Drip
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-16">
        {listItem.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>
              <span className="text-lg hover:text-yellow-500 transition-colors duration-300">
                {item.loc}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Call-to-Action Button */}
      <Link href="/signup">
        <span className="px-4 py-2 text-lg font-semibold text-white bg-yellow-400 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
          Get Started
        </span>
      </Link>
    </nav>
  );
}
