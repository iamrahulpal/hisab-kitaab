import ExpenseForm from "@/components/expense/ExpenseForm";
import Balance from "@/components/home/Balance";
import Graph from "@/components/home/Graph";
import InOut from "@/components/home/InOut";
import HomeNavbar from "@/components/home/Navbar";
import RecentTransactions from "@/components/home/RecentTransactions";
import Tab from "@/components/home/Tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExpenseNavbar from "@/components/expense/Navbar";
import { RiHome2Fill, RiPieChartFill } from "react-icons/ri";
import { FaArrowRightArrowLeft, FaUser } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AddExpense from "@/components/home/AddExpense";
import AddIncome from "@/components/home/AddIncome";

export default function Home() {
  return (
    <>
      <Tabs defaultValue="home" className="">
        <TabsContent className="mt-0" value="home">
          <div className="bg-gradient-to-b from-[#FFF6E5]">
            <HomeNavbar />
            <Balance />
            <InOut />
          </div>

          <Tab />
          <RecentTransactions />
        </TabsContent>

        <TabsContent className="mt-0" value="transaction">
          <ExpenseNavbar />
          <ExpenseForm />
        </TabsContent>

        <TabsContent  className="mt-0"  value="add">
          <div className=" blur-sm">
            <div className="bg-gradient-to-b from-[#FFF6E5]">
              <HomeNavbar />
              <Balance />
              <InOut />
            </div>
          <div className=" bg-gradient-to-t from-[#E4D4FC]">
            <Tab />
            <RecentTransactions />
          </div>
          
          </div>
          <div className="  bottom-28  right-24 fixed">
            <AddExpense />
          </div>
          <div className=" fixed bottom-28 left-24">
            <AddIncome />
          </div>
        </TabsContent>

        <TabsList
          className="  flex py-11[px] left-0 right-0 bottom-0 fixed h-[70px] bg-[#FCFCFC] justify-around
         "
        >
          <TabsTrigger
            value="home"
            className="data-[state=active]:text-[#7F3DFF] data-[state=active]:bg-transparent
            data-[state=active]:font-normal data-[state=active]:shadow-none
            "
          >
            <div className="flex flex-col justify-center items-center ">
              <RiHome2Fill className=" h-[24px] w-[24px] " />
              <p className="text-[10px]">Home</p>
            </div>
          </TabsTrigger>

          <TabsTrigger
            value="transaction"
            className="data-[state=active]:text-[#7F3DFF] data-[state=active]:bg-transparent
            data-[state=active]:font-normal data-[state=active]:shadow-none
            "
          >
            <div className="flex flex-col justify-center items-center">
              <FaArrowRightArrowLeft className=" h-[24px] w-[24px] " />
              <p className="text-[10px]">Transaction</p>
            </div>
          </TabsTrigger>

          <TabsTrigger
            value="add"
            className="data-[state=active]:text-[#7F3DFF] data-[state=active]:bg-transparent 
            data-[state=active]:font-normal data-[state=active]:shadow-none
            "
          >
            <div className="flex flex-col justify-center items-center absolute bottom-[23px]">
              <IoIosAddCircle className=" h-16 w-16 text-[#7F3DFF] active:text-[#9d78e8] " />
            </div>
          </TabsTrigger>

          <TabsTrigger
            value="analytics"
            className="data-[state=active]:text-[#7F3DFF] data-[state=active]:bg-transparent 
            data-[state=active]:font-normal data-[state=active]:shadow-none
            "
          >
            <div className="flex flex-col justify-center items-center">
              <RiPieChartFill className=" h-[24px] w-[24px] " />
              <p className="text-[10px]">Analytics</p>
            </div>
          </TabsTrigger>

          <TabsTrigger
            value="profile"
            className="data-[state=active]:text-[#7F3DFF] data-[state=active]:bg-transparent
            data-[state=active]:font-medium data-[state=active]:shadow-none data-[state=active]:text-sm
            "
          >
            <div className="flex flex-col justify-center items-center">
              <FaUser className=" h-[24px] w-[24px] " />
              <p className="text-[10px]">Profile</p>
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
}
