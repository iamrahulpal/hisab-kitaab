import Button from "./Button";
import { Category } from "./Category";
import { Wallet } from "./Wallet";
import { Textarea } from "@/components/ui/textarea";

export default function ExpenseForm() {
  return (
    <form action="">
      <div className=" text-white bg-[#FD3C4A]">
        {/* Input */}
        <div className=" flex flex-col mx-[25px] pt-[56px]">
          <label
            className=" text-[18px] font-semibold text-[#cccbcb]"
            htmlFor="amount"
          >
            How much?
          </label>
          <div className=" flex">
            <p className=" text-[64px] font-semibold ">$</p>
            <input
              className=" outline-none w-full text-[64px] font-semibold bg-transparent placeholder:text-gray-300"
              id="amount"
              type="number"
              placeholder=""
            />
          </div>
        </div>
        {/* radios */}
        <div className=" flex flex-col items-center bg-white  w-full  rounded-t-3xl p-4 text-gray-500 space-y-4">
          <Category />
          <Wallet />
          <Textarea placeholder="Description" />
          <Button />
        </div>
      </div>
    </form>
  );
}
