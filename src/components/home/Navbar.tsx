import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxChevronDown } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="py-3 px-4 flex justify-between items-center bg-gradient-to-b from-[#FFF6E5]">
      {/* Avatar */}
      <button className=" ring-2 ring-[#7F3DFF] rounded-full ring-offset-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </button>
      {/* Current Month */}
      <button className=" flex items-center space-x-1 border border-[#F1F1FA] py-2 pl-2 pr-4 rounded-[40px]">
        <RxChevronDown className=" h-6 w-6" />
        <p className=" text-[#212325] text-sm">February</p>
      </button>
      {/* Notification */}
      <FaBell className=" h-7 w-7 text-[#7F3DFF]" />
    </div>
  );
}
