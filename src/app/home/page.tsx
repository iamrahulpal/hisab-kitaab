import Balance from "@/components/home/Balance";
import InOut from "@/components/home/InOut";
import Navbar from "@/components/home/Navbar";
import Tab from "@/components/home/Tab";

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-b from-[#FFF6E5]">
      <Navbar />
      <Balance/>
      <InOut />
      <Tab />
    </div>
    </>
  );
}
