import { Home } from "./home";

export function Projects() {
  return (
    <Home>
      <section className="section-projects" id="projects">
        <h2 className="section-title">Projetos</h2>
        <ul>
          <li>
            <strong>Sistema ERP:</strong> Um aplicativo de gestão empresarial
            desenvolvido em ReactJS, com módulos de compras, vendas, estoque e
            finanças.
          </li>
          <li>
            <strong>Portal Professora Lethicya:</strong> Um portal web para
            professores, desenvolvido em ReactJS, com recursos de gerenciamento
            de aulas, avaliações e comunicação com alunos.
          </li>
          <li>
            <strong>Site Links de Empregos:</strong> Um site com links de vagas
            de empregos, desenvolvido em html,css e Javascript.
          </li>
          <li>
            <strong>Contas a Pagar e Receber:</strong> Uma aplicação feita em C#
            para gerenciamento financeiro pessoal, permitindo controle de
            despesas e receitas.
          </li>
          <li>
            <strong>Sistemas de Administração de Granjas:</strong> Aplicações
            desenvolvidas em utilizando HTML, CSS, Bootstrap, C#, MVC e SQL Server para gerenciamento de operações
            agrícolas, incluindo controle de produção e inventário.
          </li>
        </ul>
      </section>
    </Home>
  );
}
