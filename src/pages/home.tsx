import { useState, useRef, useEffect } from "react";
import BackgroundService from "../article/backgroundService";
import ConventionalCommits from "../article/conventionalCommits";
import RenderingReactComponent from "../article/renderingReactComponent";
import BackToTop from "../article/backToTop";
import HookUseEffect from "../article/hookUseEffect";
import "../styles/home.css";


export function Home() {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  // 1. Criamos uma referência para o container do artigo
  const articleTopRef = useRef<HTMLDivElement>(null);

  // Estado para controlar a visibilidade do botão flutuante
  const [showButton, setShowButton] = useState(false);

  // Monitorar o scroll da janela
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Função para rolar até a referência
  const scrollToTop = () => {
    articleTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Rola para o container do artigo automaticamente quando um artigo é selecionado
  useEffect(() => {
    if (activeArticle) {
      scrollToTop();
    }
  }, [activeArticle]);

  return (
    <>
      <section className="section-home" id="home">
        <h1>Bem-vindo</h1>
        <div className="home-content">
          <p>
            Olá! Sou <strong>Milton Tomé da Silva</strong>.
          </p>
          <p>
            Desenvolvedor de software com mais de 20 anos de experiência,
            especializado em .NET, C#, SQL Server e ReactJS.
          </p>
          <p>Explore meu portal para conhecer minha trajetória e projetos.</p>
        </div>
      </section>

      <section className="section-article"> 
        <div className="article-grid">
          <div className="article-group">
            <div className="article-group-title">Conventional Commits</div>
            <div className="article-list">
              <p className="article-pill">
                Para aplicar Conventional Commits e organizar a documentação em
                um repositório GitHub, você pode seguir uma abordagem prática
                que combina padronização de mensagens de commit com boas
                práticas de documentação. Isso ajuda a manter o histórico claro
                e facilita automações como geração de changelogs.
              </p>
              <button
                className="button"
                onClick={() => setActiveArticle("conventional")}
              >
                Ver
              </button>
            </div>
          </div>
          <div className="article-group">
            <div className="article-group-title">Background Service no .NET</div>
            <div className="article-list">
              <p className="article-pill">
                É comum em APIs tentar resolver todo o ciclo de vida de uma
                operação dentro de uma única requisição HTTP. Imagine o seguinte
                cenário: o usuário realiza uma ação e, antes de devolver um HTTP
                200 (OK)
              </p>
              <button
                className="button"
                onClick={() => setActiveArticle("background")}
              >
                Ver
              </button>
            </div>
          </div>
          <div className="article-group">
            <div className="article-group-title">Renderizando Componentes</div>
            <div className="article-list">
              <p className="article-pill">
                No React, não "chamamos" um componente como se fosse uma função
                comum dentro de um evento <code>onClick</code>. Em vez disso,
                alteramos o <strong>estado (state)</strong> da aplicação, e o
                React se encarrega de atualizar a interface para exibir o
                componente desejado.
              </p>
              <button
                className="button"
                onClick={() => setActiveArticle("rendering")}
              >
                Ver
              </button>
            </div>
          </div>
          <div className="article-group">
            <div className="article-group-title">Funcionalidade de Topo</div>
            <div className="article-list">
              <p className="article-pill">
                Aprenda a criar uma navegação interna fluida em seus artigos
                utilizando Hooks do React para melhorar a usabilidade e permitir
                que o usuário volte ao início do texto com um clique suave.
              </p>
              <button
                className="button"
                onClick={() => setActiveArticle("scroll-top")}
              >
                Ver
              </button>
            </div>
          </div>
          <div className="article-group">
            <div className="article-group-title">
              Entendendo o Hook useEffect no React
            </div>
            <div className="article-list">
              <p className="article-pill">
                O <strong>useEffect</strong> é um dos hooks mais importantes do
                React. Ele permite que você execute efeitos colaterais em
                componentes funcionais, como chamadas de API, manipulação de
                eventos ou sincronização com dados
              </p>
              <button
                className="button"
                onClick={() => setActiveArticle("useEffect")}
              >
                Ver
              </button>
            </div>
          </div>
        </div>

        {activeArticle && (
          // 3. Atribuímos a referência ao container do visualizador
          <div className="article-viewer" ref={articleTopRef}>
            <button className="button" onClick={() => setActiveArticle(null)}>
              Fechar Artigo
            </button>
            {activeArticle === "conventional" && <ConventionalCommits />}
            {activeArticle === "background" && <BackgroundService />}
            {activeArticle === "rendering" && <RenderingReactComponent />}
            {activeArticle === "scroll-top" && <BackToTop />}
            {activeArticle === "useEffect" && <HookUseEffect />}

            <div >
              <button className="button" onClick={() => setActiveArticle(null)}>
                Fechar Artigo
              </button>
            </div>

            {/* Botão flutuante condicional */}
            {showButton && (
              <button
                onClick={scrollToTop}
                style={{
                  position: "fixed",
                  bottom: "40px",
                  right: "10px",
                  zIndex: 1000,
                  padding: "12px 16px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
                className="button"
              >
                ↑ Voltar ao Topo
              </button>
            )}
          </div>
        )}
      </section>
    </>
  );
}
