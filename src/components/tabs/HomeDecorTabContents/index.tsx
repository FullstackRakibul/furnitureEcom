import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import roomImage from "@/public/assets/room/roomImage.jpg";
import furnitureImage from "@/public/assets/room/furniture.png";
import Link from "next/link";
interface Props {
  title: string;
}
const HomeDecorTabContent: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h2 className="py-4 text-2xl font-bold">For the {title}</h2>
      <div className={`${styles.contentGrid} gap-5`}>
        <div className="flex flex-col gap-5">
          <div>
            <Image
              className="w-full h-full object-cover"
              src={roomImage}
              alt="this is a demo image"
            />
          </div>
          <div
            className="bg-orange-200
          text-right py-2"
          >
            Your living room {">"}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {Array(6)
            .fill(0)
            .map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  href="#"
                  className="flex flex-col justify-between bg-orange-200"
                >
                  <div className="mt-auto mb-auto">
                    <Image
                      src={furnitureImage}
                      alt="this is a sofa "
                      className="scale-95 hover:scale-100 hover:drop-shadow-md transition"
                    />
                  </div>
                  <p>Sofa</p>
                </Link>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDecorTabContent;
