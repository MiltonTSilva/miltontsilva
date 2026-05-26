export function About() {
  return (
    <div>
      <section className="section-about" id="about">
        <h2 className="section-title">Sobre Mim</h2>
        <p>
          Olá! Sou Milton Tomé da Silva, um desenvolvedor de software apaixonado
          por criar soluções inovadoras e eficientes. Com experiência em
          diversas tecnologias, estou sempre buscando aprender e crescer
          profissionalmente. Com mais de 20 anos de experiência em
          desenvolvimento de sistemas e integração de soluções corporativas.
          Especialista em .NET, C#, SQL Server e ReactJS. Atuei em projetos de
          grande porte para empresas como Avanade, Motorola e Tivit, entregando
          soluções que aumentaram eficiência operacional e reduziram custos.
          Certificado pela Microsoft em Azure Fundamentals e Data Fundamentals,
          com atualização constante em tecnologias de front-end e back-end.
          Reconhecido pela capacidade de transformar requisitos complexos em
          sistemas robustos, escaláveis e bem documentados.
        </p>

        <h2 className="section-title">Currículo</h2>
        <h3 className="section-curriculum-title">Experiência Profissional</h3>
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-period">( 2023 - presente )</div>
            <div className="tl-role">Consultor</div>
            <div className="tl-company">Tomé Serviços de Informática</div>
            <div className="tl-desc">
              <p>Desenvolvimento de sites e sistemas personalizados.</p>
              <p>
                Atendimento remoto em todo o Brasil. Projetos sob demanda ou
                contrato.
              </p>
              <p>Mentoria de equipes de desenvolvimento e revisão de código.</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-period">( 2021 - 2023 )</div>
            <div className="tl-role">Analista de Sistemas Sênior</div>
            <div className="tl-company">Avanade</div>
            <div className="tl-desc">
              <p>
                Desenvolvimento de OCR usando Angular, C#, SQL Server, Azure e
                Regex para validação de faturas da Telefônica. A solução
                automatizou o processo de extração de dados, reduzindo o tempo
                de processamento em 80% e aumentando a precisão em 95%.
              </p>
              <p>Mentoria de equipes de desenvolvimento e revisão de código.</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-period">( 2020 - 2021 )</div>
            <div className="tl-role">Programador</div>
            <div className="tl-company">XL Consultoria</div>
            <div className="tl-desc">
              <p>
                Desenvolvimento de aplicativo integrando logística, comercial,
                supply chain, marketing, financeiro e RH.
              </p>
              <p>
                Tecnologias utilizadas: ASP.NET Core 5, C#, MySQL, JavaScript,
                CSS, Bootstrap 4, JWT, Entity Framework, Git.{" "}
              </p>
              <p>
                Colaboração com equipes multidisciplinares para entrega de
                projetos.
              </p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-period">( 2018 - 2019 )</div>
            <div className="tl-role">Consultor</div>
            <div className="tl-company">Tomé Serviços de Informática</div>
            <div className="tl-desc">
              <p>
                Desenvolvimento e manutenção de sistemas de administração de
                granjas e controle de produção, utilizando HTML, CSS, Bootstrap,
                C#, MVC e SQL Server. A solução melhorou a eficiência
                operacional em 30% e reduziu erros de produção em 25%.
              </p>
              <p>
                Hospedado no Azure com Entity Framework e gráficos via API do
                Google
              </p>
              <p>
                Participação em todas as fases do ciclo de desenvolvimento de
                software.
              </p>
            </div>
          </div>
        </div>
        <h3 className="section-curriculum-title">Educação</h3>
        <div>
          <p>
            <strong>Gestão Comercial:</strong> Universidade Uninove (2016 -
            2018)
          </p>
        </div>
        <h3 className="section-curriculum-title">Certificações</h3>
        <div>
          <ul className="timeline">
            <li className="tl-item">
              <strong>Microsoft Certified: Azure Fundamentals:</strong>
              <p className="tl-desc">
                Emitida em dezembro de 2022 | Código da credencial: I532-1304
              </p>
            </li>
            <li className="tl-item">
              <strong>Microsoft Certified: Azure Data Fundamentals:</strong>
              <p className="tl-desc">
                Emitida em abril de 2022 | Código da credencial: I247-4091
              </p>
            </li>
          </ul>
        </div>
        <h3 className="section-curriculum-title">Habilidades Técnicas</h3>

        <div className="skills-grid">
          <div className="skill-group">
            <div className="skill-group-title">linguagens</div>
            <div className="skill-list">
              <span className="skill-pill">HTML / CSS</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">TypeScript</span>
              <span className="skill-pill">ReactJS</span>
              <span className="skill-pill">C#</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">Banco de dados</div>
            <div className="skill-list">
              <span className="skill-pill">SQL Server</span>
              <span className="skill-pill">MySQL</span>
              <span className="skill-pill">PostgreSQL</span>
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">SQLite</span>
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-group-title">Frameworks e Plataformas</div>
            <div className="skill-list">
              <span className="skill-pill">.NET Framework</span>
              <span className="skill-pill">.NET Core</span>
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-group-title">APIs e Testes</div>
            <div className="skill-list">
              <span className="skill-pill">Postman</span>
              <span className="skill-pill">Insomnia</span>
              <span className="skill-pill">Swagger</span>
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-group-title">IDE e Editores</div>
            <div className="skill-list">
              <span className="skill-pill">Visual Studio</span>
              <span className="skill-pill">Visual Studio Code</span>
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-group-title">Controle de Versão</div>
            <div className="skill-list">
              <span className="skill-pill">Git</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
