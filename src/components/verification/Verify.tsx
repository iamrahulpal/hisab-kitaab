import Link from "next/link";

export default function Verify() {
  return (
    <div>
      <Link href={"/login"}>
        <button className=" bg-[#7F3DFF] text-[#FCFCFC] w-[343px] h-[56px] rounded-2xl text-lg font-semibold">
          Verify
        </button>
      </Link>
    </div>
  );
}
