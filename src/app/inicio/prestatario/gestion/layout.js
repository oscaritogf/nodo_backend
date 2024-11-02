'use client';
import ToggleComponent from "@/components/ToggleComponent";
export default function GestionLayout({ children }) {
  return (
    <div>
      <div className="space-y-4 text-custom-gray">

        <ToggleComponent></ToggleComponent>

        {children} {/* Aquí se renderizan las subpáginas de seguridad, privacidad, etc. */}
      </div>
    </div>
  );
}
