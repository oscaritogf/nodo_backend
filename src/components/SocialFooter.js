import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialFooter = ({ consejos }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-300">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-700">Consejos Útiles</h3>
        {consejos && consejos.map((consejo, index) => (
          <p key={index} className="text-gray-600 mt-2">{consejo}</p>
        ))}
      </div>
      <div className="text-right">
        <h3 className="text-lg font-semibold text-gray-700">Síguenos en Redes Sociales</h3>
        <div className="flex gap-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialFooter;
