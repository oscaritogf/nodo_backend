// src/app/inicio/page.js
// src/app/inicio/page.js
'use client';

import { useRouter } from 'next/navigation';
import ToggleComponent from "@/components/ToggleComponent";

export default function Inicio() {
  const router = useRouter();

  return (
    <div className="mb-3">
      <h3 className="text-lg font-medium text-gray-700">Componente de Inicio</h3>
      <ToggleComponent />
    </div>
  );
}