import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

import "../styles/Servicos.css";

import sofa from "../assets/images/minha-foto-2-sofa.jpg";
import cadeira from "../assets/images/minha-fotocadeira.jpg";
import carro from "../assets/images/minha-foto3carro.jpg";
import colchao from "../assets/images/colchao.jpg";

import antesDepois1 from "../assets/images/antes-depois/antes-depois-cadeira.jpg";

export default function Servicos() {
  const whatsapp = () => {
    window.open(
      "https://wa.me/5511984644381?text=Olá! Gostaria de um orçamento para higienização.",
      "_blank"
    );
  };

  return (
    <>
      <Header />

      {/* Banner */}
      <section className="banner-servicos">
        <div className="banner-conteudo">
          <h1>Nossos Serviços</h1>

          <p>
            Cuidamos dos seus estofados com equipamentos profissionais,
            produtos de alta qualidade e atendimento em domicílio.
          </p>

          <button onClick={whatsapp}>
            Solicitar Orçamento
          </button>
        </div>
      </section>

      {/* Serviços */}
      <section className="servicos-grid">

        {/* SOFÁ */}
        <div className="servico">
          <img src={sofa} alt="Sofá" />

          <div className="servico-info">
            <h2>🛋️ Higienização de Sofás</h2>

            <p>
              Removemos sujeiras, manchas, odores, ácaros e bactérias,
              devolvendo limpeza, conforto e aparência renovada ao seu sofá.
            </p>

            <ul className="lista-servicos">
              <li>✔ Remoção de manchas</li>
              <li>✔ Eliminação de ácaros</li>
              <li>✔ Eliminação de odores</li>
              <li>✔ Produtos profissionais</li>
            </ul>

            <button
              className="btn-orcamento"
              onClick={whatsapp}
            >
              Solicitar orçamento
            </button>
          </div>
        </div>

        {/* COLCHÃO */}
        <div className="servico">
          <img src={colchao} alt="Colchão" />

          <div className="servico-info">
            <h2>🛏️ Higienização de Colchões</h2>

            <p>
              Processo profundo para eliminar ácaros, fungos,
              bactérias e odores, proporcionando um ambiente mais
              saudável para toda a família.
            </p>

            <ul className="lista-servicos">
              <li>✔ Elimina ácaros</li>
              <li>✔ Remove odores</li>
              <li>✔ Remove manchas</li>
              <li>✔ Mais saúde para sua família</li>
            </ul>

            <button
              className="btn-orcamento"
              onClick={whatsapp}
            >
              Solicitar orçamento
            </button>
          </div>
        </div>

        {/* CADEIRAS */}
        <div className="servico">
          <img src={cadeira} alt="Cadeira" />

          <div className="servico-info">
            <h2>🪑 Higienização de Cadeiras</h2>

            <p>
              Limpeza especializada para cadeiras residenciais,
              comerciais e corporativas, preservando o tecido
              e aumentando sua durabilidade.
            </p>

            <ul className="lista-servicos">
              <li>✔ Limpeza profunda</li>
              <li>✔ Elimina bactérias</li>
              <li>✔ Secagem rápida</li>
              <li>✔ Atendimento em domicílio</li>
            </ul>

            <button
              className="btn-orcamento"
              onClick={whatsapp}
            >
              Solicitar orçamento
            </button>
          </div>
        </div>

        {/* AUTOMÓVEL */}
        <div className="servico">
          <img src={carro} alt="Banco automotivo" />

          <div className="servico-info">
            <h2>🚗 Higienização de Bancos Automotivos</h2>

            <p>
              Aspiração e higienização completa dos bancos,
              removendo sujeiras, manchas, odores e devolvendo
              um ambiente limpo ao seu veículo.
            </p>

            <ul className="lista-servicos">
              <li>✔ Remove manchas</li>
              <li>✔ Elimina odores</li>
              <li>✔ Higienização completa</li>
              <li>✔ Produtos específicos para automóveis</li>
            </ul>

            <button
              className="btn-orcamento"
              onClick={whatsapp}
            >
              Solicitar orçamento
            </button>
          </div>
        </div>

      </section>

      {/* Benefícios */}
      <section className="beneficios">

        <h2>Por que escolher a Grace Clean?</h2>

        <div className="beneficios-grid">

          <div>✔ Atendimento em domicílio</div>

          <div>✔ Produtos profissionais</div>

          <div>✔ Eliminação de ácaros e bactérias</div>

          <div>✔ Secagem rápida</div>

          <div>✔ Orçamento sem compromisso</div>

          <div>✔ Atendimento personalizado</div>

        </div>

      </section>

      {/* Processo */}

<section className="processo">

  <h2>Como funciona a higienização?</h2>

  <p className="processo-subtitulo">
    Trabalhamos com um processo profissional para garantir a máxima limpeza e conservação dos seus estofados.
  </p>

  <div className="processo-grid">

    <div className="etapa">
      <div className="numero">1</div>
      <h3>Avaliação</h3>
      <p>
        Verificamos o tecido, manchas e o nível de sujeira para definir o melhor tratamento.
      </p>
    </div>

    <div className="etapa">
      <div className="numero">2</div>
      <h3>Aspiração</h3>
      <p>
        Removemos toda a poeira, resíduos e partículas soltas antes da higienização.
      </p>
    </div>

    <div className="etapa">
      <div className="numero">3</div>
      <h3>Higienização</h3>
      <p>
        Aplicamos produtos profissionais que eliminam manchas, odores e microrganismos.
      </p>
    </div>

    <div className="etapa">
      <div className="numero">4</div>
      <h3>Extração</h3>
      <p>
        Equipamentos específicos removem toda a sujeira juntamente com o excesso de umidade.
      </p>
    </div>

    <div className="etapa">
      <div className="numero">5</div>
      <h3>Finalização</h3>
      <p>
        Conferimos o resultado e orientamos sobre o tempo de secagem para garantir o melhor acabamento.
      </p>
    </div>

  </div>

</section>

{/* Antes e Depois */}

<section className="antesDepois">

  <h2>Resultados Reais</h2>

  <p>
    Confira um dos serviços realizados pela Grace Clean. A imagem mostra o antes e depois da higienização, evidenciando a remoção de sujeiras e a recuperação da aparência do estofado.
  </p>

  <div className="galeriaAntesDepois">

    <div className="trabalho">

      <img
        src={antesDepois1}
        alt="Antes e depois da higienização de cadeira"
      />

      <div className="trabalho-info">

        <h3>🪑 Higienização de Cadeira</h3>

        <p>
          Limpeza profunda com remoção de manchas, sujeiras, odores e microrganismos, preservando o tecido e devolvendo o aspecto de novo ao estofado.
        </p>

      </div>

    </div>

  </div>

</section>

      <Footer />

      <WhatsappButton />
    </>
  );
}