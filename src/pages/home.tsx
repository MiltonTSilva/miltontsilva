
export function Home() {
  return (
    <div>
      <section className="section-home" id="home">
        <h2 className="section-title">Bem-vindo</h2>
        <div className="home-content">
          <p>
            Olá! Sou <strong>Milton Tomé da Silva</strong>.
          </p>
          <p>
            Desenvolvedor de software com mais de 20 anos de experiência,
            especializado em .NET, C#, SQL Server e ReactJS. Explore meu portal
            para conhecer minha trajetória e projetos.
          </p>
        </div>
      </section>

      <section className="section-background-service">
        <h2 className="section-title">
          Processamentos em Segundo Plano com BackgroundService no .NET
        </h2>
        <article className="performance-article">
          <h6>🎯 O problema </h6>
          <p>
            É comum em APIs tentar resolver todo o ciclo de vida de uma operação
            dentro de uma única requisição HTTP. Imagine o seguinte cenário: o
            usuário realiza uma ação e, antes de devolver um HTTP 200 (OK), a
            API precisa:
          </p>
          <ul>
            <li>Salvar dados no banco de dados</li>
            <li>Disparar um e-mail</li>
            <li>Gerar um arquivo</li>
            <li>Notificar um sistema externo</li>
          </ul>
          <p>
            Esse acúmulo de tarefas aumenta o tempo de resposta, prejudica a
            experiência do usuário e sobrecarrega o servidor sem necessidade.
          </p>
          <h5>Por que essa estratégia eleva o nível do projeto?</h5>
          <p>
            Ao tirarmos o peso do processo síncrono a aplicação ganha
            escalabilidade, podendo suportar muito mais processos simultâneos
            devido a liberação de Threads HTTP muito mais rápido. Temos também a
            resiliência reforçada, pois se o serviço em segundo plano falhar,
            não trará problemas na requisição principal do cliente.
          </p>
          <h6>⚡ A solução</h6>
          <p>
            Nem tudo precisa acontecer em tempo real. Processamentos pesados ou
            secundários devem ser delegados para execução em segundo plano. O
            ecossistema .NET oferece uma forma nativa e elegante de resolver
            isso: o BackgroundService.
          </p>
          Exemplo Prático Suponha que sua API precise enviar e-mails após uma
          operação. Em vez de fazer isso dentro da requisição, você pode delegar
          para um serviço em segundo plano:
          <pre>
            <code>
              {`public class EmailBackgroundService : BackgroundService
{
    private readonly IEmailQueue _emailQueue;
    private readonly IEmailSender _emailSender;

    public EmailBackgroundService(IEmailQueue emailQueue, IEmailSender emailSender)
    {
        _emailQueue = emailQueue;
        _emailSender = emailSender;
    }

      protected override async Task ExecuteAsync(CancellationToken stoppingToken)
      {
          while (!stoppingToken.IsCancellationRequested)
          {
              var email = await _emailQueue.DequeueAsync(stoppingToken);
              if (email != null)
              {
                  await _emailSender.SendAsync(email);
              }
          }
      }
  }`}
            </code>
          </pre>
          <h6>No exemplo acima:</h6>
          <ul>
            <li>
              O BackgroundService é a classe que implementa o serviço em segundo
              plano.
            </li>
            <li>
              IEmailQueue é uma interface que representa uma fila de e-mails a
              serem enviados.
            </li>
            <li>
              IEmailSender é uma interface responsável por enviar o e-mail.
            </li>
            <li>
              O método ExecuteAsync fica em loop, aguardando novos e-mails na
              fila e os processando conforme chegam.
            </li>
            <li>A API apenas enfileira o e-mail.</li>
            <li>O BackgroundService cuida de enviar em segundo plano.</li>
            <li>
              O usuário recebe a resposta rapidamente, sem esperar o envio do
              e-mail.
            </li>
          </ul>
          <h6>Benefícios</h6>
          <ul>
            <li>✅ Respostas mais rápidas para o usuário</li>
            <li>✅ Menor sobrecarga no servidor</li>
            <li>✅ Melhor escalabilidade da aplicação</li>
            <li>✅ Separação clara entre tarefas críticas e secundárias</li>
          </ul>
          <p>
            👉 Esse padrão pode ser aplicado não só para envio de e-mails, mas
            também para:
          </p>
          <ul>
            <li>Processamento de arquivos</li>
            <li>Integrações com sistemas externos</li>
            <li>Geração de relatórios</li>
            <li>Qualquer tarefa que não precise ser síncrona</li>
          </ul>
        </article>

        <article>
          <h2>Guia Prático: Usando BackgroundService no .NET</h2>
          <h6>1. Criando a Fila de Mensagens</h6>
          <p>
            A ideia é que a API não processe diretamente tarefas pesadas, mas
            apenas enfileire pedidos. Para isso, podemos usar uma fila simples
            baseada em Channel:
          </p>
          <pre>
            <code>
              {`public interface IEmailQueue
{
    ValueTask EnqueueAsync(EmailMessage message);
    ValueTask<EmailMessage?> DequeueAsync(CancellationToken cancellationToken);
}

public class EmailQueue : IEmailQueue
{
    private readonly Channel<EmailMessage> _queue;

    public EmailQueue()
    {
        _queue = Channel.CreateUnbounded<EmailMessage>();
    }

    public async ValueTask EnqueueAsync(EmailMessage message)
    {
        await _queue.Writer.WriteAsync(message);
    }

    public async ValueTask<EmailMessage?> DequeueAsync(CancellationToken cancellationToken)
    {
        return await _queue.Reader.ReadAsync(cancellationToken);
    }
}
`}
            </code>
          </pre>
          <h5>2. Criando o Serviço de Envio de E-mails</h5>
          <p>
            Esse serviço será executado em segundo plano, consumindo a fila:
          </p>
          <pre>
            <code>
              {`public class EmailBackgroundService : BackgroundService
{
    private readonly IEmailQueue _emailQueue;
    private readonly IEmailSender _emailSender;

    public EmailBackgroundService(IEmailQueue emailQueue, IEmailSender emailSender)
    {
        _emailQueue = emailQueue;
        _emailSender = emailSender;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            var email = await _emailQueue.DequeueAsync(stoppingToken);
            if (email != null)
            {
                await _emailSender.SendAsync(email);
            }
        }
    }
}
`}
            </code>
          </pre>
          <h6>3. Registrando no Program.cs </h6>
          <p>
            Agora precisamos registrar tanto a fila quanto o serviço no
            container de injeção de dependência:
          </p>
          <pre>
            {" "}
            <code>
              {`var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IEmailQueue, EmailQueue>();
builder.Services.AddSingleton<IEmailSender, EmailSender>(); // sua implementação
builder.Services.AddHostedService<EmailBackgroundService>();

var app = builder.Build();
app.Run();

`}
            </code>
          </pre>
          <h6>4. Usando na API </h6>
          <p>
            Na sua controller, em vez de enviar o e-mail diretamente, você
            apenas enfileira:
          </p>
          <pre>
            <code>
              {`[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IEmailQueue _emailQueue;

    public UsersController(IEmailQueue emailQueue)
    {
        _emailQueue = emailQueue;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(UserDto user)
    {
        // salvar no banco...
        
        // enfileirar envio de e-mail
        await _emailQueue.EnqueueAsync(new EmailMessage
        {
            To = user.Email,
            Subject = "Bem-vindo!",
            Body = "Obrigado por se registrar."
        });

        return Ok("Usuário registrado com sucesso!");
    }
}
`}
            </code>
          </pre>
          <strong>Benefícios</strong>
          <ul>
            <li>🚀 Resposta rápida para o usuário</li>
            <li>🛡️ Menor carga no servidor</li>
            <li>📈 Escalabilidade e robustez</li>
            <li>🔄 Separação clara entre tarefas críticas e secundárias</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
