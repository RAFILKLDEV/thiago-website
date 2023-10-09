export function Footer() {
    return <>
        <div className="h-[30vh] flex flex-col items-center justify-center gap-5 bg-zinc-900">
            <div className="flex items-center justify-center gap-28">
                <img width={75} src="/icons/Logo.png"/>
                <div className="flex flex-col gap-1 items-center justify-center text-blue">
                    <div className="text-2x1 text-lightBlue">Localização</div>
                    <div>Rua XXXX N° 000</div>
                    <div>XXXXX, XXXX - XX</div>
                    <div>Tel XX XXXXX-XXXX</div>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center text-blue">
                    <div className="text-2x1 text-lightBlue">Atendimento</div>
                    <div>Horario Marcado</div>
                    <div>Das 8h as 17h</div>
                    <div>Seg - Sexta</div>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center text-blue">
                    <div className="text-2x1 text-lightBlue">RESPONSÁVEL TÉCNICO</div>
                    <div>Thiago DVD</div>
                    <div>Diogo XXXXX</div>
                    <div>Tel XX XXXXX-XXXX</div>
                </div>
            </div>
        </div>
        <div className="bg-zinc-900 p-2 text-blue w-full flex justify-center border-t-2 border-lightBlue">2023 © Thiago DVD. Todos os direitos reservados.
            Desenvolvido por RAFILKLDEV</div>

    </>
}