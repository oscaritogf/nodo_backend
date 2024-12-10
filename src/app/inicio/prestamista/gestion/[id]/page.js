"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { GetInstallmentsByLoanRequest } from '@/services/GetInstallmentsByLoanRequest'; 

const LoanDetails = () => {
  const { id } = useParams(); 
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
    
      GetInstallmentsByLoanRequest(id)
        .then((data) => {
          setLoan(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!loan || loan.length === 0) return <p>No se encontraron datos.</p>;


  const totalAmount = loan.reduce((acc, payment) => acc + payment.Monto, 0);
  const paidAmount = loan.reduce(
    (acc, payment) => (payment.Estado_Cuota === "Pagado" ? acc + payment.Monto : acc),
    0
  );
  const remainingBalance = loan.reduce(
    (acc, payment) => (payment.Estado_Cuota === "Pendiente" || payment.Estado_Cuota === "Mora" ? acc + payment.Monto : acc),
    0
  );

  return (
    <div className="p-4 text-gray-700 flex justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 border">
        <h1 className="text-3xl font-bold text-center mb-6">Préstamo #{id}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {loan.map((payment) => (
            <div
              key={payment.NumeroCuota}
              className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-100"
            >
              <div>
                <p className="font-medium">Cuota #{payment.NumeroCuota}</p>
                <p className="text-sm text-gray-500">Vence: {payment.Fecha_Vencimiento}</p>
                <p
                  className={`text-sm font-semibold ${
                    payment.Estado_Cuota === "Pagado"
                      ? "text-green-500"
                      : payment.Estado_Cuota === "Mora"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  Estado: {payment.Estado_Cuota}
                </p>
              </div>
              <p className="font-bold text-lg">L. {payment.Monto.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="border-t pt-4 mt-4">
          <p className="flex justify-between font-semibold text-lg">
            <span>Monto Total:</span> <span>L. {totalAmount.toFixed(2)}</span>
          </p>
          <p className="flex justify-between font-semibold text-lg mt-2">
            <span>Monto Pagado:</span> <span>L. {paidAmount.toFixed(2)}</span>
          </p>
          <p className="flex justify-between font-semibold text-lg mt-2">
            <span>Saldo Pendiente:</span> <span>L. {remainingBalance.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;
