import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white-800 border-t border-black-400 bg-black-100 px-20 py-12 ">
      <div className="flex gap-2 justify-center">
        <p>Created by</p>
        <Link
          href="https://github.com/MaciejMu"
          className="text-gradient_purple-blue"
        >
          Maciej Muter
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
