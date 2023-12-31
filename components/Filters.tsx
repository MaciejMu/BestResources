"use client";

// import { formUrlQuery } from "@/sanity/utils";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { formUrlQuery } from "@/sanity/utilis";

const links = ["all", "Next 13", "frontend", "fullstack", "other"];

const Filters = () => {
  const [active, setActive] = useState("");
  const searchParms = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl;

    if (active === link) {
      setActive("");
      newUrl = formUrlQuery({
        params: searchParms.toString(),
        keysToRemove: ["category"],
        value: null,
      });
    } else {
      setActive(link);
      newUrl = formUrlQuery({
        params: searchParms.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <ul className="text-white-800 body-text no-scrollbar flex flex-wrap mx-auto justify-center w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <li key={link}>
          <button
            onClick={() => handleFilter(link)}
            className={`${
              active === link ? "gradient_blue-purple" : ""
            } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          >
            {link}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filters;
