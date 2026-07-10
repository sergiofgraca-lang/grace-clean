import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>Grace Clean</h2>
      </div>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}