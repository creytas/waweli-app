import { Icon } from "@iconify/react";
import Image from "next/image";
import cardStyles from "./Card.module.css";

export default function Cars({
  src,
  carName,
  description,
  buyingPrice,
  rentalPrice,
}) {
  return (
    <div className={cardStyles.carCard}>
      <div className={cardStyles.carCardImage}>
        <Image src={src} width={165} height={158} alt="waweli cars" objectFit />
      </div>
      <div className={cardStyles.carCardDetail}>
        <h2 className={cardStyles.carCardDetailTitle}>{carName}</h2>
        <p className={cardStyles.carCardDetailDescription}>{description}</p>
        <span className={cardStyles.carCardDetailPrice}>
          <Icon
            icon="tabler:steering-wheel"
            className={cardStyles.carCardDetailIcon}
          />
          $<span className={cardStyles.price}>{rentalPrice}</span>
        </span>
        <span
          className={cardStyles.carCardDetailPrice}
          style={{ top: `135px` }}
        >
          <Icon
            icon="clarity:key-solid"
            className={cardStyles.carCardDetailIcon}
          />
          $<span className={cardStyles.price}>{buyingPrice}</span>
        </span>
      </div>
    </div>
  );
}
