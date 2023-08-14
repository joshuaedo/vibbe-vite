export const Home = () => (
  <>
    {/* <!-- Enobong starts here --> */}

    {/* <!-- Navbar --> */}
    <header
      id="navbar"
      className="flex items-center justify-center overflow-x-hidden"
    >
      <p className="section-bg-title mt-24">
        <span className="hidden text-center xl:block">GROOVE</span>
        <span className="hidden text-center xl:block">MUSIC</span>
      </p>
      <nav className="-z-1 flex w-screen items-center justify-between rounded-full bg-[#09251E] bg-opacity-30 px-5 py-3 md:px-10 md:py-5 lg:px-20">
        <div className="z-1 flex h-[3rem] w-[5rem] items-center md:h-[4rem] md:w-[9rem] lg:w-[11rem]">
          <img
            src="/images/vibbe-logo.png"
            alt="logo"
            className="object-contain"
          />
        </div>

        {/* <!-- Desktop Nav --> */}
        <div className="hidden items-center space-x-14 lg:flex">
          <span>
            <a href="">Docs</a>
          </span>
          <span>
            <a href="">Explore</a>
          </span>
          <span>
            <a href="">Community</a>
          </span>
          <button className="nav-btn">Connect wallet</button>
        </div>

        {/* <!-- Mobile Nav --> */}
        <div htmlFor="" className="flex lg:hidden">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>

    {/* <!-- Hero --> */}
    <main className="space-y-20">
      <section id="hero" className="items-center justify-evenly xl:flex">
        <div className="flex items-center justify-center">
          <img
            src="/images/download (1) 1.png"
            alt=""
            className="xl:h-[32rem] xl:w-[32rem]"
          />
        </div>
        <div className="mb-24 flex items-center justify-center space-x-5">
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
        <div className="flex items-center justify-center text-center">
          <p className="mx-5 text-2xl font-medium sm:w-[20rem] md:h-[12rem] md:w-[32rem] md:text-3xl lg:text-4xl">
            Welcome to VIBBE, the innovative platform at the intersection of
            music and Blockchain technology.
          </p>
        </div>
      </section>

      {/* <!-- Discover --> */}
      <section id="discover" className="space-y-20">
        <div className="flex items-center justify-center">
          <p className="mx-5 whitespace-normal  text-center text-xl md:text-3xl lg:text-4xl ">
          &quot;&quot;Step into a new era of music creation, powered by <br />
            the blockchain&quot;
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/wave (1).png" alt="" />
          <img
            src="/images/wave (2).png"
            alt=""
            className="hidden md:flex"
          />
          <img
            src="/images/wave(3).png"
            alt=""
            className="hidden lg:flex"
          />
          <img
            src="/images/wave(4).png"
            alt=""
            className="hidden lg:flex"
          />
          <img
            src="/images/wave(4).png"
            alt=""
            className="hidden md:flex"
          />
          <img
            src="/images/wave(3).png"
            alt=""
            className="hidden xl:flex"
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="discover mx-5 text-center text-xl md:text-3xl lg:text-4xl">
            Discover the power of decentralized music, where artists and fans
            come together in a transparent and secure environment. Join us on
            this revolutionary journey to reshape the music industry.
          </p>
        </div>
        <div className="relative">
          <img
            src="/images/second-logo.png"
            alt="second-logo"
            className="section-logo "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1512"
            height="446"
            viewBox="0 0 1512 446"
            fill="none"
            className="relative bottom-[-10.46rem] hidden md:flex"
          >
            <g filter="url(#filter0_d_4_80)">
              <path
                d="M-79.0919 341.05C-45.8302 287.507 39.3532 196.217 113.993 259.401C188.632 322.584 272.68 268.309 305.374 233.274C329.998 186.982 393.327 105.354 449.646 149.182C520.045 203.968 581.719 330.846 654.881 262.316C728.043 193.786 832.891 32.4667 874.937 91.1232C916.983 149.78 1008.92 324.564 1108.53 200.387C1208.13 76.2094 1239.91 -53.6697 1347.82 26.5671C1434.15 90.7566 1545.49 74.1699 1590.36 57.8529"
                stroke="#00594C"
                strokeWidth="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4_80"
                x="-83.9414"
                y="0.806641"
                width="1678.64"
                height="444.771"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="100" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.501961 0 0 0 0 0.32549 0 0 0 0 0.466667 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4_80"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4_80"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1512"
            height="523"
            viewBox="0 0 1512 523"
            fill="none"
            className="relative top-[-19rem] hidden md:flex"
          >
            <g filter="url(#filter0_d_4_82)">
              <path
                d="M-79.4347 360.541C-8.04569 307.193 144.119 209.186 181.667 243.951C228.602 287.406 276.606 448.572 333.657 412.291C390.708 376.01 483.559 191.729 555.722 192.886C627.885 194.044 661.172 401.254 751.202 372.126C841.232 342.999 769.46 168.888 877.043 121.823C984.625 74.7581 978.517 249.787 1051.23 269.649C1123.95 289.51 1147.37 277.895 1162.91 179.286C1178.45 80.6768 1236 -39.8562 1296.54 15.3408C1357.07 70.5378 1328.6 169.618 1413.24 196.269C1497.88 222.92 1535.01 55.313 1535.41 43.6019C1535.73 34.2331 1566.47 22.0925 1581.81 17.1933"
                stroke="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4_82"
                x="-83.7339"
                y="0.947266"
                width="1669.69"
                height="521.12"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="100" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4_82"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4_82"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </section>

      {/* <!-- Airdrop --> */}
      <section id="airdrop" className="mb-40 h-auto overflow-x-hidden">
        <div className="relative h-auto">
          <p className="section-bg-title">AIRDROP</p>
          <h2 className="mb-1 text-center text-4xl font-bold uppercase text-white lg:text-5xl">
            airdrop
          </h2>
          <div className="my-8 flex items-center justify-center">
            <p className="mx-5 w-[77rem] text-center text-xl text-white md:text-3xl lg:text-4xl">
              Join our exclusive airdrop campaign and be part of the music
              revolution! As a token of appreciation for your support, we&apos;re
              giving away free VIBBE tokens to our community members. Don&apos;t miss
              this opportunity to get involved in the future of music and be
              rewarded for your participation.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="seection-btn text-center">Claim Airdrop</button>
          </div>
        </div>
      </section>

      <section id="features" className="h-auto overflow-x-hidden">
        <h2 className="text-center text-4xl font-bold uppercase text-white lg:text-5xl">
          features
        </h2>
        <div className="relative">
          <p className="section-bg-title">FEATURES</p>
          <div className="features-grid my-12 text-2xl md:text-3xl lg:text-4xl">
            <div className="grid grid-cols-1 place-items-center gap-x-32 gap-y-20 px-[2%] md:grid-cols-2 lg:grid-cols-3">
              <div className="gradient-outline features-card__blur flex h-[11rem] w-[15rem] items-center justify-center p-3 md:h-[14rem] md:w-[19rem] md:p-4 lg:h-[17rem] lg:w-[24rem] lg:p-4">
                <p className="text-center">Royalty Smart Contracts</p>
              </div>
              <div className="gradient-outline features-card__blur flex h-[11rem] w-[15rem] items-center justify-center p-3 md:h-[14rem] md:w-[19rem] md:p-4 lg:h-[17rem] lg:w-[24rem] lg:p-4">
                <p className="text-center">Transparent Royalty Tracking</p>
              </div>
              <div className="gradient-outline features-card__blur flex h-[11rem] w-[15rem] items-center justify-center p-3 md:h-[14rem] md:w-[19rem] md:p-4 lg:h-[17rem] lg:w-[24rem] lg:p-4">
                <p className="text-center">Fan Token Governance</p>
              </div>
              <div className="gradient-outline features-card__blur flex h-[11rem] w-[15rem] items-center justify-center p-3 md:h-[14rem] md:w-[19rem] md:p-4 lg:h-[17rem] lg:w-[24rem] lg:p-4">
                <p className="text-center">Decentralized Streaming</p>
              </div>
              <div className="gradient-outline features-card__blur flex h-[11rem] w-[15rem] items-center justify-center p-3 md:h-[14rem] md:w-[19rem] md:p-4 lg:h-[17rem] lg:w-[24rem] lg:p-4">
                <p className="text-center">Music Staking & Rewards</p>
              </div>
              <div className="gradient-outline features-card__blur flex h-[11rem] w-[15rem] items-center justify-center p-3 md:h-[14rem] md:w-[19rem] md:p-4 lg:h-[17rem] lg:w-[24rem] lg:p-4">
                <p className="text-center">NFTs Music Releases</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Enobong stops here --> */}

      {/* <!-- Josh starts here --> */}

      {/* <!-- Genesis --> */}
      <section id="genesis" className=" my-[16rem] font-bold">
        <div className="h-auto w-full text-4xl">
          <div className="flex items-center justify-center">
            <div className="genesis-nft flex h-[19rem] w-[95%] items-center justify-center">
              <p className="">
                GENESIS NFT
                <br />
                COLLECTION
              </p>
            </div>
          </div>
          <div className="flex h-[4.1rem] w-full items-center justify-center">
            <p className="coming-soon">COMING SOON.</p>
          </div>
          <div className="flex items-center justify-center">
            <button className="seection-btn mt-9 text-center">Explore</button>
          </div>
        </div>
      </section>

      {/* <!-- Tokenomics --> */}
      <section id="tokenomics" className="font-bold ">
        <div className="w-full overflow-x-hidden text-center">
          <h2 className="text-4xl uppercase lg:text-5xl">Tokenomics</h2>
          <h3 className="text-3xl">Total Supply</h3>
          <h3 className="text-2xl text-[#c1a7cd]">10 Billion $VIBBE</h3>
          <div className="tokenomics-graph relative grid h-[20rem] place-content-center md:h-[43.125rem]">
            <p className="section-bg-title">TOKENOMICS</p>
            <img
              src="./images/second-logo.png"
              alt="second-logo"
              className="section-logo hidden lg:flex"
            />
            <div className="left-[15rem] top-[10rem] text-lg md:text-2xl lg:absolute lg:text-3xl ">
              27% Token Sales
            </div>
            <div className="bottom-[17rem] left-[5rem] text-lg md:text-2xl lg:absolute lg:text-3xl">
              22% Creator Incentives
            </div>
            <div className="bottom-[1.5rem] left-[12rem] text-lg md:text-2xl lg:absolute lg:text-3xl">
              15% Airdrop and Campaigns
            </div>
            <div className="bottom-[17rem] right-[15rem] text-lg md:text-2xl lg:absolute lg:text-3xl">
              36% Liquidity{" "}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Roadmap --> */}
      <section id="roadmap" className="font-bold">
        <h2 className="text-center text-4xl lg:text-5xl">ROADMAP</h2>
        <div className="h- relative overflow-hidden md:h-[45rem] lg:h-[60rem]">
          <div className="absolute -z-10 flex h-full w-full justify-center md:z-0 lg:z-10 lg:items-end ">
            <div className="gradient-outline h-[85%] w-[95%]"></div>
          </div>
          <p className="section-bg-title">ROADMAP</p>
          <img
            src="./images/roadmap.png"
            alt="roadmap"
            className="section-logo"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1512"
            height="1159"
            viewBox="0 0 1512 1159"
            fill="none"
            className="absolute -left-16 -top-52 -z-10 md:z-0 lg:z-10"
          >
            <g filter="url(#filter0_d_4_81)">
              <path
                d="M1697.48 0.999641C1662.56 36.6208 1585.23 322.674 1515.48 285.998C1445.73 249.323 1331.49 593.676 1297.98 617.499C1271.81 648.102 989.293 691.726 936.483 666.499C870.469 634.965 1072.99 905.967 998.482 952.998C923.974 1000.03 734.689 988.329 696.483 952.998C658.276 917.668 508.872 599.329 405.982 682.999C303.092 766.669 179.348 481.956 77.9825 435.999C-3.10974 399.234 -46.0258 273.508 -90.5176 285.998"
                stroke="#00594C"
                strokeWidth="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4_81"
                x="-108.788"
                y="0.299805"
                width="1824.98"
                height="1157.74"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="155" />
                <feGaussianBlur stdDeviation="9" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.960784 0 0 0 0 0.984314 0 0 0 0 0.94902 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4_81"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4_81"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className="left-[7rem] top-[24rem] z-20 lg:absolute">
            <h3 className="text-3xl md:text-4xl lg:text-5xl">STAGE 1</h3>
            <ul className="text-lg md:text-xl lg:text-2xl">
              <li>Community Development</li>
              <li>Marketing & Campaigns</li>
              <li>Website Launch</li>
              <li>First Airdrop Round</li>
            </ul>
          </div>
          <div className="bottom-[7rem] right-[35rem] z-20 lg:absolute">
            <h3 className="text-3xl md:text-4xl lg:text-5xl">STAGE 2</h3>
            <ul className="text-lg md:text-xl lg:text-2xl">
              <li>Public Sale</li>
              <li>Second Airdrop Round</li>
              <li>Internal dApp testing</li>
            </ul>
          </div>
          <div className="right-[7rem] top-[24rem] z-20 lg:absolute">
            <h3 className="text-3xl md:text-4xl lg:text-5xl">STAGE 3</h3>
            <ul className="text-lg md:text-xl lg:text-2xl">
              <li>Launch of $VIBBE token</li>
              <li>Genesis NFT Mints</li>
              <li>dApp Launch</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Melodies --> */}
      <section id="melodies" className="mt-40 text-center">
        <div className="mb-[10.3rem] flex items-center justify-center">
          <img
            src="./images/melodies-banner.png"
            alt="melodies-banner"
            className="h-[33rem] w-[44rem] object-contain"
          />
        </div>
        <div className="mb-[10.3rem] flex items-center justify-center">
          <p className="max-w-[70rem] text-2xl font-light md:text-3xl lg:text-4xl">
            From melodies to tokens, we&apos;re hitting all the right notes in the
            world of music NFTs.
          </p>
        </div>
      </section>

      {/* <!-- Community --> */}
      <section id="community">
        <div className="relative h-[33.125rem] overflow-hidden">
          <p className="section-bg-title">COMMUNITY</p>
          <div className="community-logo flex items-center justify-center">
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
    </main>

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
    {/* <!-- Joshua stops here --> */}
  </>
);
