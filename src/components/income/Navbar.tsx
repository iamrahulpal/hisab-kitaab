import Image from "next/image";
import Link from "next/link";
import leftArrow from "../../../public/Images/white-arrow-left.svg";

export default function Navbar() {
  return (
    <>
      <div className=" p-4 flex justify-between items-center text-white bg-[#00A86B]">
        <Link href={"/home"}>
          <Image className="w-8 h-8" src={leftArrow} alt="leftArrow" />
        </Link>
        <p className=" text-[18px] font-semibold">Income</p>
        <div className=" w-8 h-8"></div>
      </div>
    </>
  );
}
