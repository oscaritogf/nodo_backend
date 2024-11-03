'use client';

import InitToggleComponent from "@/components/InitToggleComponent";
import PrestatarioComponent from "@/components/PrestatarioComponent";
import PrestamistaComponent from "@/components/PrestamistaComponent";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function InicioPage() {
  const router = useRouter();
  const [selectedComponent, setSelectedComponent] = useState("prestatario");

  // Suponiendo que esta variable represente si "prestamista" está habilitado en la base
  const isPrestamistaEnabled = true;

  const handleToggle = (option) => {
    setSelectedComponent(option); // Cambia el componente a renderizar
  };

  return (
    <div>
      
      <InitToggleComponent
        onToggle={handleToggle}
        isPrestamistaEnabled={isPrestamistaEnabled}
      />

      {/* Renderiza los componentes según el estado */}
      <div className="mt-4">
        {selectedComponent === "prestatario" ? (
          <PrestatarioComponent />
        ) : (
          <PrestamistaComponent />
        )}
      </div>
    </div>
  );
}
