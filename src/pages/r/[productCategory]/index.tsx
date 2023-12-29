import RootLayout from "@/layouts/RootLayout";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import bedImg from "@/public/assets/room/bed2.png";
import { StaticImageData } from "next/image";

import roomImage from "@/public/assets/room/room11.jpg";

const ProductCategoryPage: NextPageWithLayout = () => {
  const categories = Array(10)
    .fill(0)
    .map((_) => ({
      imgSrc: bedImg,
      title: "this is title",
    }));
  return (
    <main>
      <section>
        <div className="container mx-auto grid">
          <h2 className="text-2xl my-10">Shop by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category, idx) => (
              <ShopByCategoryCard key={idx} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Room details */}
      <section>
        <div className="container mx-auto">
          <div className="relative py-[20%] h-0">
            <Image src={roomImage} alt="this is a room image" fill />
          </div>
        </div>
      </section>
    </main>
  );
};

interface ShopByCategoryProps {
  imgSrc: string | StaticImageData;
  title: string;
}
const ShopByCategoryCard: React.FC<ShopByCategoryProps> = ({
  imgSrc,
  title,
}) => {
  return (
    <div className="flex flex-col w-3/4 ">
      <div className="flex-1 flex flex-center">
        <div className="w-52 aspect-square rounded-full bg-orange-200 shadow-md flex flex-center">
          <Image
            className="w-32 h-auto"
            src={imgSrc}
            alt="this is product image"
          ></Image>
        </div>
      </div>
      <div className="py-3 text-center text-xl font-bold">Product Name</div>
    </div>
  );
};

export default ProductCategoryPage;

ProductCategoryPage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
