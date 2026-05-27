const ConventionalCommits = () => {
  return (
    <article>
      <h2 className="sub-title">Conventional Commits</h2>
      <p>
        Para aplicar Conventional Commits e organizar a documentação em um
        repositório GitHub, você pode seguir uma abordagem prática que combina
        padronização de mensagens de commit com boas práticas de documentação.
        Isso ajuda a manter o histórico claro e facilita automações como geração
        de changelogs.
      </p>
      <h4>🚀 Passos para aplicar Conventional Commits</h4>
      <ul className="timeline">
        <li className="tl-item">
          <strong>01</strong> Definir escopo e tipos
          <p>
            Adote os tipos padrão como feat, fix, docs, style, refactor, test e
            chore para categorizar cada mudança.
          </p>
        </li>

        <li className="tl-item">
          <strong>02</strong> Escrever mensagens padronizadas
          <p>
            Use o formato tipo(escopo): descrição curta. Exemplo: feat(auth):
            adicionar login com Google.
          </p>
        </li>
        <li className="tl-item">
          <strong>03</strong> Configurar lint de commits{" "}
          <p>
            Utilize ferramentas como commitlint e husky para validar
            automaticamente o padrão antes de aceitar commits.
          </p>
        </li>
        <li className="tl-item">
          <strong>04</strong> Gerar changelog automático{" "}
          <p>
            Integre semantic-release ou standard-version para criar changelogs
            baseados nos commits.
          </p>
        </li>
        <li className="tl-item">
          <strong>05</strong> Organizar documentação{" "}
          <p>
            Mantenha um README claro, crie pastas docs/ para guias detalhados e
            use commits docs: para alterações na documentação.
          </p>
        </li>
        <li className="tl-item">
          <strong>06</strong> Automatizar publicação{" "}
          <p>
            Configure GitHub Actions para gerar releases e atualizar
            documentação automaticamente a cada merge na main.
          </p>
        </li>
      </ul>
      <h4>📘 Dicas extras</h4>
      <ul>
        <li>
          README.md: deve conter visão geral, instruções de instalação, uso e
          contribuição.
        </li>
        <li>
          docs/: crie guias separados (ex.: docs/instalacao.md,
          docs/arquitetura.md).
        </li>
        <li>Wiki do GitHub: pode ser usada para documentação extensa.</li>
        <li>
          Commits de documentação: sempre prefixe com docs: para diferenciar de
          código.
        </li>
      </ul>
      <p>
        Um exemplo real de configuração para aplicar Conventional Commits com
        validação automática usando commitlint e husky no seu repositório
        GitHub. Isso garante que cada commit siga o padrão e ajuda a manter a
        documentação organizada.
      </p>
      <h4>🔧 Passo a passo</h4>
      <p>1. Instalar dependências</p>
      <p>No seu projeto, rode:</p>
      <pre>
        <code>
          {`npm install --save-dev @commitlint/{config - conventional, cli} husky
      `}
        </code>
      </pre>
      <p>2. Configurar o commitlint</p>
      <p>Crie um arquivo commitlint.config.js na raiz do projeto:</p>
      <pre>
        <code>
          {`  module.exports = {extends: ['@commitlint/config-conventional']};
`}
        </code>
      </pre>
      <p>3. Configurar Husky</p>
      <p>Inicialize o husky:</p>
      <pre>
        <code>
          {`npx husky install
`}
        </code>
      </pre>
      <p>Adicione o hook para validar commits:</p>
      <pre>
        <code>
          {`npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

`}
        </code>
      </pre>
      <p>
        Agora, sempre que você fizer um commit, o husky vai rodar o commitlint e
        validar a mensagem.
      </p>

      <h4>✅ Exemplos de mensagens válidas </h4>
      <ul>
        <li>
          feat: adicionar nova funcionalidade / adicionar cadastro de alunos
        </li>
        <li>fix: corrigir bug crítico / corrigir bug na remoção de aluno</li>
        <li>
          docs: atualizar documentação de instalação / atualizar README com
          instruções
        </li>
        <li>
          refactor: melhorar estrutura do código / simplificar função de
          consulta
        </li>
      </ul>

      <h4>📂 Organização da documentação</h4>
      <ul>
        <li>README.md → visão geral, instalação, uso.</li>
        <li>
          docs/ → documentação detalhada (ex.: docs/arquitetura.md,
          docs/api.md).{" "}
        </li>
        <li>
          CHANGELOG.md → pode ser gerado automaticamente com ferramentas como
          standard-version ou semantic-release.
        </li>
      </ul>
      <h4>
        👉 Assim, você terá commits padronizados e documentação organizada.
      </h4>
    </article>
  );
};

export default ConventionalCommits;
