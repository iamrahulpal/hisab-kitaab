import Link from "next/link";

export default function Login() {
  return (
    <div>
      <Link href={"/home"}>
        <button className=" bg-[#7F3DFF] active:bg-[#6429da] text-[#FCFCFC] w-[343px] h-[56px] rounded-2xl text-lg font-semibold">
          Login
        </button>
      </Link>
    </div>
  );
}
