import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import "../styles/Home.css";

export default function Home() {
  return (
   <>
  <Header />

  <section className="hero-home">
    <div className="hero-conteudo">
      <h1>Limpeza Profissional de Estofados</h1>

      <p>
        Sofás, colchões, cadeiras e bancos automotivos com atendimento em
        domicílio.
      </p>

      <button>Solicitar Orçamento</button>
    </div>
  </section>

  {/* As próximas seções virão aqui */}

  <Footer />

  <WhatsappButton />
</>
  );
}