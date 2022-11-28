
export function Videos() {

  return (
    <section className="bg-orange-500 flex flex-wrap justify-center items-center flex-col px-9 py-20 gap-20">
      <h2 className="font-Splash text-7xl text-white text-center">
        Amazing Tips
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <iframe
          className="rounded-lg aspect-video"
          src="https://www.youtube.com/embed/C5jmir-xfdM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="rounded-lg max-w-lg aspect-video"
          src="https://www.youtube.com/embed/YuXeQr1J9eo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="rounded-lg max-w-lg aspect-video"
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
        className="font-Hind text-2xl bg-emerald-900 hover:bg-emerald-700 active:bg-emerald-500  text-white h-10 w-70 flex justify-center items-center rounded-full text-center p-7"
      >
        Acesse nosso canal
      </a>
    </section>
  );
}