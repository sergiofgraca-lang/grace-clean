import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

export default function Contato() {
  return (
    <>
      <Header />

      <main className="pagina">
        <h1>Fale Conosco</h1>

        <p>
          Solicite um orçamento sem compromisso.
        </p>

        <h2>📱 WhatsApp</h2>

        <p>(11) 98464-4381</p>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/5511984644381",
              "_blank"
            )
          }
        >
          Chamar no WhatsApp
        </button>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}