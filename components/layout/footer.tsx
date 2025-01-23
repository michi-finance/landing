import React from "react";
import {Button} from "@nextui-org/react";
import {RiTwitterXLine} from "react-icons/ri";
import {FaDiscord} from "react-icons/fa";
import {getFooterLinkByLabel} from "../../utils/getFooterLink";

const Footer = () => {
    const discordLink = getFooterLinkByLabel('Discord');
    const docsLink = getFooterLinkByLabel('Docs');
    const twitterLink = getFooterLinkByLabel('Twitter');

    return (
        <footer className="pt-12 md:pt-24 pb-8 footer-gradient shadow-custom-gray text-white mt-24 bg-gradient">
            <div className="linear"/>
            <div className="w-full max-page-width mx-auto flex items-center justify-center relative z-10">
                <div className="flex flex-col md:flex-row gap-8 w-full mx-auto">
                    <div className="flex flex-col gap-8 flex-initial">
                        <img src="/logo.svg" alt="Logo" className="h-12 mr-auto"/>
                        <p className="text-[#A1A1AA] font-normal">The first trustless points trading protocol</p>
                        <div className="flex gap-6">
                            <a href={twitterLink?.url} target="_blank" rel="noopener noreferrer"><RiTwitterXLine
                                size={32}/></a>
                            <a href={discordLink?.url} target="_blank" rel="noopener noreferrer"><FaDiscord size={32}/></a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                        <p>COMPANY</p>
                        <a className="text-sm text-white-80" href={twitterLink?.url} target="_blank"
                           rel="noreferrer noopener">Twitter</a>
                        <a className="text-sm text-white-80"
                           href="https://docs.pichi.finance/additional-information/terms-of-service" target="_blank"
                           rel="noreferrer noopener">Terms and Conditions</a>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                        <p>HELP</p>
                        <a className="text-sm text-white-80" href={docsLink?.url} target="_blank"
                           rel="noreferrer noopener">Docs</a>
                        <a className="text-sm text-white-80" href={discordLink?.url} target="_blank"
                           rel="noreferrer noopener">Discord</a>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                        <p>GO TO APP</p>
                        <Button
                            className="ml-0 px-4 py-3 shadow-michi bg-michi-purple rounded-md w-36 md:w-48 font-bold"
                            onPress={() => window.open("https://app.pichi.finance", "_blank")}
                        >
                            Launch App
                        </Button>
                    </div>
                </div>
            </div>
            <div className="max-page-width mx-auto border-divider-b mt-16 md:mt-24 relative z-10"/>
            <div className="text-center mt-8 text-sm text-subtitle relative z-10 copyright">© Copyright 2024, All Rights
                Reserved by Pichi Finance
            </div>
        </footer>
    );
};

export default Footer;