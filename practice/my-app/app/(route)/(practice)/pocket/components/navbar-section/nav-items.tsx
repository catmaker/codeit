"use client";
import Link from "next/link";

const NavItems = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex ${className}`}>
      <Link href="/pocket#features" className="font-normal">
        Features
      </Link>
      <Link href="/pocket#pricing" className="font-normal">
        Pricing
      </Link>
      <Link href="/pocket#faq" className="font-normal">
        FAQ
      </Link>
    </div>
  );
};

export default NavItems;