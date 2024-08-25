import Link from "next/link";

export default function Signup() {
  return (
    <div>
      <Link href={"/signup"}>
        <button className=" bg-[#7F3DFF] active:bg-[#6429da] text-[#FCFCFC] w-[343px] h-[56px] rounded-2xl text-lg font-semibold">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
