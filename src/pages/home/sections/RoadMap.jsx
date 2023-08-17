import { RoadMapCanvas } from "../../../components/image/RoadMapCanvas";

export default function Roadmap() {
  return (
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
  );
}
