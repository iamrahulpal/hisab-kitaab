import { FaArrowLeftLong } from "react-icons/fa6";
import leftArrow from "../../../public/Images/arrow-left.svg";
import Image from "next/image";
import Signup from "@/components/signup/Signup";
import Link from "next/link";

export default function Home() {
  return (
    <form>
      {/* Navbar */}
      <div className="p-4  flex items-center">
        <Link href={"/"}>
          <Image src={leftArrow} alt="leftArrow" />
        </Link>
        <div className=" w-full mr-12">
          <p className=" text-[#212325] text-lg font-semibold text-center">
            Sign Up
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 mt-14 ">
        <div className=" space-y-6">
          <div className=" border border-[#F1F1FA] px-4 py-3 rounded-2xl">
            <input
              type="text"
              placeholder="Name"
              className="w-full outline-none h-8 text-[#212325]"
            />
          </div>
          <div className=" border border-[#F1F1FA] px-4 py-3 rounded-2xl">
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none h-8 text-[#212325]"
            />
          </div>
          <div className=" border border-[#F1F1FA] px-4 py-3 rounded-2xl">
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none h-8 text-[#212325]"
            />
          </div>
        </div>
        {/* Terms and condition */}
        <div className="flex items-start space-x-2 mt-[17px]">
          <input
            type="checkbox"
            id="terms"
            className=" h-6 w-6 border-2 border-[#7F3DFF]"
          />
          <label htmlFor="terms" className="text-[14px]">
            By signing up, you agree to the{" "}
            <span className="text-[#7F3DFF]">
              Terms of Service and Privacy Policy
            </span>
          </label>
        </div>
      </div>
      {/* Sinup Button */}
      <div className="mt-[27px] space-y-3 flex flex-col justify-center items-center">
        <Signup />
        <p className="text-[#91919F] text-center">
          Already have an account?{" "}
          <span className="underline underline-offset-4 text-[#7F3DFF] text-[16px]">
            Login
          </span>
        </p>
      </div>
    </form>
  );
}
