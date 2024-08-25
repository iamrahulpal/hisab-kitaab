
"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "sonner"


export default function Button() {
  return (
    <div>
      <Link href={"/home"}>
        <button onClick={() => toast.success("Expense Added", { position: "top-center" , icon: <FaCheckCircle className="text-[#FD3C4A] h-5 w-5"/>})} className=" bg-[#7F3DFF] text-[#FCFCFC] w-[343px] h-[56px] rounded-2xl text-lg font-semibold">
          Continue
        </button>
      </Link>
    </div>
  );
}
