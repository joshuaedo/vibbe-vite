import Community from "./sections/Community";
import Airdrop from "./sections/Community";
import Discover from "./sections/Discover";
import Genesis from "./sections/Genesis";
import Header from "./sections/Header";
import Melodies from "./sections/Melodies";
import Roadmap from "./sections/RoadMap";
import Tokenomics from "./sections/Tokenomics";

export const Home = () => (
  <main className="space-y-20">
    <Header />
    <Discover />
    <Airdrop />
    <Genesis />
    <Tokenomics />
    <Roadmap />
    <Melodies />
    <Community />
  </main>
);
