import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaBell } from "react-icons/fa";
import Month from "./Month";


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
        <Month />
      {/* Notification */}
      <FaBell className=" h-7 w-7 text-[#7F3DFF]" />
    </div>
  );
}
