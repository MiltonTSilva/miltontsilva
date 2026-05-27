const RenderingReactComponent = () => {
  return (
    <article>
      <h2 className="sub-title">Renderizando Componentes com onClick</h2>
      <p>
        No React, não "chamamos" um componente como se fosse uma função comum
        dentro de um evento <code>onClick</code>. Em vez disso, alteramos o{" "}
        <strong>estado (state)</strong> da aplicação, e o React se encarrega de
        atualizar a interface para exibir o componente desejado.
      </p>

      <h4>💡 O Conceito Principal</h4>
      <p>
        A interface no React é uma representação visual do estado atual. Para
        exibir um componente ao clicar em um botão, seguimos três passos:
      </p>
      <ul>
        <li>
          <strong>Criar um estado:</strong> Para controlar se o componente deve
          ser visto ou qual componente deve ser exibido.
        </li>
        <li>
          <strong>Atualizar o estado:</strong> No evento <code>onClick</code> do
          botão.
        </li>
        <li>
          <strong>Renderização Condicional:</strong> Usar lógica dentro do JSX
          para mostrar o componente apenas se o estado permitir.
        </li>
      </ul>

      <h5>🚀 Exemplo Prático 1: Mostrar/Ocultar (Toggle)</h5>
      <p>Ideal para modais, avisos ou abas simples.</p>
      <pre>
        <code>
          {`const [isVisible, setIsVisible] = useState(false);
return (
  <div>
    <button onClick={() => setIsVisible(!isVisible)}>
      {isVisible ? 'Esconder' : 'Mostrar'} Componente
    </button>

    {isVisible && <MeuComponente />}
  </div>
);`}
        </code>
      </pre>

      <h4>🚀 Exemplo Prático 2: Seleção de Múltiplos Itens</h4>
      <p>
        Este é o padrão que usamos no seu Portal para trocar entre os artigos
        "Conventional Commits" e "Background Service".
      </p>
      <pre>
        <code>
          {`// 1. Estado armazena o nome ou ID do item ativo
const [activeItem, setActiveItem] = useState<string | null>(null);

return (
  <div>
    <button onClick={() => setActiveItem('A')}>Ver Artigo A</button>
    <button onClick={() => setActiveItem('B')}>Ver Artigo B</button>

    {/* 2. Renderização condicional baseada no valor do estado */}
    <div className="content">
      {activeItem === 'A' && <ComponenteA />}
      {activeItem === 'B' && <ComponenteB />}
      
      {activeItem && (
        <button onClick={() => setActiveItem(null)}>Fechar</button>
      )}
    </div>
  </div>
);`}
        </code>
      </pre>

      <h4>⚠️ Erros Comuns</h4>
      <ul>
        <li>
          <strong>Tentar retornar o componente no onClick:</strong>{" "}
          <code>{"onClick={() => <MeuComponente />}"}</code> não funciona porque
          o retorno de um evento é descartado pelo navegador.
        </li>
        <li>
          <strong>Esquecer o useState:</strong> Sem estado, o React não sabe que
          precisa "re-desenhar" a tela quando o valor de uma variável muda.
        </li>
      </ul>

      <h4>🎯 Conclusão</h4>
      <p>
        Este padrão de <strong>Renderização Condicional</strong> é a base para
        criar SPAs (Single Page Applications) interativas. Ele permite que a
        página mude dinamicamente sem recarregar o navegador, proporcionando uma
        experiência de usuário fluida.
      </p>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#c8dafc",
          borderRadius: "8px",
          color: "black",
        }}
      >
        <p style={{textAlign: "center"}}>
          <strong>Dica Importante</strong>{" "}
        </p>
        <p>
          Para navegação entre páginas completas com troca de URL, considere
          utilizar o <code>react-router-dom</code>.
        </p>
      </div>
    </article>
  );
};

export default RenderingReactComponent;


