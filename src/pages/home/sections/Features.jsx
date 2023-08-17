export default function Features() {
  return (
    <section id="features" className="h-auto overflow-x-hidden">
      <h2 className="text-center text-4xl font-bold uppercase text-white lg:text-5xl">
        features
      </h2>
      <div className="relative">
        <p className="section-bg-title">FEATURES</p>
        <div className="features-grid my-12 text-2xl md:text-3xl lg:text-4xl">
          <div className="grid grid-cols-1 place-items-center gap-x-32 gap-y-20 px-[2%] md:grid-cols-2 lg:grid-cols-3">
            <div className="features-card">
              <p className="text-center">Royalty Smart Contracts</p>
            </div>
            <div className="features-card">
              <p className="text-center">Transparent Royalty Tracking</p>
            </div>
            <div className="features-card">
              <p className="text-center">Fan Token Governance</p>
            </div>
            <div className="features-card">
              <p className="text-center">Decentralized Streaming</p>
            </div>
            <div className="features-card">
              <p className="text-center">Music Staking & Rewards</p>
            </div>
            <div className="features-card">
              <p className="text-center">NFTs Music Releases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
