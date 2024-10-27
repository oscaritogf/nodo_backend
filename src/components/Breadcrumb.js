'use client';

const Breadcrumb = ({ activeComponent }) => {
  const breadcrumbMap = {
    inicio: "Inicio",
    ajustes: "Ajustes",
    prestatario: "Prestatario",
    prestamista: "Prestamista",
  };

  return (
    <nav className="text-gray-500 text-sm mb-4">
      <ul className="flex space-x-2">
        <li className="hover:text-gray-700">
          <span>{breadcrumbMap[activeComponent]}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
