import whatslogo from "../srcimags/whatsapp-128.png"

export function Wazzah () {

    return (
      <div>
        <a
          className="bg-whatsapp-green w-14 h-14 lg:w-16 lg:h-16 rounded-full flex justify-center items-center drop-shadow-lg transition ease-in-out hover:-translate-y-0 hover:scale-110 duration-300 fixed bottom-3 right-3 lg:bottom-8 lg:right-8 z-20"
          class="button"
          href="https://wa.me/5515996996998"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-7 lg:w-9"
            src={whatslogo}
            alt="Whatsapp-logo-white"
          />
        </a>
      </div>
    );
}