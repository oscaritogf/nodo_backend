"use client";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Header = ({ toggleSidebar, isSidebarOpen, title, userImage }) => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedTokend = jwtDecode(token);
        setUserName(
          `${decodedTokend.primer_nombre} ${decodedTokend.primer_apellido}`
        );
      } catch (error) {
        console.error("error al decodificador el token", error);
      }
    }
  }, []);

  return (
    <header className=" mb-4">
      <div className="flex items-center justify-between">
        <button className="z-50 text-orange-600" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <FaBars size={32} className="text-custom-fond" />
          ) : (
            <FaBars size={32} />
          )}
        </button>

        <h1 className="text-2xl font-bold text-orange-600">{title}</h1>

        <div className="flex items-center space-x-2">
          <p className="text-black">{userName}</p>
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <img
              src={userImage}
              alt="User Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
