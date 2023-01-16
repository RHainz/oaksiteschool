
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
              <h2 className="text-xl py-2">
                Hello, somos a <strong className="text-emerald-900">Oak</strong>
                ,
              </h2>
              <p className="py-2">
                Nossas aulas são por videochamada e duram 55 minutos, onde seu
                professor vai focar os exercícios para trabalhar exatamente
                aquele ponto que tem te atrapalhado.
              </p>
              <p className="py-2">
                E para você saber se é tudo isso mesmo é só agendar uma aula
                teste grátis e ver por conta própria. See you soon!!!
              </p>
            </div>
            <div className="py-5 lg:py-5 mb-5 lg:mb-0 xl:mt-10 flex justify-center">
              <a
                href="https://wa.me/5515996996998"
                className="inline-block rounded-lg bg-orange-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-500 hover:bg-orange-400 hover:ring-orange-400 xl:text-lg"
                target="_blank"
                rel="noreferrer"
              >
                Agende uma aula gratuita
              </a>
            </div>
          </div>
        </section>
      </>
    );
}