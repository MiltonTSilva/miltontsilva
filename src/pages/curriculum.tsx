import { Home } from "./home";

export function Curriculum() {
  return (
    <Home>
      <section className="section-curriculum" id="curriculum">
        <h2 className="section-title">Currículo</h2>

        <h3 className="section-curriculum-title">Experiência Profissional</h3>
        <ul>
          <li>
            <strong>Analista de Sistemas Sênior - Avanade</strong>( 2021 - 2023)
            <ul>
              <li>
                Desenvolvimento de OCR usando Angular, C#, SQL Server, Azure e
                Regex para validação de faturas da Telefônica. A solução
                automatizou o processo de extração de dados, reduzindo o tempo
                de processamento em 80% e aumentando a precisão em 95%.
              </li>
              <li>
                Mentoria de equipes de desenvolvimento e revisão de código.
              </li>
            </ul>
          </li>
          <li>
            <strong>Programador - XL Consultoria</strong>
            (2020 - 2021)
            <ul>
              <li>
                Desenvolvimento de aplicativo integrando logística, comercial,
                supply chain, marketing, financeiro e RH.
              </li>
              <li>
                Tecnologias utilizadas: ASP.NET Core 5, C#, MySQL, JavaScript,
                CSS, Bootstrap 4, JWT, Entity Framework, Git.{" "}
              </li>
              <li>
                Colaboração com equipes multidisciplinares para entrega de
                projetos.
              </li>
            </ul>
          </li>
          <li>
            <strong>Consultor - Tomé Serviços de Informática Ltda</strong>
            (2000 - 2014)
            <ul>
              <li>
                Desenvolvimento e manutenção de sistemas de administração de
                granjas e controle de produção, utilizando HTML, CSS, Bootstrap,
                C#, MVC e SQL Server. A solução melhorou a eficiência
                operacional em 30% e reduziu erros de produção em 25%.
              </li>
              <li>
                Hospedado no Azure com Entity Framework e gráficos via API do
                Google
              </li>
              <li>
                Participação em todas as fases do ciclo de desenvolvimento de
                software.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="section-curriculum-title">Educação</h3>
        <ul>
          <li>
            <strong>Gestão Comercial</strong>, Universidade Uninove (2016 -
            2018)
          </li>
        </ul>

        <h3 className="section-curriculum-title">Certificações</h3>
        <ul>
          <li>
            Microsoft Certified: Azure Fundamentals - Emitida em dezembro de
            2022 | Código da credencial: I532-1304
          </li>
          <li>
            Microsoft Certified: Azure Data Fundamentals - Emitida em abril de
            2022 | Código da credencial: I247-4091
          </li>
        </ul>

        <h3 className="section-curriculum-title">Habilidades Técnicas</h3>
        <ul className="skills-list">
          <li>.NET Framework</li>
          <li>.NET Core</li>
          <li>C#</li>
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>SQL Server</li>
          <li>MySql</li>
          <li>Git</li>
          <li>Postman</li>
          <li>Insomnia</li>
          <li>VS Code</li>
          <li>Visual Studio</li>
        </ul>
      </section>
    </Home>
  );
}
