import type { NextPage } from "next";
import Hero from '../components/hero'
import Highlights from "../components/highlights";
import About from "../components/about";
import Audit from "../components/Audit";
import Roadmap from "../components/roadmap";
import Testimonials from "../components/testimonials";
import Banner from "../components/banner";
import SEO from "../components/seo";
import Investors from "../components/Investors";

const App: NextPage = () => {
  return (
    <>
      <SEO
        title="Pichi Finance"
        description="Buy and sell points from pre-token projects"
        url="https://pichi.finance"
        logo="/logo.png"
        seo="/seo.png"
        keywords={[
          'defi', 'web3', 'nft',
          'erc', 'erc6551',
          'pichi', 'pichiprotocol', 'pichiwallet',
          'eigenlayer', 'renzo', 'points', 'restaking'
        ]}
        author="Pichi Finance"
        twitterUsername="pichifinance"
      />
      <Hero />
      <Highlights />
      <About />
      <Investors />
      <Audit />
      {/*<Roadmap />*/}
      {/*<Testimonials />*/}
      <Banner />
    </>
  );
};

export default App;
