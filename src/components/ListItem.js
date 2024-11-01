// ListItem.js
import React from 'react';
import { FaUser } from 'react-icons/fa';

const ListItem = ({ name, amount, interest }) => {
  return (
    <li className="flex items-center justify-between mb-3 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
      <div className="flex items-center">
        <FaUser className="mr-2 text-gray-500" />
        <div className="text-sm">
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-gray-500">Monto: <span className="font-medium">{amount}</span></p>
        </div>
      </div>
     
    </li>
  );
};

export default ListItem;
