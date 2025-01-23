const About = () => {
  return (
    <div className="relative w-full">
      <div className="max-page-width mx-auto py-28 sm:py-32 bg-gradient">
        <div className="flex flex-col space-y-2 sm:space-y-0">
          <h2 className="text-4xl sm:text-7xl text-center text-font-gradient font-medium pb-3 z-20 leading-none">
            How it works
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 justify-center w-full mt-12">
              <div className="space-y-4 sm:space-y-5 justify-center px-8 py-10 md:px-10 md:py-12 about-card rounded-xl">
                <p className="text-3xl font-medium sm:text-5xl text-white sm:leading-none p-0">01</p>
              <p className="text-subtitle text-lg">Create a Pichi Wallet by minting an NFT.</p>
              </div>
              <div className="space-y-4 sm:space-y-5 justify-center px-8 py-10 md:px-10 md:py-12 about-card rounded-xl">
                <p className="text-3xl font-medium sm:text-5xl text-white sm:leading-none p-0">02</p>
            <p className="text-subtitle text-lg">Deposit your point-earning tokens.</p>
              </div>
            <div className="space-y-4 sm:space-y-5 justify-center px-8 py-10 md:px-10 md:py-12 about-card rounded-xl">
                <p className="text-3xl font-medium sm:text-5xl text-white sm:leading-none p-0">03</p>
            <p className="text-subtitle text-lg font-medium">Sell your wallet by selling the NFT.</p>
              </div>
        </div>
      </div>
    </div>
  )
};

export default About;