import Link from "next/link";
import { FaArrowDown, FaMoneyCheckDollar } from "react-icons/fa6";
import { toast } from "sonner"


export default function AddIncome() {
    return (
      <Link href={"/income"}>
        <button className=" h-14 w-14 rounded-full flex flex-col justify-center items-center bg-[#00A86B] hover:bg-[#189869]">
          <FaArrowDown className=" h-[10px] w-[10px] text-[#FCFCFC]" />
          <FaMoneyCheckDollar className=" h-[16px] w-[24px] text-[#FCFCFC]" />
        </button>
      </Link>
    )
}