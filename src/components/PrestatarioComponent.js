'use client';

import React from "react";
import { Line, Doughnut, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

const DashboardPrestatario = () => {
  const pagosRealizados = [800, 1200, 1500, 1100, 1800, 2000];
  const saldoPendienteMensual = pagosRealizados.map((pago) => pago * 0.9);
  const prestamosActivos = [
    { tipo: "Préstamo Estudiantil", saldoInicial: 10000, saldoPendiente: 6000 },
    { tipo: "Préstamo Personal", saldoInicial: 8000, saldoPendiente: 4000 },
    { tipo: "Préstamo Vehicular", saldoInicial: 15000, saldoPendiente: 10000 },
  ];
  const balanceGeneral = {
    totalPagado: 9000,
    saldoTotal: 20000,
  };

  const areaDataPagos = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Pagos Realizados (LPS)",
        data: pagosRealizados,
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  const lineDataProgresoDeuda = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Pagos Realizados",
        data: pagosRealizados,
        borderColor: "#4caf50",
        fill: false,
      },
      {
        label: "Saldo Pendiente",
        data: saldoPendienteMensual,
        borderColor: "#f44336",
        fill: false,
      },
    ],
  };

  const doughnutDataMorosidad = {
    labels: ["Total Pagado", "Saldo Total"],
    datasets: [
      {
        data: [balanceGeneral.totalPagado, balanceGeneral.saldoTotal - balanceGeneral.totalPagado],
        backgroundColor: ["#2196f3", "#ff9800"],
      },
    ],
  };

  const radarDataDesempeno = {
    labels: prestamosActivos.map((prestamo) => prestamo.tipo),
    datasets: [
      {
        label: "Saldo Pendiente",
        data: prestamosActivos.map((prestamo) => prestamo.saldoPendiente),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Pagos Realizados",
        data: prestamosActivos.map((prestamo) => prestamo.saldoInicial - prestamo.saldoPendiente),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-700">Dashboard de Prestatario</h2>
      <p className="text-gray-500 mb-4">Resumen de tus préstamos y balance general.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Desempeño por Tipo de Préstamo</h3>
          <Radar data={radarDataDesempeno} options={{ responsive: true }} />
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Estado de Morosidad</h3>
          <Doughnut data={doughnutDataMorosidad} options={{ responsive: true }} />
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Evolución de Pagos Realizados</h3>
          <Line data={areaDataPagos} options={{ responsive: true }} />
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Progreso de Deuda</h3>
          <Line data={lineDataProgresoDeuda} options={{ responsive: true }} />
        </div>
      </div>

      <div className="bg-gray-100 text-gray-700 p-4 rounded-lg font-semibold mb-4">
        <div className="flex justify-between">
          <span>Total Pagado:</span>
          <span>{balanceGeneral.totalPagado.toLocaleString()} LPS</span>
        </div>
        <div className="flex justify-between">
          <span>Saldo Total:</span>
          <span>{balanceGeneral.saldoTotal.toLocaleString()} LPS</span>
        </div>
      </div>

      

      <p className="text-xs text-gray-500 mt-4">Nota: Los datos son de referencia y pueden variar.</p>
    </div>
  );
};

export default DashboardPrestatario;

