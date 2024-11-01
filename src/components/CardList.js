// components/CardList.js
"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card"; // Asegúrate de la ruta correcta al componente Card

// Simulación de llamada a una API
const fetchCards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "PABLO PEREZ CASTILLO", description: "6 Video - 40 min", label: "Business Trip" },
        { id: 2, title: "Project Planning", description: "8 Video - 50 min", label: "Project Work" },
        { id: 3, title: "Team Building", description: "4 Video - 30 min", label: "Office Event" },
        { id: 4, title: "Team Building", description: "4 Video - 30 min", label: "Office Event" },
        { id: 5, title: "Team Building", description: "4 Video - 30 min", label: "Office Event" },
      ]);
    }, 1000);
  });
};

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Llamada a la función fetchCards y actualización del estado
    fetchCards().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 ">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          label={card.labe}
        />
      ))}
    </div>
  );
};

export default CardList;
