// app/solicitudes/page.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@/components/Card";

// Simulación de llamada a una API
const fetchCards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Junior Steven Garcia", amount: "2,0000", interest: 3, loanType: "personal" },
        { id: 2, name: "Maria Lopez", amount: "10,000", interest: 5, loanType: "hipotecario" },
        { id: 3, name: "Carlos Rivera", amount: "4,500", interest: 4, loanType: "automotriz" },
        { id: 4, name: "Ana Torres", amount: "15,000", interest: 6, loanType: "empresarial" },
        { id: 5, name: "Luis Hernandez", amount: "3,200", interest: 2.5, loanType: "personal" },
      ]);
    }, 1000);
  });
};

export default function ListaSolicitudes() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <div className=" w-full p-4 text-custom-gray">
      <h1 className="text-center text-2xl font-bold mb-4">Lista de Solicitudes</h1>
      <div className="flex justify-center">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link key={card.id} href={`http://localhost:3000/inicio/prestamista/solicitudes/${card.id}`}>
              <Card
                name={card.name}
                amount={card.amount}
                interest={card.interest}
                loanType={card.loanType}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}