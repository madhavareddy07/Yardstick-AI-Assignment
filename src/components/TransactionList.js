"use client";

import { useEffect, useState } from "react";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then(setTransactions);
  }, []);

  const handleDelete = async (id) => {
    await fetch("/api/transactions", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    setTransactions(transactions.filter((t) => t._id !== id));
  };

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction._id}>
          {transaction.description} - ${transaction.amount} on{" "}
          {new Date(transaction.date).toLocaleDateString()}{" "}
          <button onClick={() => handleDelete(transaction._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}