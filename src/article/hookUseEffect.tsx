const HookUseEffect = () => {
  return (
    <article>
      <h2 className="sub-title">Entendendo o Hook useEffect no React</h2>
      <p>
        O <strong>useEffect</strong> é um dos hooks mais importantes do React.
        Ele permite que você execute efeitos colaterais em componentes
        funcionais, como chamadas de API, manipulação de eventos ou
        sincronização com dados externos.
      </p>

      <h4>Como usar</h4>
      <p>A sintaxe básica é:</p>
      <pre>
        <code>
          {`useEffect(() => {// código do efeito}, [dependencias]);`}
        </code>
      </pre>

      <h4>Casos comuns</h4>
      <ul>
        <li>
          <strong>Sem dependências:</strong> Executa apenas uma vez, na montagem
          do componente.
        </li>
        <li>
          <strong>Com dependências:</strong> Executa sempre que alguma variável
          mudar.
        </li>
        <li>
          <strong>Sem array:</strong> Executa em toda renderização.
        </li>
      </ul>

      <h4>Função de limpeza</h4>
      <p>
        Se o efeito cria algo que precisa ser removido (como um timer ou event
        listener), você pode retornar uma função de limpeza:
      </p>
      <pre>
        <code>
          {`useEffect(() => {
const intervalo = setInterval(() => {
  console.log("Rodando...");
}, 1000);

return () => clearInterval(intervalo);
}, []);`}
        </code>
      </pre>

      <h4>Resumo</h4>
      <p>
        O <strong>useEffect</strong> ajuda a controlar efeitos colaterais em
        componentes React. O array de dependências define quando o efeito roda,
        e a função de limpeza garante que recursos sejam liberados corretamente.
      </p>
    </article>
  );
};

export default HookUseEffect;
