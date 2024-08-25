"use client";
import Link from "next/link";
import { toast } from "sonner";
import { FaCheckCircle } from "react-icons/fa";

export default function Button() {
  return (
    <div>
      <Link href={"/home"}>
        <button
          onClick={() =>
            toast.success("Income Added", { position: "top-center" , icon: <FaCheckCircle className="text-[#00A86B] h-5 w-5"/>})
          }
          className=" bg-[#7F3DFF] text-[#FCFCFC] w-[343px] h-[56px] rounded-2xl text-lg font-semibold"
        >
          Continue
        </button>
      </Link>
    </div>
  );
}
