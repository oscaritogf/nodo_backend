import axios from 'axios';
import settings from './settings';
export const FetchReceiptDetails = async (cuotaPrestamoID) => {
    try {
      const response = await fetch(`${settings.local}/loanRequest/obtener-recibo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ CuotaPrestamoID: cuotaPrestamoID }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Error al obtener los detalles del recibo');
      }
  
      if (Array.isArray(data) && data.length > 0) {
        return data[0]; 
      } else {
        throw new Error('No se encontraron detalles del recibo');
      }
    } catch (error) {
      console.error('Error en FetchReceiptDetails:', error.message);
      throw error;
    }
  };
  



