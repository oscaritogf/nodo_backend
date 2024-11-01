// pages/solicitudes.js
import CardList from "@/components/CardList";

export default function Solicitudes() {
  return (
    <div className="p-4 text-custom-gray">
      <h1>SolicitudesLayout</h1>
      <p>Contenido sobre las solicitudes...</p>
      <div>Aquí van los filtros con select</div>

      {/* Aquí van los cards */}
      <CardList />
    </div>
  );
}
