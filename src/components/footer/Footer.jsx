export default function Footer() {
    return (
        <footer
      id="footer"
      className="m-5 justify-between font-medium md:m-10 md:flex"
    >
      <div className="text-xs md:text-lg lg:text-xl">
        <p>© 2021 VIBBE. All Rights Reserved.</p>
      </div>
      <div className="mt-5 flex space-x-4 md:mr-5 md:mt-0">
        <div className="flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-lg bg-[#513DA5] md:h-[3.2rem] md:w-[3.2rem]">
          <img
            src="./images/telegram-logo.png"
            alt=""
            className="h-[0.65rem] w-[0.7rem] md:h-[1.25rem] md:w-[1.35rem]"
          />
        </div>
        <div className="flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-lg bg-[#513DA5] md:h-[3.2rem] md:w-[3.2rem]">
          <img
            src="./images/twitter-logo.png"
            alt=""
            className="h-[0.85rem] w-[0.85rem] md:h-[1.65rem] md:w-[1.65rem]"
          />
        </div>
        <div className="flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-lg bg-[#513DA5] md:h-[3.2rem] md:w-[3.2rem]">
          <img
            src="./images/instagram-logo.png"
            alt=""
            className="h-[0.85rem] w-[0.85rem] md:h-[1.65rem] md:w-[1.65rem]"
          />
        </div>
      </div>
    </footer>
    )
}