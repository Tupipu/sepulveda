"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Facebook from "../svg/facebook";
import Linkedin from "../svg/linkedin";
import Yelp from "../svg/yelp";
import GoogleMaps from "../svg/google-maps";
import Instagram from "../svg/instagram";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const socialIcons = [
  { name: "facebook", icon: Facebook },
  { name: "linkedin", icon: Linkedin },
  { name: "yelp", icon: Yelp },
  { name: "google-maps", icon: GoogleMaps },
  { name: "instagram", icon: Instagram },
];

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Escrow Services",
    children: [
      {
        label: "Real Estate",
        href: "/escrow-services/real-estate",
      },
      {
        label: "Business Escrow",
        href: "/escrow-services/business",
      },
      {
        label: "Liquor Escrow",
        href: "/escrow-services/liquor",
      },
      {
        label: "Loan Escrow",
        href: "/escrow-services/loan",
      },
      {
        label: "Mobile Homes",
        href: "/escrow-services/mobile-homes",
      },
    ],
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Insights & Updates",
    href: "/insights-updates",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "FAQs",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <>
      <div className="h-40 bg-blue-800 flex items-center justify-between px-22">
        <div className="flex space-x-6 items-center">
          <Image
            src="/logo.webp"
            alt="logo"
            width={680}
            height={600}
            className=""
          />

          {/* social icons */}
          <div className="flex space-x-1">
            {socialIcons.map((s) => (
              <div
                key={s.name}
                className={`${
                  ["yelp", "instagram"].includes(s.name)
                    ? "w-7.5"
                    : ["google-maps"].includes(s.name)
                      ? "w-6.5"
                      : ["facebook"].includes(s.name)
                        ? "w-9.5 -mr-[0.02em]"
                        : "w-8.5"
                } cursor-pointer`}
              >
                <s.icon />
              </div>
            ))}
          </div>
        </div>
        {/* phone number */}
        <div className="flex flex-col items-center justify-center text-white mr-6">
          <p className="font-small capitalize text-lg">Call us today!</p>
          <p className="border-2 border-blue-500 text-2xl font-bold cursor-pointer rounded-lg py-2 px-4 hover:bg-blue-500">
            (818) 898-1831
          </p>
        </div>
      </div>
      <header className="flex items-center bg-blue-500">
        <nav className="flex items-center text-black">
          {navItems.map((item) => {
            const isActive =
              item.href === pathname ||
              item.children?.some((child) => child.href === pathname);

            return (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className={`group flex cursor-pointer items-center gap-1 p-4 font-bold transition-all duration-200 hover:bg-blue-800 hover:text-white hover:italic ${
                        isActive ? "bg-blue-600 text-white" : "text-black"
                      }`}
                    >
                      {item.label}

                      <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    <div className="absolute left-0 top-full z-50 hidden min-w-56 bg-white shadow-lg group-hover:block">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;

                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-5 py-3 text-base text-blue-950 hover:bg-blue-800 hover:text-white ${
                              isChildActive
                                ? "bg-blue-600 text-white"
                                : "text-black"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-4 font-bold hover:bg-blue-800 hover:text-white hover:italic ${
                      isActive ? "bg-blue-800 italic text-white" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </header>
    </>
  );
}
