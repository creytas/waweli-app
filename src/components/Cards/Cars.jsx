import { Icon } from "@iconify/react";
import Image from "next/image";

import suzuki from "../../../public/images/suzuki_swift.png";

export default function Cars({
  src,
  carName,
  description,
  buyingPrice,
  rentalPrice,
}) {
  return (
    <div
      style={{
        width: `97%`,
        height: `185px`,
        background: `#1c1c1c`,
        margin: `1.5% auto`,
        display: `flex`,
        cursor: `pointer`,
      }}
    >
      <div style={{ width: `45%`, border: `0px solid #fff` }}>
        <Image
          src={suzuki}
          width={165}
          height={158}
          alt="waweli cars"
          objectFit
        />
      </div>
      <div
        style={{
          position: `relative`,
          border: `0px solid blue`,
          width: `55%`,
          display: `flex`,
          flexDirection: `column`,
          color: `#fff`,
        }}
      >
        <h2
          style={{
            border: `0px solid #fff`,
            position: `absolute`,
            top: `-12px`,
            fontSize: `20px`,
            fontWeight: `400`,
          }}
        >
          {carName}
        </h2>
        <p
          style={{
            border: `0px solid #fff`,
            position: `absolute`,
            top: `12px`,
            fontWeight: `300`,
            margin: `10% auto`,
            color: `rgba(255,255,255,0.75)`,
          }}
        >
          {description}
        </p>
        <span
          style={{
            width: `100%`,
            position: `absolute`,
            top: `85px`,
            right: `40px`,
            border: `0px solid #fff`,
            display: `flex`,
            justifyContent: `end`,
            alignItems: `center`,
            padding: `6% 8% 1% 0%`,
            color: `#fff`,
            fontWeight: `500`,
          }}
        >
          <Icon
            icon="tabler:steering-wheel"
            fontSize="31px"
            color="rgba(255,255,255,0.85)"
            style={{ margin: `0% 2.5%` }}
          />
          $ {rentalPrice}
        </span>
        <span
          style={{
            width: `100%`,
            position: `absolute`,
            top: `125px`,
            right: `40px`,
            border: `0px solid #fff`,
            display: `flex`,
            justifyContent: `end`,
            alignItems: `center`,
            padding: `6% 8% 1% 0%`,
            color: `#fff`,
            fontWeight: `500`,
          }}
        >
          <Icon
            icon="clarity:key-solid"
            fontSize="31px"
            color="rgba(255,255,255,0.85)"
            style={{ margin: `0% 2.5%` }}
          />
          $ {buyingPrice}
        </span>
      </div>
    </div>
  );
}
