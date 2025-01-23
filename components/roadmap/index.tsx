import { Tabs, Tab } from "@nextui-org/tabs";

const Roadmap = () => {
  const MockPlannedItems = [
    "Revenue - Sharing Launch.",
    "Multi-Chain Support",
    "Decentralized Governance",
    "Revenue - Sharing Launch.",
    "Multi-Chain Support",
    "Decentralized Governance",
    "Revenue - Sharing Launch.",
    "Multi-Chain Support",
    "Decentralized Governance",
  ];

  const MockInProgressItems = [
    "Mobile App Development",
    "Partnership with XYZ Corporation",
    "Smart Contract Audit",
  ];

  const MockCompletedItems = [
    "Token Launch",
    "Listing on Major Exchanges",
    "Community Building",
  ];

  return (
    <div className="relative w-full">
      <div className="w-full max-page-width mx-auto text-center pt-28 sm:pt-32">
        <div className="flex flex-col space-y-2 sm:space-y-5">
          <p className="text-3xl font-medium sm:text-6xl text-font-gradient t">
            Public roadmap to show <br className="hidden sm:block" />what we’re working on next
          </p>
        </div>
        <div className="card mt-16 py-4">
          <Tabs
            aria-label="Options"
            variant="underlined"
            classNames={{
              base: "w-full text-subtitle",
              tabList: "flex overflow-x-auto no-scrollbar gap-6 md:gap-10 md:justify-center w-full relative rounded-none p-2 md:p-4 border-divider-b pb-0 md:pb-0",
              cursor: "w-full bg-subtitle-full",
              tab: "min-w-max md:max-w-fit whitespace-nowrap px-2 md:px-4 h-12",
              tabContent: "group-data-[selected=true]:text-subtitle-full",
            }}
          >
            <Tab
              key="q1"
              title={
                <div className="flex items-center space-x-2">
                  <span className="text-subtitle-full text-xl mb-6">Q1 Roadmap</span>
                </div>
              }
            />
            <Tab
              key="q2"
              title={
                <div className="flex items-center space-x-2">
                  <span className="text-subtitle-full text-xl mb-6">Q2 Roadmap</span>
                </div>
              }
            />
            <Tab
              key="q3"
              title={
                <div className="flex items-center space-x-2">
                  <span className="text-subtitle-full text-xl mb-6">Q3 Roadmap</span>
                </div>
              }
            />
            <Tab
              key="q4"
              title={
                <div className="flex items-center space-x-2">
                  <span className="text-subtitle-full text-xl mb-6">Q4 Roadmap</span>
                </div>
              }
            />
          </Tabs>

          <div className="flex overflow-x-auto no-scrollbar md:flex-nowrap flex-nowrap">
            <div className="flex-none w-1/3 p-4 min-w-80">
              <div className="card p-8">
                <div className="flex items-center">
                  <img src="/assets/images/roadmap/planned.svg" />
                  <span className="text-subtitle-full text-lg md:text:xl font-bold ml-2">Planned</span>
                </div>
                <div className="overflow-y-auto h-[400px] mt-6 no-scrollbar">
                  <ul>
                    {MockPlannedItems.map((item, index) => (
                      <li key={index} className="mb-4">
                        <ItemCard content={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-none w-1/3 p-4 min-w-80">
              <div className="card p-8 min-w-60">
                <div className="flex items-center">
                  <img src="/assets/images/roadmap/in-progress.svg" />
                  <span className="text-subtitle-full text-lg md:text:xl font-bold ml-2">In Progress</span>
                </div>
                <div className="overflow-y-auto h-[400px] mt-6 no-scrollbar">
                  <ul>
                    {MockInProgressItems.map((item, index) => (
                      <li key={index} className="mb-4">
                        <ItemCard content={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-none w-1/3 p-4 min-w-80">
              <div className="card p-8 min-w-60">
                <div className="flex items-center">
                  <img src="/assets/images/roadmap/completed.svg" />
                  <span className="text-subtitle-full text-lg md:text:xl font-bold ml-2">Completed</span>
                </div>
                <div className="overflow-y-auto h-[400px] mt-6 no-scrollbar">
                  <ul>
                    {MockCompletedItems.map((item, index) => (
                      <li key={index} className="mb-4">
                        <ItemCard content={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-divider-bottom"></div>
    </div>
  );
};

const ItemCard = ({ content }: { content: string; }) => {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-5 text-center sm:text-left justify-center px-4 py-3 about-card rounded-lg">
      <p className="text-subtitle text-xs md:text-sm sm:leading-none">{content}</p>
    </div>
  );
};

export default Roadmap;