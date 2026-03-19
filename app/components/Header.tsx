import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Plans", href: "/membership-plans" },
  { label: "Trainers", href: "/trainers" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="bg-amber-400 px-4 py-4 flex items-center justify-between shadow-md">
      {/* Logo + Brand Name */}
      <div className="flex items-center gap-3">
        <Image
          src="/gym-logo.png"
          alt="FitCore Gym Logo"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
        <span className="text-5xl font-extrabold text-black tracking-wide uppercase">
          FitCore Gym
        </span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  link.label === "Home"
                    ? "bg-amber-300 text-black text-2xl font-bold px-6 py-2 rounded-full"
                    : "text-black text-2xl font-semibold px-6 py-2 rounded-full hover:bg-amber-300 transition-colors"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
