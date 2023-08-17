import { DiscoverWavesCanvas } from "../../../components/image/DiscoverWavesCanvas";

export default function Discover() {
  return (
    <section id="discover" className="space-y-20">
      <div className="center-with-flex">
        <p className="mx-5 whitespace-normal  text-center text-xl md:text-3xl lg:text-4xl ">
          &quot;Step into a new era of music creation, powered by <br />
          the blockchain&quot;
        </p>
      </div>
      <div className="center-with-flex">
        <img src="/images/wave (1).png" alt="" />
        <img src="/images/wave (2).png" alt="" className="hidden md:flex" />
        <img src="/images/wave(3).png" alt="" className="hidden lg:flex" />
        <img src="/images/wave(4).png" alt="" className="hidden lg:flex" />
        <img src="/images/wave(4).png" alt="" className="hidden md:flex" />
        <img src="/images/wave(3).png" alt="" className="hidden xl:flex" />
      </div>
      <div className="center-with-flex">
        <p className="discover mx-5 text-center text-xl md:text-3xl lg:text-4xl">
          Discover the power of decentralized music, where artists and fans come
          together in a transparent and secure environment. Join us on this
          revolutionary journey to reshape the music industry.
        </p>
      </div>
      <DiscoverWavesCanvas />
    </section>
  );
}
