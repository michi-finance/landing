import React from "react";

const data = [
    {
        "name": "acquire-fi",
        "logo": "/assets/logos/investors/acquire-fi.png"
    },
    {
        "name": "Contango",
        "logo": "/assets/logos/investors/Contango.png"
    },
    {
        "name": "GBV",
        "logo": "/assets/logos/investors/GBV.png"
    },
    {
        "name": "dwf",
        "logo": "/assets/logos/investors/dwf.png"
    },
    {
        "name": "notch-ventures",
        "logo": "/assets/logos/investors/notch-ventures.png"
    },
    {
        "name": "one-block",
        "logo": "/assets/logos/investors/one-block.png"
    },
    {
        "name": "mantle",
        "logo": "/assets/logos/investors/mantle.png"
    },
    {
        "name": "signum-capital",
        "logo": "/assets/logos/investors/signum-capital.png"
    },
    {
        "name": "Wise3-Ventures-1",
        "logo": "/assets/logos/investors/Wise3-Ventures-1.png"
    },
    {
        "name": "Ryze-Labs",
        "logo": "/assets/logos/investors/Ryze-Labs.png"
    },
    {
        "name": "uob",
        "logo": "/assets/logos/investors/uob.png"
    },
];

const angels = [
    {
        "name": "0xNairolf",
        "logo": "/assets/logos/investors/0xNairolf.png"
    },
    {
        "name": "0xNoFacex0",
        "logo": "/assets/logos/investors/0xNoFacex0.png"
    },
    {
        "name": "2lambro",
        "logo": "/assets/logos/investors/2lambro.png"
    },
    {
        "name": "ahboyash",
        "logo": "/assets/logos/investors/ahboyash.png"
    },

    {
        "name": "CryptonautsShow",
        "logo": "/assets/logos/investors/CryptonautsShow.png"
    },
    {
        "name": "dcfgod",
        "logo": "/assets/logos/investors/dcfgod.png"
    },
    {
        "name": "MacnBTC",
        "logo": "/assets/logos/investors/MacnBTC.png"
    },
    {
        "name": "MarioNawfal",
        "logo": "/assets/logos/investors/MarioNawfal.png"
    },
    {
        "name": "MaybeMaxPower",
        "logo": "/assets/logos/investors/MaybeMaxPower.png"
    },
    {
        "name": "NekozTek",
        "logo": "/assets/logos/investors/NekozTek.png"
    },

    {
        "name": "phtevenstrong",
        "logo": "/assets/logos/investors/phtevenstrong.png"
    },
    {
        "name": "pyroNFT",
        "logo": "/assets/logos/investors/pyroNFT.png"
    },

    {
        "name": "TheCryptoDog",
        "logo": "/assets/logos/investors/TheCryptoDog.png"
    },
    {
        "name": "ZeroXSaitama",
        "logo": "/assets/logos/investors/ZeroXSaitama.png"
    }
];

const Investors = () => {
    const higherTexts = Array.from({length: 6}, (_, i) => i + 1);
    const lowerTexts = Array.from({length: 5}, (_, i) => i + 7);
    const higherCircles = Array.from({length: 7}, (_, i) => i + 1);
    const lowerCircles = Array.from({length: 7}, (_, i) => i + 8);

    return (
        <div className="w-full max-page-width mx-auto pt-20 text-center mb-24">
            <div className="flex flex-col space-y-2 sm:space-y-5">
                <p className="text-4xl sm:text-7xl font-medium sm:text-6xl text-font-gradient sm:leading-tight">
                    Investors
                </p>
                <p className="text-lg text-white-80 !mb-12">Supported by some of the best in the industry</p>
                <div className="flex items-center justify-center mb-12 flex-wrap">
                    {higherTexts.map((id) => (
                        <img key={id} src={`/assets/logos/investors/logo0${id}.png`} alt={`Investor ${id}`}
                             className="h-16 mr-5 ml-5"/>
                    ))}
                </div>
                <div className="flex items-center justify-center mb-12 flex-wrap">
                    {lowerTexts.map((id) => (
                        <img key={id} src={`/assets/logos/investors/logo${id < 10 ? `0${id}` : id}.png`}
                             alt={`Investor ${id}`}
                             className="h-16 mr-5 ml-5"/>
                    ))}
                </div>
                <div className="flex items-center justify-center mb-12 flex-wrap">
                    {higherCircles.map((id) => (
                        <img key={id} src={`/assets/logos/investors/circle0${id}.png`}
                             alt={`Investor ${id}`}
                             className="h-24 mr-5 ml-5"/>
                    ))}
                </div>
                <div className="flex items-center justify-center mb-12 flex-wrap">
                    {lowerCircles.map((id) => (
                        <img key={id} src={`/assets/logos/investors/circle${id < 10 ? `0${id}` : id}.png`}
                             alt={`Investor ${id}`}
                             className="h-24 mr-3 ml-3"/>
                    ))}
                </div>
            </div>
        </div>
    )
        ;
};

export default Investors;
