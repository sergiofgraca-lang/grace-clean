import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import "../styles/Home.css";

export default function Home() {
  const whatsapp = () => {
    window.open(
      "https://wa.me/5511984644381?text=Olá! Gostaria de um orçamento para higienização.",
      "_blank"
    );
  };

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

      <button onClick={whatsapp}>
            Solicitar Orçamento
          </button>
    </div>
  </section>

  {/* As próximas seções virão aqui */}

  <Footer />

  <WhatsappButton />
</>
  );
}