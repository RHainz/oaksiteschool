
export function Videos() {

  return (
    <section id="videos" className="bg-emerald-900 flex flex-wrap justify-center items-center flex-col px-5 py-20 gap-10">
      <h2 className="font-bold text-6xl text-white text-center">
        Amazing Tips
      </h2>
      <p className="text-white text-center">
        Dicas Incríveis em nosso canal no YouTube
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <iframe
          className="rounded-lg w-full aspect-[16/9] sm:w-[400px] sm:h-[225px]"
          src="https://www.youtube.com/embed/C5jmir-xfdM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="rounded-lg w-full aspect-[16/9] sm:w-[400px] sm:h-[225px]"
          src="https://www.youtube.com/embed/YuXeQr1J9eo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="rounded-lg w-full aspect-[16/9] sm:w-[400px] sm:h-[225px]"
          src="https://www.youtube.com/embed/F8yHYXBLPr8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <a
        href="https://www.youtube.com/@oakschool3677"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-2xl bg-orange-500 hover:bg-orange-400 active:bg-orange-600  text-white w-56 sm:w-80 flex justify-center items-center rounded-lg text-center p-4"
      >
        Acesse para mais
      </a>
    </section>
  );
}