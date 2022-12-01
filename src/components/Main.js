import bgImg from "../srcimags/man-2562325_1280.jpg"
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const navigation = [
  { name: "Sobre", href: "#sobre" },
  { name: "Dicas", href: "#videos" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export function Main () {

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <>
        <div className="isolate h-screen bg-white">
          <div
            className="absolute h-screen bg-no-repeat bg-cover bg-center bg-fixed opacity-10 inset-x-0 -z-10"
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>
          <div className="px-6 pt-6 lg:px-8">
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
                      className="font-semibold text-emerald-900 hover:text-emerald-400"
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
                  className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
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
            <div className="h-screen relative px-6 lg:px-8">
              <div className="h-screen mx-auto max-w-3xl pt-20 pb-10 sm:pt-20 sm:pb-20">
                <div>
                  <div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                      Bem-vindo à{" "}
                      <span className="text-emerald-900">Oak School</span>
                    </h1>
                    <div className="mt-8 flex gap-x-4 sm:justify-center">
                      <iframe
                        className="rounded-lg w-full aspect-[16/9] sm:w-[500px] sm:h-[281.25px] lg:w-[600px] lg:h-[337.5px]"
                        src="https://www.youtube.com/embed/F8yHYXBLPr8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="mt-8 flex gap-x-4 sm:justify-center">
                      <a
                        href="#"
                        className="inline-block rounded-lg bg-orange-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-500 hover:bg-orange-400 hover:ring-orange-400"
                      >
                        Quero aprender inglês
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );

}