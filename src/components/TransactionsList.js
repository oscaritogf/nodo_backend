import React from "react";

const transactions = [
  { name: "Junior Steven Garcia", amount: "2,000 L", interest: "3%" },
  { name: "Juan Andree Castillo", amount: "800 L", interest: "6%" },
  { name: "Sofia Valentina Gonzales", amount: "500 L", interest: "6.5%" },
  { name: "Gabriela Patricia Sanchez", amount: "8,000 L", interest: "3%" },
  { name: "Ana Carolina Torres", amount: "1,000 L", interest: "3%" },
  { name: "Javier Eduardo Ramirez", amount: "2,000 L", interest: "3%" },
];

const TransactionCard = ({ name, amount, interest }) => (
  <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg mb-3">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6.75a3 3 0 11-6 0 3 3 0 016 0zM4.5 18.75a7.5 7.5 0 0115 0v.75H4.5v-.75z"
          />
        </svg>
      </div>
      <div>
        <p className="text-gray-800 font-semibold">{name}</p>
        <p className="text-gray-500">Monto: {amount}</p>
      </div>
    </div>
    <div>
      <p className="text-gray-500">Interés: {interest}</p>
    </div>
  </div>
);

const TransactionsList = () => (
  <div className="p-4 max-w-md mx-auto">
    <h2 className="text-xl font-bold mb-4">Últimas transacciones</h2>
    {transactions.map((transaction, index) => (
      <TransactionCard
        key={index}
        name={transaction.name}
        amount={transaction.amount}
        interest={transaction.interest}
      />
    ))}
  </div>
);

export default TransactionsList;
