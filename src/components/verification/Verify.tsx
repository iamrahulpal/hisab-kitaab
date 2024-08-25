"use client";
import Link from "next/link";
import { toast } from "sonner"

export default function Verify() {
  return (
    <div className=" flex justify-center items-center">
      <Link href={"/login"}>
        <button onClick={() => toast.success("OTP Verified Successfully")} className=" bg-[#7F3DFF] active:bg-[#6429da] text-[#FCFCFC] w-[343px] h-[56px] rounded-2xl text-lg font-semibold">
          Verify
        </button>
      </Link>
    </div>
  );
}
