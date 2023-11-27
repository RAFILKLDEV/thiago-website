import { Footer } from "./components/footer";
import { GoogleMaps } from "./components/googleMaps";
import { Menu2 } from "./components/menu copy";

function App() {
  return (
    <>
      <Menu2 />

      <main className="flex items-center justify-center gap-20 w-full h-[600px] bg-[#3A363B]">
        <div className="flex flex-col gap-5 items-center justify-center w-1/3 h-auto">
          <div className="text-4xl text-white w-full">
            Solicite seu Agendamento
          </div>
          <div className="text-white">
            Seu bem-estar depende da sua saúde bucal. Nosso trabalho é garantir
            que seu sorriso esteja sempre bonito e saudável. Agende uma consulta
            de forma rápida, fácil e sem complicação. Basta preencher o
            formulário e clicar em solicitar agendamento. Pronto! Agora é só
            aguardar o retorno de um de nossa equipe para a confirmação da
            consulta.
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-[#010001] p-8 w-1/4">
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
      <div className="flex flex-col gap-4 bg-[#3A363B] w-full items-center justify-center text-4xl text-white">
        <div>Tratamentos</div>
        <div className="flex gap-7 text-lg pt-10">
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> CLAREAMENTO DENTAL
            </div>
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> PRÓTESE PROTOCOLO
              (DENTADURA FIXA)
            </div>
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> IMPLANTES DENTÁRIOS
            </div>
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> PRÓTESES
              CONVENCIONAIS
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> COROAS DENTAL
            </div>
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> HARMONIZAÇÃO
              OROFACIAL (BOTOX E PREENCHIMENTO)
            </div>
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> LENTES DE CONTATO
              DENTAL
            </div>
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> FACETAS EM
              RESINA/PORCELANA
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> EXTRAÇÕES
              (EXODONTIA)
            </div>
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> RESTAURAÇÕES
            </div>
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> PROFILAXIA (LIMPEZA
              E RASPAGEM)
            </div>
            <div className="flex gap-2 itens-center">
              <img src="/icons/dente.png" className="w-6" /> PLACAS DE BRUXISMO
              (RÍGIDA E SEMI-RÍGIDA)
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-auto relative">
        <img
          className="h-[600px]"
          width="100%"
          src="https://www.boaconsulta.com/blog/wp-content/uploads/2020/08/quando-procurar-um-dentista-e-como-escolher-um1280x720.jpg"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col gap-10 justify-center items-center">
          <div className="text-4xl">Consulta Dentária</div>
          <div className="flex gap-10 text-lg"></div>
        </div>
      </div> */}
      <div className="h-screen bg-[#3A363B] flex flex-col items-center gap-10">
        <div className="text-4xl text-white mt-28">
          Dr. Thiago Dalla Valle Dias Lima
        </div>
        <div className="flex gap-10">
          <img
            src="thiago.png"
            className="bg-zinc-900 w-[500px] flex justify-center"
          />
          <div className="w-[700px] flex-wrap text-white flex flex-col gap-2">
            <div>
              Mais de 7 anos de experiência em odontologia e conhecimento na
              área da implantodontia permitem que o Dr. Thiago Dalla Valle
              ofereça um atendimento diferenciado, diagnosticando o real
              problema de seus pacientes e dando opções de tratamento e
              indicando o mais adequado para trazer de volta sorrisos bonitos e
              com saúde.
            </div>
            <div>
              • Graduado em Odontologia pela Universidade de Ribeirão Preto
              (UNAERP).
            </div>
            <div>
              • Especializado em Implantodontia pela ESTUDARE de RibeirãoPreto.
            </div>
            <div>• Curso de Harmonização OroFacial pela Claire Gauch.</div>
            <div>
              • Larga experiência em Odontologia como Clínico Geral e Implantes
              Dentários.
            </div>
            <div>
              • Participante do Projeto Voluntários do Sertão SP/BA. (Educação
              Infantil e Prevenção)
            </div>
            <div>
              ▪︎ Participante do Grupo EducaRiso. (Saúde Bucal em escolas)
            </div>
            <div>▪︎ Coordenador Turma do Bem (ONG e Projeto Social)</div>
          </div>
        </div>
      </div>
      <div className="h-[500px] bg-[#3A363B] flex items-center justify-center gap-16">
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
