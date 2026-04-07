import { useEffect, useState } from "react";
import minhaFoto3carro from "./assets/minha-foto3carro.jpg";
import minhaFoto2sofa from "./assets/minha-foto-2-sofa.jpg";
import minhaFotocadeira from "./assets/minha-fotocadeira.jpg";

function App() {
  const [visitas, setVisitas] = useState(0);

useEffect(() => {
  fetch("https://api.counterapi.dev/v1/graceclean/visitas/up")
    .then(res => res.json())
    .then(data => setVisitas(data.count))
    .catch(err => console.error(err));
}, []);

  const whatsapp = () => {
    const numero = "5511984644381";
    const mensagem = "Olá! Quero um orçamento para limpeza de estofados";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* CONTEÚDO */}
      <div style={{ flex: 1 }}>
        <header>
          <h1>Grace Clean</h1>
          <nav>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <section id="inicio" className="hero">
          <h2>Limpeza Profissional de Estofados</h2>
          <p>Sofás, colchões e mais</p>
          <button onClick={whatsapp}>Solicitar Orçamento</button>
        </section>

        <section id="servicos" className="servicos">
          <h2>Nossos Serviços</h2>

          <div className="cards">
            <div className="card">
              <img src={minhaFoto2sofa} alt="Sofá" />
              <p>Sofás</p>
              <p>Higienização e limpeza profissional</p>
            </div>

            <div className="card">
              <img src="https://img.freepik.com/fotos-premium/colchao-antes-e-depois-da-limpeza-dentro-de-casa-vista-superior_495423-31944.jpg?w=1500" />
              <p>Colchões tirar manchas, higiênizar e eliminar ácaros</p>
            </div>

            <div className="card">
              <img src={minhaFotocadeira} alt="Cadeira" />
              <p>Cadeiras higienizadas e limpas a seco</p>
            </div>

            <div className="card">
              <img src={minhaFoto3carro} />
              <p>Banco de veículos aspiração e higienização</p>
            </div>
          </div>
        </section>

        <section className="antes-depois">
          <h2>Antes e Depois</h2>

          <div className="galeria">
            <img src="https://img.freepik.com/fotos-premium/o-sofa-passa-da-suja-a-limpa-com-um-servico-de-limpeza-profissional_864588-94149.jpg?w=1500" />
            <img src="https://img.freepik.com/fotos-premium/comparacao-de-um-sofa-bege-sujo-antes-da-limpeza-e-do-mesmo-sofa-apos-a-limpeza-destacando-a-eficacia-do-processo-de-limpeza_124507-304972.jpg?w=1500" />
          </div>
        </section>

        <section id="contato" className="contato">
          <h2>Fale Conosco</h2>
          <p>Atendemos na sua casa</p>
          <button onClick={whatsapp}>Chamar no WhatsApp</button>
        </section>
      </div>

      {/* RODAPÉ COM CONTADOR */}
      <footer
        style={{
          backgroundColor: "#111",
          color: "#ccc",
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
        }}
      >
        © 2026 Grace Clean • 👀 {visitas} visitas
      </footer>

      {/* BOTÃO WHATSAPP */}
      <div className="whatsapp-float" onClick={whatsapp}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          width="30"
        />
      </div>
    </div>
  );
}

export default App;