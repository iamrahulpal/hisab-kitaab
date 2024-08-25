"use client";
import Link from "next/link";
import { toast } from "sonner"

export default function Signup() {
  return (
    <div>
      <Link href={"/verification"}>
        <button onClick={() => toast.success("OTP Sent Successfully")} className=" bg-[#7F3DFF] active:bg-[#6429da] text-[#FCFCFC] w-[343px] h-[56px] rounded-2xl text-lg font-semibold">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
