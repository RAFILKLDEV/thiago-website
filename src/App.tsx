import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { GoogleMaps } from "./components/googleMaps";

function App() {
  return (
    <>
      <Menu />
      <main className="flex items-center justify-center w-full h-screen bg-zinc-950">
        <video
          className="h-screen"
          src="/video/video.mp4"
          loop
          autoPlay
          muted
        />
      </main>
      <main className="flex items-center justify-center gap-20 w-full h-screen bg-zinc-950">
        <div className="flex flex-col gap-5 items-center justify-center w-1/3 h-auto">
          <div className="text-4xl text-blue w-full">
            Solicite seu Agendamento
          </div>
          <div className="text-gray-700">
            Seu bem-estar depende da sua saúde bucal. Nosso trabalho é garantir
            que seu sorriso esteja sempre bonito e saudável. Agende uma consulta
            de forma rápida, fácil e sem complicação. Basta preencher o
            formulário e clicar em solicitar agendamento. Pronto! Agora é só
            aguardar o retorno de um de nossa equipe para a confirmação da
            consulta.
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-zinc-900 p-8 w-1/4">
          <div>
            <div className="text-white">Nome</div>
            <input className="w-full p-1" />
          </div>
          <div>
            <div className="text-white">Telefone</div>
            <input className="w-full p-1" />
          </div>
          <div>
            <div className="text-white">Email</div>
            <input className="w-full p-1" />
          </div>
          <div>
            <div className="text-white">Motivo da Consulta</div>
            <input className="w-full p-1" />
          </div>
        </div>
      </main>
      <div className="h-auto relative">
        <img
          className="h-[600px]"
          width="100%"
          src="https://www.boaconsulta.com/blog/wp-content/uploads/2020/08/quando-procurar-um-dentista-e-como-escolher-um1280x720.jpg"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col gap-10 justify-center items-center">
          <div className="text-4xl">Consulta Dentária</div>
          <div className="flex gap-10 text-lg">
            <div className="w-80">
              Diariamente são introduzidos novos produtos neste mercado muito
              competitivo. Infelizmente, fabricantes têm feito marketing direto
              para o público, como uma maneira de pressionar o profissional ao
              consumo de determinada técnica e/ou equipamento. Existem muitas
              panacéias que não têm trabalhos científicos sérios que justifiquem
              sua inclusão na nossa atividade profissional diária.
            </div>
            <div className="w-80">
              Diariamente são introduzidos novos produtos neste mercado muito
              competitivo. Infelizmente, fabricantes têm feito marketing direto
              para o público, como uma maneira de pressionar o profissional ao
              consumo de determinada técnica e/ou equipamento. Existem muitas
              panacéias que não têm trabalhos científicos sérios que justifiquem
              sua inclusão na nossa atividade profissional diária.
            </div>
            <div className="w-80">
              Diariamente são introduzidos novos produtos neste mercado muito
              competitivo. Infelizmente, fabricantes têm feito marketing direto
              para o público, como uma maneira de pressionar o profissional ao
              consumo de determinada técnica e/ou equipamento. Existem muitas
              panacéias que não têm trabalhos científicos sérios que justifiquem
              sua inclusão na nossa atividade profissional diária.
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-zinc-950 flex flex-col items-center gap-10">
        <div className="text-4xl mt-28">Title</div>
        <div className="flex gap-10">
          <div className="bg-zinc-900 w-[500px] flex justify-center">
            VIDEO
          </div>
          <div className="bg-zinc-900 flex flex-col gap-2">
            <div>
              * Topico
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
            <div>
              * Topico
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
            <div>
              * Topico
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
            <div>
              * Topico
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
            <div>
              * Topico
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
          </div>
        </div>
      </div>
      <div className="h-[500px] bg-zinc-950 flex items-center justify-center gap-16">
        <GoogleMaps />
        <div className="w-[400px] h-[400px] bg-white flex flex-col justify-center items-center gap-6 border-t-[20px] border-blue">
          <div className="w-80 text-center text-3xl font-bold">
            Marque sua Consulta Hoje
          </div>
          <div className="text-gray-800">
            Solicite seu atendimento pelo WhatsApp
          </div>
          <button className="bg-green-600 p-5 w-80 rounded-xl text-2xl font-bold text-white flex gap-2 justify-center">
            <i className="fa-brands fa-whatsapp text-2xl "></i> Chat WhatsApp
          </button>
          <div className="text-center text-3xl font-bold">(16) 9 9111-4004</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
