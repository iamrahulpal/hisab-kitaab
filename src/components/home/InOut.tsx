import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

export default function InOut() {
  return (
    <div className=" mt-[27px] px-4 flex justify-evenly space-x-4">
      <div className="flex items-center p-4 border rounded-[28px] bg-[#00A86B] space-x-[10px]">
        <div className=" h-12 w-12 rounded-[16px] bg-white flex flex-col justify-center items-center">
          <FaArrowDown className=" h-[10px] w-[10px] text-[#00A86B]" />
          <FaMoneyCheckDollar className=" h-[16px] w-[24px] text-[#00A86B]" />
        </div>
        <div>
          <p className=" text-white">Income</p>
          <p className=" text-white font-semibold text-[22px]">₹2000</p>
        </div>
      </div>
      <div className="flex items-center p-4 border rounded-[28px] bg-[#FD3C4A] space-x-[10px]">
        <div className=" h-12 w-12 rounded-[16px] bg-white flex flex-col justify-center items-center">
          <FaArrowUp className=" h-[10px] w-[10px] text-[#FD3C4A]" />
          <FaMoneyCheckDollar className=" h-[16px] w-[24px] text-[#FD3C4A]" />
        </div>
        <div>
          <p className=" text-white">Expenses</p>
          <p className=" text-white font-semibold text-[22px]">₹1200</p>
        </div>
      </div>
    </div>
  );
}
