
"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Simulación de datos específicos de la tarjeta
const fetchCardById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        { id: 1, name: "Junior Steven Garcia", amount: "2,0000", interest: 3, loanType: "personal" },
        { id: 2, name: "Maria Lopez", amount: "10,000", interest: 5, loanType: "hipotecario" },
        { id: 3, name: "Carlos Rivera", amount: "4,500", interest: 4, loanType: "automotriz" },
        { id: 4, name: "Ana Torres", amount: "15,000", interest: 6, loanType: "empresarial" },
        { id: 5, name: "Luis Hernandez", amount: "3,200", interest: 2.5, loanType: "personal" },
      ];
      resolve(data.find((card) => card.id === parseInt(id)));
    }, 1000);
  });
};

const SolicitudDetail = () => {
  const params = useParams(); // Utilizamos useParams en lugar de recibir params como prop
  const id = params.id;
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCardById(id).then((data) => {
        setCard(data);
      });
    }
  }, [id]);

  if (!card) return <p>Loading...</p>;

  return (
    <div className="p-4 text-custom-gray">
      <h1 className="text-2xl font-bold mb-4">Detalles de la Solicitud</h1>
      <div className="max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold">{card.name}</h2>
        <p>Monto: {card.amount} L</p>
        <p>Interés: {card.interest}%</p>
        <p>Tipo de Préstamo: {card.loanType}</p>
      </div>
    </div>
  );
};

export default SolicitudDetail;