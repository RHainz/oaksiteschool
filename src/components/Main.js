import bgImg from "../srcimags/man-2562325_1280.jpg"
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const navigation = [
  { name: "Sobre", href: "#sobre" },
  { name: "Dicas", href: "#videos" },
  { name: "Contato", href: "https://wa.me/5515996996998" },
];

export function Main () {

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <>
        <div className="isolate h-screen bg-white">
          <div
            className="absolute h-screen bg-no-repeat bg-cover bg-center bg-fixed opacity-40 inset-x-0 -z-10"
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>
          <div className="px-6 py-6 lg:px-8 lg:bg-opacity-90 lg:bg-white">
            <div>
              <nav
                className="flex h-9 items-center justify-between"
                aria-label="Global"
              >
                <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                  <span className="font-bold text-emerald-900 text-3xl">
                    Oak
                  </span>
                </div>
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-emerald-900"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-semibold text-emerald-900 hover:text-emerald-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end"></div>
              </nav>
              <Dialog
                as="div"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
              >
                <Dialog.Panel
                  focus="true"
                  className={`fixed inset-0 z-10 bg-white px-6 py-6 lg:hidden transform ${
                    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                  } transition duration-500 ease-in-out`}
                >
                  <div className="flex h-9 items-center justify-between">
                    <div className="flex">
                      <span className="font-bold text-emerald-900 text-3xl">
                        Oak
                      </span>
                    </div>
                    <div className="flex">
                      <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-emerald-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-emerald-900 hover:bg-gray-400/10"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Dialog>
            </div>
          </div>
          <main>
            <div className="px-6 lg:px-8 flex items-center justify-center">
              <div className="mx-auto max-w-3xl pt-20 pb-20 md:pt-14 md:pb-14 flex items-center justify-center">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    Bem-vindo à{" "}
                    <span className="text-emerald-900">Oak School</span>
                  </h1>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <iframe
                      className="rounded-lg w-full aspect-[16/9]"
                      src="https://drive.google.com/file/d/1ASE29XyFxAqN2bqt-S-PN-ByCbX0JCX1/preview"
                      title="Google drive player"
                    ></iframe>
                  </div>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a
                      href="https://wa.me/5515996996998"
                      className="inline-block rounded-lg px-5 py-4 text-base font-semibold leading-7 text-white shadow-sm bg-orange-500 hover:bg-orange-400 active:bg-orange-600 xl:text-lg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Quero aprender inglês
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );

}