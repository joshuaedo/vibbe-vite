export default function Tokenomics() {
  return (
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
  );
}
