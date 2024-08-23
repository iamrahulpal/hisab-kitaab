import { FaArrowDown, FaArrowUp, FaMoneyCheckDollar } from "react-icons/fa6";

export default function AddExpense() {
  return (

      <div className=" h-14 w-14 rounded-full flex flex-col justify-center items-center bg-[#FD3C4A]">
          <FaArrowUp className=" h-[10px] w-[10px] text-[#FCFCFC]" />
          <FaMoneyCheckDollar className=" h-[16px] w-[24px] text-[#FCFCFC]" />

    </div>
  );
}
