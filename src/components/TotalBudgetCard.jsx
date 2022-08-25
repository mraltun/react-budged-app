import React from "react";
import { useBudgets } from "../context/BudgetsContext";
import BudgetCard from "./BudgetCard";

const TotalBudgetCard = () => {
  const { expenses, budgets } = useBudgets();
  // Get the total amount of expenses
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);

  // Get the total amount of max
  const max = budgets.reduce((total, budget) => total + budget.max, 0);

  // Don't show the card if there is no amount in this category
  if (amount === 0) return null;

  return (
    <BudgetCard
      amount={amount}
      name='Total'
      gray
      max={max}
      hideButtons
    ></BudgetCard>
  );
};

export default TotalBudgetCard;
