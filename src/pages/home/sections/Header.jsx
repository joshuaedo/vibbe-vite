export default function Header() {
  return (
    <header id="hero" className="items-center justify-evenly xl:flex">
      <p className="section-bg-title">
        <span className="hidden text-center xl:block">GROOVE</span>
        <span className="hidden text-center xl:block">MUSIC</span>
      </p>
      <div className="center-with-flex">
        <img
          src="/images/download (1) 1.png"
          alt=""
          className="xl:h-[32rem] xl:w-[32rem]"
        />
      </div>
      <div className="center-with-flex mb-24 space-x-5">
        <img
          src="./images/back-button.png"
          alt="backward-button"
          className="h-[3.5rem] md:h-[4.5rem] lg:h-[5.5rem]"
        />
        <img
          src="./images/forward-button.png"
          alt="forward-button"
          className="h-[3.5rem] md:h-[4.5rem] lg:h-[5.5rem]"
        />
      </div>
      <div className="center-with-flex text-center">
        <p className="mx-5 text-2xl font-medium sm:w-[20rem] md:h-[12rem] md:w-[32rem] md:text-3xl lg:text-4xl">
          Welcome to VIBBE, the innovative platform at the intersection of music
          and Blockchain technology.
        </p>
      </div>
    </header>
  );
}
