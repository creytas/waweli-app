import { Icon } from "@iconify/react";

export default function Cars({
  carImage,
  carName,
  description,
  buyingPrice,
  rentalPrice,
}) {
  return (
    <div>
      <div></div>
      <div>
        <h2>{carName}</h2>
        <p>{description}</p>
        <span>
          <Icon icon="tabler:steering-wheel" fontSize="37px" />
          {rentalPrice}
        </span>
        <span>
          <Icon icon="clarity:key-solid" fontSize="38px" />
          {buyingPrice}
        </span>
      </div>
    </div>
  );
}
