const BackToTop = () => {
  return (
    <article>
      <h2 className="sub-title">Implementando Botão "Voltar ao Topo"</h2>
      <p>
        Em artigos longos ou páginas com muito conteúdo, a experiência do
        usuário (UX) é muito favorecida por um atalho que permita retornar ao
        início rapidamente, sem a necessidade de rolagem manual exaustiva.
      </p>

      <h4>💡 O Conceito Tecnológico</h4>
      <p>
        No ecossistema React, a forma mais moderna e performática de manipular
        elementos do DOM diretamente para controle de rolagem é através do hook{" "}
        <code>useRef</code> e do método nativo <code>scrollIntoView</code>.
      </p>

      <h4>🚀 Passo 1: Criando a Referência</h4>
      <p>
        Utilizamos o <code>useRef</code> para criar uma "âncora". Pense nisso
        como um marcador invisível que colocamos no topo do nosso componente.
      </p>
      <pre>
        <code>{`const articleTopRef = useRef<HTMLDivElement>(null);`}</code>
      </pre>

      <h4>🚀 Passo 2: Marcando o Alvo</h4>
      <p>
        Atribuímos essa referência à <code>div</code> ou container que
        representa o início do conteúdo que queremos alcançar.
      </p>
      <pre>
        <code>
          {`<div className="article-viewer" ref={articleTopRef}> {/* Conteúdo do Artigo */}</div>`}
        </code>
      </pre>

      <h4>🚀 Passo 3: A Função de Rolagem</h4>
      <p>
        Criamos uma função simples que acessa a referência e instrui o navegador
        a rolar até ela. O parâmetro <code>behavior: "smooth"</code> é o segredo
        para a animação suave.
      </p>
      <pre>
        <code>
          {`const scrollToTop = () => { articleTopRef.current?.scrollIntoView({ behavior: "smooth" });};`}
        </code>
      </pre>

      <h4>🚀 Passo 4: O Gatilho</h4>
      <p>
        Por fim, basta adicionar um botão que, ao ser clicado, execute a função
        de rolagem.
      </p>
      <pre>
        <code>
          {`<button onClick={scrollToTop}>Voltar ao Topo</button>`}
        </code>
      </pre>

      <h4>🚀 Passo 5: Visibilidade Dinâmica com Event Listeners</h4>
      <p>
        Para que o botão não polua a tela desnecessariamente, usamos o{" "}
        <code>useEffect</code>
        para monitorar a posição do scroll (<code>window.scrollY</code>).
      </p>
      <pre>
        <code>
          {`const [showButton, setShowButton]= useState(false);
useEffect(() => { 
  const handleScroll = () => {
  // Se rolar mais de 300 pixels para 
  // baixo, mostra o botão
  setShowButton(window.scrollY > 300);
};

window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);`}
        </code>
      </pre>

      <h4>🎨 Posicionamento Fixo (Floating Button)</h4>
      <p>
        Utilizamos o CSS para garantir que o botão "flutue" sobre o conteúdo,
        independente da rolagem, fixando-o em uma coordenada específica da tela.
      </p>
      <pre>
        <code>
          {`<button onClick={scrollToTop}
  style={{
    position: "fixed",
    bottom: "40px",
    right: "40px",
    zIndex: 1000
  }}
>
  ↑ Topo
</button>`}
        </code>
      </pre>

      <div
        style={{
          backgroundColor: "#fff3e0",
          padding: "15px",
          borderRadius: "8px",
          borderLeft: "5px solid #ff9800",
          color: "#e65100",
        }}
      >
        <strong>Importante:</strong> Sempre remova o{" "}
        <pre>
          <code>
            EventListener ex:
            {`return () => window.removeEventListener("scroll", handleScroll);`}
          </code>
        </pre>
        no retorno do <code>useEffect</code> para evitar vazamentos de memória
        (memory leaks).
      </div>

      <h4>✅ Por que usar scrollIntoView?</h4>
      <ul>
        <li>
          <strong>Nativo:</strong> Não requer bibliotecas externas pesadas.
        </li>
        <li>
          <strong>Preciso:</strong> Foca exatamente no elemento referenciado,
          ignorando cálculos manuais de pixels.
        </li>
        <li>
          <strong>Acessível:</strong> Funciona bem com leitores de tela ao mover
          o foco visual.
        </li>
      </ul>

      <h4>🎯 Conclusão</h4>
      <p>
        Esta solução é elegante e segue os princípios do React de evitar a
        manipulação desnecessária do <code>window.scrollTo</code> global,
        mantendo a lógica contida dentro do escopo do componente que realmente
        precisa da funcionalidade.
      </p>
    </article>
  );
};

export default BackToTop;
