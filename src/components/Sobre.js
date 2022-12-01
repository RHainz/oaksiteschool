
import knowoak from "../srcimags/knowoak.png"

export function Sobre() {

    return (
      <>
        <section className="flex flex-wrap justify-center lg:flex-row items-center">
          <img
            id="sobre"
            className="w-full lg:w-6/12 xl:w-2/5"
            src={knowoak}
            alt="Know Oak"
          />
          <div className="lg:w-6/12 xl:w-3/5">
            <div className="xl:text-xl leading-8 px-5 sm:px-10 xl:px-16 py-10 lg:py-0">
              <p className="py-2">
                A educação do século XXI traz consigo uma mistura de novos
                desafios e ferramentas promissoras. A{" "}
                <strong className="text-emerald-900">Oak</strong> oferece um
                programa flexível, com treinamento de inglês embasado em
                resultados cientificamente comprovados.
              </p>
              <p className="py-2">
                No centro da nossa missão, está o nosso compromisso em fornecer
                um ambiente de aprendizagem personalizado, respeitoso e
                recompensador.
              </p>
              <p className="py-2">
                Essa abordagem única, junto com nosso corpo docente de alta
                qualidade, torna a{" "}
                <strong className="text-emerald-900">Oak</strong> uma das
                melhores escolas.
              </p>
              <p className="py-2">
                Explore o nosso programa de cursos e entre em contato com a
                nossa equipe para marcar uma aula experimental gratuita.
              </p>
            </div>
            <div className="py-5 lg:py-5 mb-5 lg:mb-0 xl:mt-10 flex justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-orange-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-500 hover:bg-orange-400 hover:ring-orange-400 xl:text-lg"
              >
                Agende uma aula gratuita
              </a>
            </div>
          </div>
        </section>
      </>
    );
}