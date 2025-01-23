const Audit = () => {
  return (
    <div className="relative w-full">
      <div className="w-full max-page-width mx-auto text-center pt-12">
        <div className="flex flex-col space-y-2 sm:space-y-5">
          <p className="text-3xl font-medium sm:text-6xl text-font-gradient sm:leading-tight">
            Audits
          </p>
        </div>
        <div className="grid grid-cols-2 mt-10 sm:mt-20">
          <div className="col-span-2 sm:col-span-1 flex justify-center items-center">
            <a href="https://github.com/michiprotocol/michi-contracts/blob/main/audits/Pichi%20Finance%20Marketplace%20-%20June%2028%2C%202024.pdf"
               target="_blank" rel="noopener noreferrer">
              <img src="/assets/logos/dedaub.svg" alt="Audits"
                   className="mx-auto grayscale w-72 mb-12 sm:mb-0"/>
          </a>
        </div>
          <div className="col-span-2 sm:col-span-1">
            <a href="https://sourcehat.com/audits/MichiProtocol/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/logos/sourcehat.svg" alt="Audits"
                   className="w-full max-w-xs mx-auto grayscale "/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Audit;