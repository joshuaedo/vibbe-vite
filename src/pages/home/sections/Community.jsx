export default function Community() {
  return (
    <section id="community">
      <div className="relative h-[33.125rem] overflow-hidden">
        <p className="section-bg-title">COMMUNITY</p>
        <div className="community-logo center-with-flex">
          <img
            src="./images/second-logo.png"
            alt="fourth-logo"
            className="mt-10 hidden h-[20.2rem] w-[20.2rem] lg:flex"
          />
          <img
            src="./images/third-logo.png"
            alt="third-logo"
            className="h-[4.2rem] w-[4.2rem] md:h-[5.6rem] md:w-[5.6rem] lg:-ml-20 lg:h-[7.2rem] lg:w-[7.2rem]"
          />
        </div>
        <button
          id="scrollArrow"
          className="fixed bottom-5 right-5 z-50 hidden cursor-pointer bg-black bg-opacity-50 p-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="52"
            viewBox="0 0 24 52"
            fill="none"
          >
            <path
              d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 52V2H10.5V52H13.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
