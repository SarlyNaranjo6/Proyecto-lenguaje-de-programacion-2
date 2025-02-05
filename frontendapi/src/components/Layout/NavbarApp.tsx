import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarApp = () => {
  const [menuItems] = useState([
    { name: "Inicio", link: "/inicio" },
    { name: "Productos", link: "/productos" },
    { name: "Contacto", link: "/contacto" },
  ]);

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `px-4 py-2 text-lg font-medium transition duration-300 ease-in-out 
                ${isActive ? "Hober: border-b-2 border-indigo-600 text-indigo-400" : "hover:text-white rounded-xl hover:scale-105"}`
              }
            >
              {item.name}
            </NavLink>
          </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarApp;
