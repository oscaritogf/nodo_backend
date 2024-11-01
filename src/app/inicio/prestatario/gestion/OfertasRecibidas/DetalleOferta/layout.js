// app/inicio/prestatario/gestion/prestamosActivos/layout.js
export default function layoutdetalleOfertat({ children }) {
    return (
      <div>
        <header>
          <h1>Gestión de Préstamos</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Tu Empresa</p>
        </footer>
      </div>
    );
  }
  