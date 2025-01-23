import {Image} from "@nextui-org/image";

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient">
      <div className="max-page-width mx-auto text-center pt-10 sm:pt-20 bg-hero-pattern">
        <div className="flex flex-col space-y-2 sm:space-y-0 ">
          <h1 className="text-4xl sm:text-7xl text-white font-medium pb-3 z-10 leading-none">
            The first trustless points<br className="hidden:block"/>
            trading protocol
          </h1>
          <p className="text-base sm:text-xl pt-4 sm:pt-7 leading-none z-10 text-subtitle-full">
            Buy and sell points from pre-token projects
          </p>
        </div>
        <div className="relative mx-auto w-full pt-6 sm:pt-12 flex justify-center max-h-[350px] md:max-h-[550px] overflow-hidden">
          <Image src='/assets/images/hero/banner.png' className="w-full mx-auto" />
        </div>
      </div>
      <div className="shadow-divider-bottom"></div>
    </div>

  );
};

export default Hero;