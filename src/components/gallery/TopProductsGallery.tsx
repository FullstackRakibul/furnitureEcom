import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './style.module.css';
import Link from 'next/link';
import { TbArrowLeftTail, TbArrowRightTail } from 'react-icons/tb';

const sliderImage =
  'https://images.unsplash.com/photo-1565374395542-0ce18882c857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80';

export const TopProductsGallery = () => {
  const id = useId();
  const scrollBarElId = `scrollBar${id}`;

  // const prevNavBtnRef = useRef<HTMLButtonElement>(null);
  // const nextNavBtnRef = useRef<HTMLButtonElement>(null);
  const [prevNavBtnRef, setPrevBtn] = useState<HTMLButtonElement | null>(null);
  const [nextNavBtnRef, setNextBtn] = useState<HTMLButtonElement | null>(null);

  return (
    <div className='relative select-none'>
      <Swiper
        modules={[Navigation, Scrollbar]}
        navigation={{
          disabledClass: styles.sliderBtnDisabled,
          prevEl: prevNavBtnRef,
          nextEl: nextNavBtnRef,
        }}
        scrollbar={{
          draggable: true,
          horizontalClass: 'relative',
          el: '#myScrollbar',
        }}
        spaceBetween={20}
        slidesPerView={2.5}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1150: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className=''>
        {Array(9)
          .fill(0)
          .map((_, index) => {
            return (
              <SwiperSlide
                key={index}
                className='box-border'>
                <div className='border-2'>
                  <div className='relative aspect-portrait'>
                    <Image
                      fill
                      src={sliderImage}
                      alt='furniture'
                    />
                  </div>
                  <div className='p-3'>
                    <p className='font-semibold'>
                      Twangu sofa only for decor
                      {index === 5
                        ? 'akjskdjak dakjdk adjkal dkja dalk dkaj dakld kalj dkla dkljakl dkal dlja kldjkal dkaljkdl '
                        : ''}
                    </p>
                    <p className='text-red-600'>$999.00</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        <SwiperSlide className=''>
          <div className='bg-slate-200 mx-5  my-20 flex flex-center  border-2 rounded-3xl'>
            <Link
              href='#'
              type='button'
              className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'>
              See more
            </Link>
          </div>
        </SwiperSlide>
        <div
          id='myScrollbar'
          className='w-full h-1 mt-1'></div>
      </Swiper>
      <SliderNavigationButtons
        setPrevBtnEl={setPrevBtn}
        setNextBtnEl={setNextBtn}
      />
    </div>
  );
};

interface SliderNavigationButtonsProps {
  setPrevBtnEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
  setNextBtnEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}
const SliderNavigationButtons: React.FC<SliderNavigationButtonsProps> = ({
  setNextBtnEl,
  setPrevBtnEl,
}) => {
  return (
    <>
      <button
        ref={setPrevBtnEl}
        className={`
        ${styles.sliderNavBtn} ${styles.sliderNavBtnPrev}`}>
        <TbArrowLeftTail />
      </button>
      <button
        ref={setNextBtnEl}
        className={`
        ${styles.sliderNavBtn}
         ${styles.sliderNavBtnNext}
         `}>
        <TbArrowRightTail />
      </button>
    </>
  );
};

export default TopProductsGallery;
