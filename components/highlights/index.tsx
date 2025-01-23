import {Button} from "@nextui-org/react";
import {useEffect, useState} from "react";
import axios from "axios";

const Highlight = () => {
  const [totalMichiWallets, setTotalMichiWallets] = useState();
  const [totalEigenPoints, setTotalEigenPoints] = useState<string>();
  const [totalEtherfiPoints, setTotalEtherfiPoints] = useState<string>();
  const [totalChains, setTotalChains] = useState();

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await axios.get('https://api.michiwallet.com/v1/points/total');
        const pointsData = response.data;
        const eigenLayerPoints = pointsData.find((item: { platform: string; }) => item.platform === "Eigenlayer").points;
        const etherfiPoints = pointsData.find((item: { platform: string; }) => item.platform === "Etherfi").points;
        setTotalEigenPoints(formatPoints(eigenLayerPoints));
        setTotalEtherfiPoints(formatPoints(etherfiPoints));
      } catch (error) {
        console.error("Error fetching points", error);
      }
    };
    const fetchTotalWallets = async () => {
      try {
        const response = await axios.get("https://api.michiwallet.com/v1/nft/total");
        const {totalWallets, chainData} = response.data;
        setTotalMichiWallets(totalWallets);
        setTotalChains(chainData.length);
      } catch (error) {
        console.error("Error fetching total wallets", error);
      }
    };
    fetchPoints();
    fetchTotalWallets();
  }, []);

  const formatPoints = (points: string) => {
    const num = parseInt(points, 10);
    if (num >= 1e12) return (num / 1e12).toFixed(2) + "T";
    if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
    return num.toString();
  };

  return (
    <div className="relative w-full">
      <div className="w-full max-page-width mx-auto pt-28 sm:pt-32">
        <div className="flex flex-col space-y-2 sm:space-y-0">
          <h2 className="text-4xl sm:text-7xl text-center text-title font-medium pb-3 z-20 ">
            What sets
            <br />
            Pichi Wallet apart
          </h2>
        </div>
        <div className="grid grid-rows-[auto, auto, 1fr] gap-6 mt-10 sm:mt-20 max-w-full mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col space-y-2 sm:space-y-3 card justify-center p-6 md:p-8">
              <p className="text-4xl lg:text-6xl font-medium text-white  p-0">{totalEigenPoints || "3.93B"}</p>
              <p className="text-subtitle">Total EigenLayer Points</p>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-3 card justify-center p-6 md:p-8">
              <p className="text-4xl lg:text-6xl font-medium text-white  p-0">{totalEtherfiPoints || "5.15M"}</p>
              <p className="text-subtitle">Total Etherfi Points</p>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-3 card justify-center p-6 md:p-8">
              <p className="text-4xl lg:text-6xl font-medium text-white p-0">{totalChains || 2}</p>
              <p className="text-subtitle">Chains Supported</p>
            </div>
          </div>
          <div className="card grid grid-cols-4">
            <div
                className="col-span-4 lg:col-span-2 flex flex-col space-y-2 sm:space-y-3 text-left justify-center sm:w-full p-6 md:p-8 sm:pl-14 py-14 sm:py-24">
              <h3 className="text-2xl lg:text-4xl font-semibold text-white p-0 pb-1">Create Designated <br />Points Farming Wallets</h3>
              <p style={{marginBottom: "1rem"}}  className="text-subtitle">Retain airdrop claiming eligibility <br />while having the option to sell <br className="sm:hidden" />points pre-TGE</p>
              <Button className="px-4 shadow-michi bg-michi-purple rounded-md max-w-[200px] mx-auto sm:mx-0"
                      onPress={() => open("https://app.pichi.finance", "_blank")}>
                Start Trading with Pichi
              </Button>
            </div>
            <div className="col-span-2 hidden lg:block">
              <img src="/assets/images/highlights/pichi-system.svg" className="ml-auto h-full"/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col card">
              <div className="p-6 lg:p-10">
                <h3 className="text-2xl lg:text-4xl font-semibold text-white  p-0 pb-2">Fully
                  trustless trading</h3>
                <p className="text-subtitle">Selling points is as simple as selling an NFT</p>
              </div>
              <img src="/assets/images/highlights/transactions.svg"/>
            </div>
            <div className="flex flex-col card">
              <div className="p-6 lg:p-10">
                <h3 className="text-2xl lg:text-4xl font-semibold text-white p-0 pb-2">Award
                  Winning Project</h3>
                <p  className="text-subtitle">DeFi, NFT, and Gaming Finalist at ETHDenver 2024</p>
              </div>
              <img src="/assets/images/highlights/acknowledged.png"/>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-28 sm:mt-56">
          <div className="flex flex-col items-start justify-start text-left sm:text-left">
            <div className="bg-gradient">
              <h2 className="text-4xl lg:text-6xl font-medium text-font-gradient p-0 ">Integration <br
                  className="hidden lg:block"/>With Pendle</h2>
            <p className="mt-4 text-white-80 text-lg">Deposit your Pendle YT and earn points quickly</p>
            </div>
          </div>
          <div className="flex items-center justify-center relative mt-16 sm:mt-0 w-full scale-75 sm:scale-80 md:scale-90 lg:scale-100">
            <div className="w-full m-auto relative -translate-y-20">
              <img src="/assets/images/highlights/integration-with-pendle.png" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-8 sm:mt-32">
          <div className="flex items-center justify-center relative w-full scale-75 sm:scale-80 md:scale-90 lg:scale-100 order-2 sm:order-1">
            <div className="w-full m-auto relative">
              <img src="/assets/images/highlights/built-on-erc6551.png" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center text-left sm:text-left order-1 sm:order-2">
            <div className="bg-gradient">
              <h2 className="text-4xl lg:text-6xl font-medium text-font-gradient p-0">Built on <br
                  className="hidden lg:block"/>ERC-6551</h2>
              <p className="text-white-80 text-lg mt-4">Earn points through an ERC-6551
                wallet that <br className="hidden sm:block"/>is owned by an NFT. Trade the NFT to trade <br
                    className="hidden sm:block"/>custody of all points earned</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-divider-top"></div>
    </div>
  );
};

export default Highlight;