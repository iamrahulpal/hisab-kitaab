import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxChevronDown } from "react-icons/rx";

export default function Month() {
  return (
      <DropdownMenu>
        <DropdownMenuTrigger className=" outline-none">
          <div className="flex items-center space-x-1 border border-[#F1F1FA] py-2 pl-2 pr-4 rounded-[40px]">
            <RxChevronDown className=" h-6 w-6" />
            <p className=" text-[#212325] text-sm">February</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gradient-to-b from-[#FFF6E5] ">
          <DropdownMenuItem>January</DropdownMenuItem>
          <DropdownMenuItem>February</DropdownMenuItem>
          <DropdownMenuItem>March</DropdownMenuItem>
          <DropdownMenuItem>April</DropdownMenuItem>
          <DropdownMenuItem>May</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}
