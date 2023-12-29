import cardImg from "@/public/assets/room/cards.webp";
import Image from "next/image";
const HomePageTwoCards = () => {
  const twoArr = [
    {
      heading: "Blazing fast delivery",
      subHeading: "Hundreds of styles",
    },
    {
      heading: "For family, friends & yourself",
      subHeading: "Enjoy the luxury",
    },
  ];
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          {twoArr.map((item, index) => {
            return (
              <a key={index} className="group relative block" href="#">
                <div className="flex relative flex-center">
                  <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                    <Image
                      className="w-full h-full absolute top-0 left-0 object-cover"
                      src={cardImg}
                      alt="Image Description"
                    />
                  </div>

                  <div className=" absolute z-10">
                    <div className="flex flex-col h-full p-4 sm:p-6">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                        {item.heading}
                      </h3>
                      <p className="mt-2 text-white/[.8]">{item.subHeading}</p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePageTwoCards;
