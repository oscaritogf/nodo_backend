'use client';

import React from "react";
import { Line, Radar, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler
);

const DashboardPrestamista = () => {
  // Datos simulados para pagos recibidos cada mes
  const pagosRecibidos = [1000, 1500, 3000, 2000, 3500, 4000];
  const tasaInteresPlataforma = 0.05; // Nodo cobra el 5% de cada pago como interés

  // Calcular el total de pagos recibidos y los intereses pagados a la plataforma
  const totalPagosRecibidos = pagosRecibidos.reduce((total, pago) => total + pago, 0);
  const totalInteresesPagados = pagosRecibidos.reduce((total, pago) => total + pago * tasaInteresPlataforma, 0);

  // Calcular los intereses pagados a Nodo por cada mes
  const interesesPorMes = pagosRecibidos.map((pago) => pago * tasaInteresPlataforma);

  // Datos para el gráfico de líneas de Pagos Recibidos
  const pagosData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Pagos Recibidos (LPS)",
        data: pagosRecibidos,
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  // Datos para el gráfico de líneas de Intereses Pagados a Nodo
  const interesesData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Intereses Pagados a Nodo (LPS)",
        data: interesesPorMes,
        borderColor: "#f44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        fill: true,
      },
    ],
  };

  // Datos simulados para los cinco tipos de préstamos
  const prestamosData = [
    { tipo: "Préstamo Personal", invertido: 5000, ganado: 2000 },
    { tipo: "Préstamo Vehicular", invertido: 10000, ganado: 3500 },
    { tipo: "Préstamo Hipotecario", invertido: 25000, ganado: 12000 },
    { tipo: "Préstamo Estudiantil", invertido: 8000, ganado: 3000 },
    { tipo: "Préstamo Comercial", invertido: 15000, ganado: 7000 },
  ];

  // Datos para el gráfico de radar (Desempeño de Préstamos por Tipo)
  const radarData = {
    labels: prestamosData.map((prestamo) => prestamo.tipo),
    datasets: [
      {
        label: "Invertido",
        data: prestamosData.map((prestamo) => prestamo.invertido),
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Rojo para invertido
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Ganado",
        data: prestamosData.map((prestamo) => prestamo.ganado),
        backgroundColor: "rgba(54, 162, 235, 0.5)", // Azul para ganado
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Datos para el gráfico de barras apiladas (rendimiento por prestatario)
  const prestatariosData = {
    labels: ["Prestatario A", "Prestatario B", "Prestatario C", "Prestatario D", "Prestatario E"],
    datasets: [
      {
        label: "Invertido",
        data: [5000, 7000, 4000, 8000, 6000],
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "Recuperado",
        data: [2500, 4500, 3000, 6000, 4000],
        backgroundColor: "rgba(153, 102, 255, 0.7)",
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      {/* Encabezado */}
      <h2 className="text-2xl font-semibold text-gray-700">Dashboard de Préstamos Otorgados</h2>
      <p className="text-gray-500 mb-4">Resumen de los préstamos otorgados y rendimiento general.</p>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {/* Gráfico de Líneas de Pagos Recibidos */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Evolución de Pagos Recibidos</h3>
          <Line data={pagosData} options={{ responsive: true }} />
        </div>

        {/* Gráfico de Líneas de Intereses Pagados a Nodo */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Evolución de Intereses Pagados a Nodo</h3>
          <Line data={interesesData} options={{ responsive: true }} />
        </div>

        {/* Gráfico Radar */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Desempeño de Préstamos</h3>
          <Radar data={radarData} options={{ responsive: true }} />
        </div>

        {/* Gráfico de Barras Apiladas de Rendimiento por Prestatario */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Rendimiento por Prestatario</h3>
          <Bar
            data={prestatariosData}
            options={{
              responsive: true,
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true,
                },
              },
            }}
          />
        </div>
    
      </div>

      {/* Resumen de Pagos y Balance */}
      <div className="bg-gray-100 text-gray-700 p-4 rounded-lg font-semibold mb-4">
        <div className="flex justify-between">
          <span>Total Pagos Recibidos:</span>
          <span>{totalPagosRecibidos.toLocaleString()} LPS</span>
        </div>
        <div className="flex justify-between">
          <span>Total Intereses Pagados a Nodo:</span>
          <span>{totalInteresesPagados.toLocaleString()} LPS</span>
        </div>
      </div>

      {/* Resumen de Préstamos Otorgados */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Préstamos Otorgados</h3>
        <table className="w-full mt-2 text-gray-700">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">Tipo</th>
              <th className="border-b p-2 text-right">Invertido</th>
              <th className="border-b p-2 text-right">Ganado</th>
            </tr>
          </thead>
          <tbody>
            {prestamosData.map((prestamo, index) => (
              <tr key={index}>
                <td className="border-b p-2">{prestamo.tipo}</td>
                <td className="border-b p-2 text-right">{prestamo.invertido.toLocaleString()} LPS</td>
                <td className="border-b p-2 text-right">{prestamo.ganado.toLocaleString()} LPS</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Nota */}
      <p className="text-xs text-gray-500 mt-4">
        Nota: Los saldos mostrados son datos de referencia y pueden cambiar.
      </p>
    </div>
  );
};

export default DashboardPrestamista;
