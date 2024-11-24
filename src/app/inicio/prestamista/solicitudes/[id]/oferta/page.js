'use client'
import React, { useState } from 'react';


const LoanOfferForm = ({ onClose }) => {
  const [offerAmount, setOfferAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [termMonths, setTermMonths] = useState('');
  const [showOfferWarning, setShowOfferWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de la oferta
    onClose();
  };

  return (
    <form className="flex flex-col p-4 bg-white rounded shadow-lg w-full max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">
        Proponga sus términos para este préstamo
      </h2>

      <div className="relative mb-6">
        <label htmlFor="offerAmount" className="block text-xs font-semibold text-custom-gray mb-4">
          Monto de la Oferta:
        </label>
        {showOfferWarning && (
          <p className="text-xs text-yellow-600 mb-2">
            Ingrese un monto válido para la oferta.
          </p>
        )}
        <input
          id="offerAmount"
          type="text"
          value={offerAmount}
          onChange={(e) => setOfferAmount(e.target.value)}
          onFocus={() => setShowOfferWarning(true)}
          onBlur={() => setShowOfferWarning(false)}
          placeholder="Ingrese monto de la oferta"
          className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
          required
          style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
        />
      </div>

      <div className="relative mb-6">
        <label htmlFor="interestRate" className="block text-xs font-semibold text-custom-gray mb-4">
          Tasa de Interés (%):
        </label>
        <input
          id="interestRate"
          type="text"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Ingrese la tasa de interés"
          className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
          required
          style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
        />
      </div>

      <div className="relative mb-6">
        <label htmlFor="termMonths" className="block text-xs font-semibold text-custom-gray mb-4">
          Plazo (meses):
        </label>
        <input
          id="termMonths"
          type="text"
          value={termMonths}
          onChange={(e) => setTermMonths(e.target.value)}
          placeholder="Ingrese plazo en meses"
          className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
          required
          style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 px-3 text-white rounded-md font-bold bg-custom-orange"
        style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}
      >
        Enviar oferta
      </button>
    </form>
  );
};

export default LoanOfferForm;

