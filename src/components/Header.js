'use client'
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar, isSidebarOpen, title, userImage }) => {
    return (
        <header className=" mb-4">
            <div className="flex items-center justify-between">
                
                <button className="z-50 text-orange-600" onClick={toggleSidebar}>
                    {isSidebarOpen ? <FaBars size={32} className="text-custom-fond" /> : <FaBars size={32} />}
                </button>
                <h1 className="text-2xl font-bold text-orange-600">{title}</h1>
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <img src={userImage} alt="User Avatar" className="w-full h-full max-w-xs max-h-xs rounded-full object-cover" />
                </div>
            </div>
        </header>
    );
};

export default Header;