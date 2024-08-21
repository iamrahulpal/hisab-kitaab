"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Verify from "@/components/verification/Verify";
import Link from "next/link";
import leftArrow from "../../../public/Images/arrow-left.svg";
import { useState } from "react";
import Image from "next/image";
export default function Verification() {
  const [value, setValue] = useState("");

  return (
    <>
      <form action="">
        {/* Navbar */}
        <div className="p-4  flex items-center">
          <Link href={"/signup"}>
            <Image src={leftArrow} alt="leftArrow" />
          </Link>
          <div className=" w-full mr-12">
            <p className=" text-[#212325] text-lg font-semibold text-center">
              Verification
            </p>
          </div>
        </div>
        <div className="px-4 mt-[157px] space-y-16">
          <div className="text-4xl text-left">
            Enter your <p>Verification Code</p>
          </div>

          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <div className="text-[16px]">
            We send verification code to your
            <p>
              email{" "}
              <span className=" text-[#7F3DFF]">brajaoma*****@gmail.com.</span>{" "}
              You can check your inbox.
            </p>
          </div>

          <span className="underline underline-offset-3 text-[#7F3DFF] text-[16px]">
            I didn’t received the code? Send again
          </span>
          <Verify />
        </div>
      </form>
    </>
  );
}
