import { Button } from "@nextui-org/react";

const Banner = () => {
  return (
    <div className="relative w-full">
      <div className="max-page-width mx-auto text-center pt-28 md:pt-32">
        <div className=" about-card relative overflow-hidden"> {/* Ensured overflow is hidden here */}
          <div className="md:px-36 md:py-24 px-16 py-10">
            <div className="flex flex-col space-y-2 md:space-y-8">
              <p className="text-base font-semibold sm:text-xl md:text-4xl text-font-gradient sm:leading-tight pb-2 z-20 text-center text-white-80">
                Use Pichi for all your points <br /> farming activities
              </p>
              <Button className="z-10 mx-auto px-8 py-3 shadow-michi bg-michi-purple rounded-md w-36 md-48 font-bold" onPress={() => open("https://app.pichi.finance", "_blank")}>
                Launch App
              </Button>
            </div>
          </div>
          {/*<img src="/assets/images/banner/banner-1.png"*/}
          {/*  className="h-[100px] w-[100px] md:h-auto md:w-auto absolute left-0 top-0" />*/}
          <img src="/assets/images/misc/bigPeach.svg" alt="Peach"
            className="h-[150px] w-[150px] md:h-auto md:w-auto absolute right-0 bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default Banner;