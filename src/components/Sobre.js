
import knowoak from "../srcimags/knowoak.png"

export function Sobre() {

    return (
      <>
        <section className="flex flex-col justify-center lg:flex-row items-center">
          <img
            id="sobre"
            className="w-full lg:w-6/12 xl:w-2/5"
            src={knowoak}
            alt="Know Oak"
          />
          <div className="lg:w-6/12 xl:w-3/5">
            <div className="xl:text-xl leading-8 px-5 sm:px-10 xl:px-16 py-10 lg:py-0">
              <h2 className="text-xl mb-10 lg:mb-5 text-center lg:text-left">
                Hello, somos a <strong className="text-emerald-900">Oak</strong>
                ,
              </h2>
              <div className="flex justify-between flex-col lg:gap-5">
                <div className="flex items-center flex-col lg:flex-row lg:gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-20 h-20 lg:w-28 lg:h-20 my-2 lg:my-0 text-emerald-900"
                  >
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                  </svg>
                  <p className="text-center lg:text-left py-10 lg:py-0">
                    Uma escola de inglês dedicada a fazer você praticar seu
                    inglês com um professor guiando a cada tortuosa curva do
                    inglês.
                  </p>
                </div>
                <div className="flex items-center flex-col lg:flex-row lg:gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[80px] h-20 lg:w-[150px] lg:h-20 my-2 lg:my-0 text-emerald-900"
                  >
                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                  </svg>
                  <p className="text-center lg:text-left py-10 lg:py-0">
                    Nossas aulas são por videochamada e duram 55 minutos, onde
                    seu professor vai focar os exercícios para trabalhar
                    exatamente aquele ponto que tem te atrapalhado. Totalmente
                    ao vivo.
                  </p>
                </div>
                <div className="flex items-center flex-col lg:flex-row lg:gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-20 h-20 lg:w-[80px] lg:h-20 my-2 lg:my-0 text-emerald-900"
                  >
                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    <path
                      fill-rule="evenodd"
                      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="text-center lg:text-left py-10 lg:py-0">
                    E para você saber se é tudo isso mesmo é só agendar uma aula
                    teste grátis e ver por conta própria.
                  </p>
                </div>
              </div>
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