
import knowoak from "../srcimags/knowoak.png"

export function Sobre() {

    return (
      <>
        <img id="sobre" className="w-full" src={knowoak} alt="Know Oak" />
        <section className="leading-8 flex flex-wrap justify-center items-center flex-col px-5 py-20 gap-10">
          <p>
            A educação do século XXI traz consigo uma mistura de novos desafios
            e ferramentas promissoras. A{" "}
            <strong className="text-emerald-900">Oak</strong> oferece um
            programa flexível, com treinamento de inglês embasado em resultados
            cientificamente comprovados.
          </p>
          <p>
            No centro da nossa missão, está o nosso compromisso em fornecer um
            ambiente de aprendizagem personalizado, respeitoso e recompensador.
          </p>
          <p>
            Essa abordagem única, junto com nosso corpo docente de alta
            qualidade, torna a <strong className="text-emerald-900">Oak</strong>{" "}
            uma das melhores escolas.
          </p>
          <p>
            Explore o nosso programa de cursos e entre em contato com a nossa
            equipe para marcar uma aula experimental gratuita.
          </p>
          <div className="mt-8 flex gap-x-4 sm:justify-center">
            <a
              href="#"
              className="inline-block rounded-lg bg-orange-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-500 hover:bg-orange-400 hover:ring-orange-400"
            >
              Agende uma aula gratuita
            </a>
          </div>
        </section>
      </>
    );
}