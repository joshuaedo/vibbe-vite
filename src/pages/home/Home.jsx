import {
  DiscoverWavesCanvas,
  RoadMapCanvas,
} from "../../components/image/Image";

export const Home = () => (
  <>
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
          <img src="/images/wave (2).png" alt="" className="hidden md:flex" />
          <img src="/images/wave(3).png" alt="" className="hidden lg:flex" />
          <img src="/images/wave(4).png" alt="" className="hidden lg:flex" />
          <img src="/images/wave(4).png" alt="" className="hidden md:flex" />
          <img src="/images/wave(3).png" alt="" className="hidden xl:flex" />
        </div>
        <div className="flex items-center justify-center">
          <p className="discover mx-5 text-center text-xl md:text-3xl lg:text-4xl">
            Discover the power of decentralized music, where artists and fans
            come together in a transparent and secure environment. Join us on
            this revolutionary journey to reshape the music industry.
          </p>
        </div>
        <DiscoverWavesCanvas />
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
              revolution! As a token of appreciation for your support,
              we&apos;re giving away free VIBBE tokens to our community members.
              Don&apos;t miss this opportunity to get involved in the future of
              music and be rewarded for your participation.
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
          <RoadMapCanvas />
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
            From melodies to tokens, we&apos;re hitting all the right notes in
            the world of music NFTs.
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
  </>
);
