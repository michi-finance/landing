import { MotionValue, motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React from "react";

export default function MasonryResponsiveLayout({ components, gutter, breakpoints, style }: any) {
  const containerClasses = `p-2 mt-2 md:mt-16 w-full min-h-[100px] h-full box-border max-h-[450px] md:max-h-[900px] overflow-y-auto overflow-hidden no-scrollbar ${style}`;

  return (
    <motion.div className={containerClasses}>
      <ResponsiveMasonry
        columnsCountBreakPoints={breakpoints}
      >
        <Masonry gutter={gutter}>
          {components.map((component: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | MotionValue<number> | MotionValue<string> | null | undefined, index: React.Key | null | undefined) => (
            <motion.div key={index} className="transition-transform duration-100 ease-in-out w-full flex flex-col justify-center items-center md:justify-start md:item-start">
              {component}
            </motion.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </motion.div>
  );
}

MasonryResponsiveLayout.defaultProps = {
  breakpoints: {
    390: 1,
    425: 2,
    768: 3,
    1200: 4,
    1600: 6,
  },
  style: '',
};