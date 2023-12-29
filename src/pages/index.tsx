import Image from "next/image";
import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import BaseHeader from "@/components/headers/BaseHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { useRef, useEffect, useId } from "react";
import { TopProductsGallery } from "@/components/gallery/TopProductsGallery";
import BaseFooter from "@/components/footers/BaseFooter";
import HomeDecorTabContent from "@/components/tabs/HomeDecorTabContents";
import HomePageAllRoomTab from "@/components/tabs/HomePageAllRoomTab";
import HomePageTwoCards from "@/components/cards/HomePageTwoCards";
import RootLayout from "@/layouts/RootLayout";

const inter = Inter({ subsets: ["latin"] });
const heroImage =
  " https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

import { NextPageWithLayout } from "@/pages/_app";

const HomePage: NextPageWithLayout = () => {
  return (
    <main>
      {/* hero section */}
      <section className="relative h-96 md:h-128 lg:h-200 bg-green-500">
        <div className=" absolute w-full h-full top-0 left-0">
          <Image
            className="object-cover"
            priority
            fill
            src={heroImage}
            alt=""
          />
        </div>
        <div className="items-center justify-center absolute w-full h-full top-0 left-0 flex">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Pick your furniture today
          </h1>
        </div>
      </section>

      {/* Top Deals */}
      <section className="py-20">
        <h2 className="py-4 text-2xl font-bold text-center">Top Deals</h2>
        <div className="container mx-auto">
          <TopProductsGallery />
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20">
        <div className="container mx-auto">
          <HomePageAllRoomTab />
        </div>
      </section>

      {/* recommendation */}
      <section className="py-20">
        <h2 className="py-4 text-2xl font-bold text-center">
          Things you might like
        </h2>
        <div className="container mx-auto">
          <TopProductsGallery />
        </div>
      </section>

      {/* Home page two cards */}
      <section className="py-20">
        <HomePageTwoCards />
      </section>

      {/* level up your room section */}
      <section className="py-20">
        <div className="container mx-auto">
          <HomePageAllRoomTab />
        </div>
      </section>
    </main>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

{
  /* <CookieConsent /> */
}
