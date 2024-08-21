import { FaBagShopping } from "react-icons/fa6";
import { RiRestaurantFill } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
export default function RecentTransactions() {
  return (
    <>
      <div className=" mx-4 mt-2">
        <div className="p-2 flex justify-between items-center">
          <p className="text-lg font-semibold text-[#292B2D]">
            Recent Transaction
          </p>
          <button className=" h-8 px-4 border bg-[#EEE5FF] rounded-full text-[#7F3DFF] text-[14px]">
            See All
          </button>
        </div>
        {/* Transaction List */}
        <div className=" flex flex-col space-y-2">
        <div className=" px-[17px] py-[15px] rounded-2xl bg-[#fffaf0] flex justify-between">
          {/* Transaction Card */}
          <div className="flex space-x-[9px]">
            {/* Transaction Icon */}
            <div className="p-[10px] rounded-2xl bg-[#FCDDA1]">
              <FaBagShopping className="h-[40px] w-[40px] text-[#FCAC12]" />
            </div>
            <div className="flex flex-col justify-between my-[4px]">
              <p className=" text-base text-[#292B2D]">Shopping</p>
              <p className=" text-[13px] text-[#91919F]">Buy some grocery</p>
            </div>
          </div>

          <div className="flex flex-col justify-between my-[4px] text-right">
            <p className=" text-base font-semibold text-[#FD3C4A]">- $120</p>
            <p className=" text-[13px] text-[#91919F]">10:00 AM</p>
          </div>
        </div>
        <div className=" px-[17px] py-[15px] rounded-2xl bg-[#f4f2f9] flex justify-between">
          {/* Transaction Card */}
          <div className="flex space-x-[9px]">
            {/* Transaction Icon */}
            <div className="p-[10px] rounded-2xl bg-[#EEE5FF]">
              <FaRegCreditCard className="h-[40px] w-[40px] text-[#7F3DFF]" />
            </div>
            <div className="flex flex-col justify-between my-[4px]">
              <p className=" text-base text-[#292B2D]">Bills</p>
              <p className=" text-[13px] text-[#91919F]">Online auto-renewal</p>
            </div>
          </div>

          <div className="flex flex-col justify-between my-[4px] text-right">
            <p className=" text-base font-semibold text-[#FD3C4A]">- $37</p>
            <p className=" text-[13px] text-[#91919F]">01:23 AM</p>
          </div>
        </div>
        <div className=" px-[17px] py-[15px] rounded-2xl bg-[#f8efef] flex justify-between">
          {/* Transaction Card */}
          <div className="flex space-x-[9px]">
            {/* Transaction Icon */}
            <div className="p-[10px] rounded-2xl bg-[#FDD5D7]">
              <RiRestaurantFill className="h-[40px] w-[40px] text-[#FD3C4A]" />
            </div>
            <div className="flex flex-col justify-between my-[4px]">
              <p className=" text-base text-[#292B2D]">Food</p>
              <p className=" text-[13px] text-[#91919F]">Pizza at Joey's</p>
            </div>
          </div>

          <div className="flex flex-col justify-between my-[4px] text-right">
            <p className=" text-base font-semibold text-[#FD3C4A]">- $75</p>
            <p className=" text-[13px] text-[#91919F]">08:35 PM</p>
          </div>
        </div>
        
        <div className=" px-[17px] py-[15px] rounded-2xl bg-[#fffaf0] flex justify-between">
          {/* Transaction Card */}
          <div className="flex space-x-[9px]">
            {/* Transaction Icon */}
            <div className="p-[10px] rounded-2xl bg-[#FCDDA1]">
              <FaBagShopping className="h-[40px] w-[40px] text-[#FCAC12]" />
            </div>
            <div className="flex flex-col justify-between my-[4px]">
              <p className=" text-base text-[#292B2D]">Shopping</p>
              <p className=" text-[13px] text-[#91919F]">Buy ice cream</p>
            </div>
          </div>

          <div className="flex flex-col justify-between my-[4px] text-right">
            <p className=" text-base font-semibold text-[#FD3C4A]">- $10</p>
            <p className=" text-[13px] text-[#91919F]">11:07 PM</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
