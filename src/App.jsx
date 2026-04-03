function App() {

  const whatsapp = () => {
    const numero = "5511984644381";
    const mensagem = "Olá! Quero um orçamento para limpeza de estofados";
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
  };

  return (
    <>
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
            <img src="https://img.freepik.com/fotos-premium/sofa-antes-e-depois-de-limpeza-a-seco-perto-de-parede-cinzenta-em-interiores-colagem_144356-46144.jpg?w=1500" />
            <p>Sofás</p>
          </div>

          <div className="card">
            <img src="https://img.freepik.com/fotos-premium/colchao-antes-e-depois-da-limpeza-dentro-de-casa-vista-superior_495423-31944.jpg?w=1500" />
            <p>Colchões</p>
          </div>

          <div className="card">
            <img src="https://img.freepik.com/fotos-premium/cadeira-de-moveis-estofada-antes-e-depois-da-limpeza-a-seco-sobre-um-fundo-branco_186673-12696.jpg?w=1500" />
            <p>Cadeiras</p>
          </div>

          <div className="card">
            <img src="https://img.freepik.com/fotos-premium/espalhar-detergente-em-assentos-de-tecido-do-carro-usando-broca-com-escova-para-limpeza-a-seco-aplicar-detergente-em-assento-de-tecido-no-interior-do-carro-para-limpeza-a-seco_255847-10050.jpg?w=1500" />
            <p>Banco de veículos</p>
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

      <footer>
        <p>© 2026 Grace Clean</p>
      </footer>

      <div className="whatsapp-float" onClick={whatsapp}>
        💬
      </div>
    </>
  );
}

export default App;