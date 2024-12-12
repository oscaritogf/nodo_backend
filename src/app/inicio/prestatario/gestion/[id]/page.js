"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { GetInstallmentsByLoanRequest } from '@/services/GetInstallmentsByLoanRequest';
import { MakePayment } from '@/services/MakePayment';
import { FetchReceiptDetails } from '@/services/FetchReceiptDetails';
import { jwtDecode } from 'jwt-decode'; 

const LoanDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Suponiendo que el token está en localStorage
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.UsuarioID); // Guardamos el userId del token
      } catch (error) {
        console.error("Error al decodificar el token", error);
      }
    } else {
      toast.error('Token no encontrado');
    }
  }, []);






  useEffect(() => {
    if (id) {
      fetchLoanDetails(id);
    }
  }, [id]);

  const fetchLoanDetails = async (loanId) => {
    try {
      const data = await GetInstallmentsByLoanRequest(loanId);
      setLoan(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const openModal = async (payment) => {
    try {
      console.log('CuotaPrestamoID:', payment.CuotaPrestamoID);
  
      if (payment.Estado_Cuota === "Pendiente" || payment.Estado_Cuota === "Mora") {
        setModalContent(renderPaymentForm(payment));
      } else if (payment.Estado_Cuota === "Pagado") {
        const receiptDetails = await FetchReceiptDetails(payment.CuotaPrestamoID);
        setModalContent(renderReceiptDetails(receiptDetails));
      } else {
        console.warn('Estado de cuota no reconocido:', payment.Estado_Cuota);
      }
    } catch (err) {
      console.error("Error handling modal content:", err.message);
      setModalContent(<p>Error al cargar los detalles del recibo: {err.message}</p>);
    }
  };
  




  const renderPaymentForm = (payment) => (
    <div>
      <h2 className="text-xl font-bold mb-4">Formulario de Pago</h2>
      <form onSubmit={(e) => handlePaymentSubmit(e, payment)}>
        <label className="block mb-2">Monto a pagar:</label>
        <input 
          type="number" 
          className="w-full p-2 border rounded mb-4" 
          defaultValue={payment.Monto.toFixed(2)} 
          id="MontoTransaccion" 
        />
        <button 
          type="submit" 
          className="bg-custom-gray text-white px-4 py-2 rounded-lg w-full"
        >
          Confirmar Pago
        </button>
      </form>
    </div>
  );




  const renderReceiptDetails = (receipt) => (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Recibo de Préstamo</h2>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Fecha de emisión:</strong> {receipt.Fecha_Emision}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Monto de la cuota:</strong> L. {receipt.Monto_Cuota}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Saldo restante:</strong> L. {receipt.Saldo_Restante}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Monto de la transacción:</strong> L. {receipt.Monto_Transaccion}
      </p>
      <button className="bg-custom-gray text-white px-4 py-2 rounded-lg w-full">
        Compartir
      </button>
    </div>
  );

  

  const handlePaymentSubmit = async (e, payment) => {
    e.preventDefault();

    const paymentData = {
      CuotaPrestamoID: payment.CuotaPrestamoID,
      MontoTransaccion: parseFloat(e.target.MontoTransaccion.value),
      UsuarioID:userId,
    };

    try {
      await MakePayment(paymentData);
      router.push('/inicio/prestatario/gestion');
      closeModal();
    } catch (err) {
      console.error("Error al realizar el pago:", err.message);
      alert(`Error al realizar el pago: ${err.message}`);
    }
  };

  const closeModal = () => setModalContent(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!loan || loan.length === 0) return <p>No se encontraron datos.</p>;

  const calculateAmounts = (loanData) => ({
    totalAmount: loanData.reduce((acc, payment) => acc + payment.Monto, 0),
    paidAmount: loanData.reduce((acc, payment) => payment.Estado_Cuota === "Pagado" ? acc + payment.Monto : acc, 0),
    remainingBalance: loanData.reduce((acc, payment) => (payment.Estado_Cuota === "Pendiente" || payment.Estado_Cuota === "Mora") ? acc + payment.Monto : acc, 0),
  });

  const { totalAmount, paidAmount, remainingBalance } = calculateAmounts(loan);

  return (
    <div className="p-4 text-gray-700 flex justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 border">
        <h1 className="text-3xl font-bold text-center mb-6">Préstamo #{id}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {loan.map((payment) => (
            <div
              key={payment.NumeroCuota}
              className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-100 cursor-pointer"
              onClick={() => openModal(payment)}
            >
              <div>
                <p className="font-medium">Cuota #{13}</p>
                <p className="text-sm text-gray-500">Vence: {payment.Fecha_Vencimiento}</p>
                <p
                  className={`text-sm font-semibold ${payment.Estado_Cuota === "Pagado" ? "text-green-500" : payment.Estado_Cuota === "Mora" ? "text-red-500" : "text-yellow-500"}`}
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

      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            {modalContent}
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanDetails;
