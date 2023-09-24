import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="flex flex-col flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 bg-gray-900/90 text-white">
      <div className="flex-between w-full mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href={"/"} className="text-5xl">
          👨🏻‍🏫
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="body-text text-gradient_blue-purple font-bold">
            My Other Projects
          </DropdownMenuTrigger>
          <DropdownMenuContent className="rounded-none bg-gray-900/90 border-indigo-500/50 p-8">
            <DropdownMenuItem className="cursor-pointer hover:text-blue-500 py-4">
              <Link
                href={"https://portfolio-maciejmu.vercel.app/"}
                target="_blank"
              >
                MyPortfolio
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-blue-500 py-4">
              <Link
                href={"https://my-recipe-maciejmu.vercel.app/"}
                target="_blank"
              >
                MyRecipe
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-blue-500 py-4">
              <Link href={"https://waiter-helper.vercel.app/"} target="_blank">
                WaiterHelper
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-blue-500 py-4">
              <Link
                href={"https://maciej-muter-slowko.netlify.app/"}
                target="_blank"
              >
                Słówko
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
