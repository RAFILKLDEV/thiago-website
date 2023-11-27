export function Footer() {
  return (
    <>
      <div className="h-[30vh] flex flex-col items-center justify-center gap-5 bg-[#3A363B]">
        <div className="flex items-center justify-center gap-28">
          <video width={75} src="/icons/thiagologo.mp4" className="rotate-90 w-[150px]"/>
          <div className="flex flex-col gap-1 items-center justify-center text-white">
            <div className="text-2x1 text-lightwhite">Localização</div>
            <div>Rua XXXX N° 000</div>
            <div>XXXXX, XXXX - XX</div>
            <div>Tel XX XXXXX-XXXX</div>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center text-white">
            <div className="text-2x1 text-white">Atendimento</div>
            <div>Horario Marcado</div>
            <div>Das 8h as 17h</div>
            <div>Seg - Sexta</div>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center text-white">
            <div className="text-2x1 text-white">RESPONSÁVEL TÉCNICO</div>
            <div>Thiago DVD</div>
            <div>Diogo XXXXX</div>
            <div>Tel XX XXXXX-XXXX</div>
          </div>
        </div>
      </div>
      <div className="bg-[#3A363B] p-2 text-white w-full flex justify-center border-t-2 border-[#010001]">
        2023 © Thiago DVD. Todos os direitos reservados. Desenvolvido por
        RAFILKLDEV
      </div>
    </>
  );
}
