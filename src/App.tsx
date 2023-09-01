import { Footer } from "./components/footer"
import { Menu } from "./components/menu"

function App() {

  return (
    <>
      <Menu />
      <main className='flex items-center justify-center w-full h-screen bg-blue-600'>
        <video className="h-screen" src="/video/video.mp4" loop autoPlay muted />
      </main>
      <main className='flex items-center justify-center gap-20 w-full h-screen bg-lightBlue'>
        <div className="flex flex-col gap-5 items-center justify-center w-1/3 h-auto">
          <div className="text-4xl text-blue w-full">Solicite seu Agendamento</div>
          <div className="text-gray-700">
            Seu bem-estar depende da sua saúde bucal. Nosso trabalho é garantir que seu sorriso esteja sempre bonito e saudável.
            Agende uma consulta de forma rápida, fácil e sem complicação.
            Basta preencher o formulário e clicar em solicitar agendamento.
            Pronto! Agora é só aguardar o retorno de um de nossa equipe para a confirmação da consulta.</div>
        </div>
        <div className="flex flex-col gap-1 bg-darkBlue p-8 w-1/4">
          <div>
            <div className="text-white">Nome</div>
            <input className="w-full" />
          </div>
          <div>
            <div className="text-white">Telefone</div>
            <input className="w-full" />
          </div>
          <div>
            <div className="text-white">Email</div>
            <input className="w-full" />
          </div>
          <div>
            <div className="text-white">Motivo da Consulta</div>
            <input className="w-full h-20" />
          </div>
        </div>
      </main>
      <main className='flex items-center justify-center w-full h-screen bg-yellow-600'>
        kek
      </main>
      <Footer />
    </>
  )
}

export default App
