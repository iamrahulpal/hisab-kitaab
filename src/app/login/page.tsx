import Image from "next/image";
import Link from "next/link";
import leftArrow from "../../../public/Images/arrow-left.svg";
import LoginButton from "@/components/login/Login";

export default function Login() {
  return (
    <form>
      {/* Navbar */}
      <div className="p-4  flex items-center">
        <Link href={"/"}>
          <Image src={leftArrow} alt="leftArrow" />
        </Link>
        <div className=" w-full mr-12">
          <p className=" text-[#212325] text-lg font-semibold text-center">
            Login
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 mt-14">
        <div className=" space-y-6">
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
      
        {/* Login Button */}
        <div className="my-9 space-y-3">
          <LoginButton />
        </div>

        {/* Forgot Password */}
        <div className="text-[18px] mb-[38px] font-semibold text-center text-[#7F3DFF]">
          Forgot Password?
        </div>
          <p className="text-[#91919F] text-center">
          Don’t have an account yet?{" "}
            <span className="underline underline-offset-4 text-[#7F3DFF] text-[16px]">
              Sign Up
            </span>
          </p>
      </div>
    </form>
  );
}
