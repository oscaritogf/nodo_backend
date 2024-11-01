// RightPanel.js
import React, { useState } from 'react';
import SectionList from "@/components/SectionList";
import Calendar from "@/components/Calendar";

const RightPanel = () => {
  const [date, setDate] = useState(new Date());

  const payments = [
    { name: 'Junior Steven Garcia', amount: '2,000 L' },
    { name: 'Juan Andree Castillo', amount: '800 L' },
    { name: 'Sofia Valentina Gonzales', amount: '500 L' },
    { name: 'Gabriela Patricia Sanchez', amount: '8,000 L' },

  ];

  const overdues = [
    { name: 'Gabriela Patricia Sanchez', amount: '8,000 L' },
    { name: 'Ana Carolina Torres', amount: '1,000 L' },
    { name: 'Javier Eduardo Ramirez', amount: '2,000 L' },
  ];

  return (
    <div className="w-80 bg-white shadow-lg p-3 text-custom-gray  border shadow-sm bg-gray-50 rounded-lg ">
      <Calendar date={date} setDate={setDate} />

      <SectionList title="Próximos Pagos" items={payments} />


      <SectionList title="Cuotas en Mora" items={overdues} />
    </div>
  );
};

export default RightPanel;
