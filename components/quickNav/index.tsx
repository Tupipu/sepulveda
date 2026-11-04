import { Calendar, File, MessageCircle, Phone, Pin, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const quickNavLinks = [
  { label: "my account", icon: User, link: "/contact" },
  { label: "schedule now", icon: Calendar, link: "/contact" },
  { label: "click to call", icon: Phone, link: "/contact" },
  { label: "send us a file", icon: File, link: "/contact" },
  { label: "contact us", icon: MessageCircle, link: "/contact" },
  { label: "get directions", icon: Pin, link: "/contact" },
];

export default function QuickNav() {
  return (
    <div className="fixed absolute min-h-sreen px-4 py-10 right-0 top-0 flex flex-col gap-3 z-99">
      {quickNavLinks.map((q) => (
        <div
          key={q.label}
          className={`p-3 shadow-[0_8px_20px_rgba(0,0,0,0.45)] rounded-full text-white ${["my account"].includes(q.label) ? "bg-gray-500" : "bg-blue-800"}`}
        >
          <Link
            href={q.link}
            className="flex items-center gap-2"
            aria-label={`Quick link to ${q.label}`}
          >
            <q.icon />
          </Link>
        </div>
      ))}
    </div>
  );
}
