import Link from "next/link";

export default function Login() {
  return (
    <div>
      <Link href={"/login"}>
        <button className=" bg-[#EEE5FF] text-[#7F3DFF] w-[343px] h-[56px] rounded-2xl text-lg font-semibold">
          Login
        </button>
      </Link>
    </div>
  );
}
