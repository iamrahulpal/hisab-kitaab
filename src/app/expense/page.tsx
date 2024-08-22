import ExpenseForm from "@/components/expense/ExpenseForm";
import Navbar from "@/components/expense/Navbar";
import { Wallet } from "@/components/expense/Wallet";

export default function Expense() {
  return (
    <div className="  ">
      <Navbar />
      <ExpenseForm />
    </div>
  );
}
