import { useMemo, useState } from "react";
import { mockTabData } from "./mock";
import HomeDecorTabContent from "../HomeDecorTabContents";
const HomePageAllRoomTab = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const tabData = useMemo(() => {
    return mockTabData[activeTabIdx];
  }, [activeTabIdx]);
  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav
          className="flex space-x-2 items-center justify-center"
          aria-label="Tabs"
          role="tablist"
        >
          {mockTabData.map((item, index) => {
            return (
              <button
                key={item}
                type="button"
                className={`
              ${activeTabIdx === index ? " active" : ""}
              hs-tab-active:font-semibold hs-tab-active:border-neutral-600 hs-tab-active:text-neutral-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-2xl whitespace-nowrap text-gray-500 hover:text-neutral-600 `}
                role="tab"
                onClick={() => {
                  setActiveTabIdx(index);
                }}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-3">
        <HomeDecorTabContent title={tabData} />
      </div>
    </div>
  );
};

export default HomePageAllRoomTab;
