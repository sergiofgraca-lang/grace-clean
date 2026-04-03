function App() {

  const whatsapp = () => {
    const numero = "5511999999999";
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
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952" />
            <p>Sofás</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" />
            <p>Colchões</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1598300056393-4aac492f4344" />
            <p>Cadeiras</p>
          </div>
        </div>
      </section>

      <section className="antes-depois">
        <h2>Antes e Depois</h2>

        <div className="galeria">
          <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4" />
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952" />
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