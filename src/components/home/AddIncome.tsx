import { FaArrowDown, FaMoneyCheckDollar } from "react-icons/fa6";

export default function AddIncome() {
    return (
        <div className=" h-14 w-14 rounded-full flex flex-col justify-center items-center bg-[#00A86B]">
          <FaArrowDown className=" h-[10px] w-[10px] text-[#FCFCFC]" />
          <FaMoneyCheckDollar className=" h-[16px] w-[24px] text-[#FCFCFC]" />
        </div>
    )
}