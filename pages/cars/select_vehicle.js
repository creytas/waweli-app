import Image from "next/image";
import { Icon } from "@iconify/react";

export default function SelectVehicle() {
  const cars = [
    {
      id: 1,
      brand: "Suzuki",
      model: "Swift",
      manufacturedyear: 2020,
      mileage: 0,
      engine: "90ch/66kW",
      fuel: "gasoline ",
      fuel_consumption: "4,5L/100km",
      displacement: 1242,
      transmission: "automatic",
      speed: 180,
      seat: 5,
      airbag: true,
      description: `This is the new 2020 Swift.
        Sporty simplicity, that’s as practical as You are... `,
      buyingPrice: 16840,
      rentalPrice: 10475,
      carPicture: `/images/suzuki_swift.png`,
      carAlternatePicture: "",
      carInsidePicture: "",
      agreementId: 1,
      maintenance: "half-yearly ",
    },
  ];
  return (
    <div style={{ border: `0px solid blue`, width: `100%`, height: `100%` }}>
      <div
        style={{
          width: `100%`,
          border: `0px solid green`,
          display: `flex`,
          justifyContent: `space-between`,
          padding: `0% 2%`,
        }}
      >
        <div style={{ width: `45%` }}>
          <h1
            style={{
              margin: `2% 0%`,
              border: `0px solid black`,
              fontSize: `29px`,
              fontWeight: `500`,
            }}
          >{`${cars[0].brand} - ${cars[0].model}`}</h1>
          <span style={{ fontWeight: `300` }}>{cars[0].description}</span>
        </div>
        <div
          style={{
            width: `39%`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            border: `0px solid black`,
            fontSize: `25px`,
            fontWeight: `600`,
          }}
        >
          <span
            style={{
              color: `#EC2500`,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              justifyContent: `center`,
            }}
          >
            <span style={{ fontSize: `20px`, fontWeight: `300` }}>
              <Icon icon="clarity:key-solid" fontSize="35px" /> BUYING
            </span>
            $ {cars[0].buyingPrice}
          </span>
          <span
            style={{
              color: `#000`,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              justifyContent: `center`,
            }}
          >
            <span style={{ fontSize: `20px`, fontWeight: `300` }}>
              <Icon icon="tabler:steering-wheel" fontSize="35px" /> RENTING
            </span>
            $ {cars[0].rentalPrice}
          </span>
        </div>
      </div>
      <div style={{ border: `0px solid red`, width: `100%`, display: `flex` }}>
        <div style={{ border: `0px solid red`, width: `60%` }}>
          <Image
            src={cars[0].carPicture}
            alt={`${cars[0].brand} - ${cars[0].model}`}
            width="480"
            height="440"
          />
        </div>
        <div
          style={{
            border: `0px solid red`,
            width: `40%`,
            display: `flex`,
            flexDirection: `column`,
          }}
        >
          <span
            style={{
              width: `95%`,
              border: `0px solid red`,
              margin: `1% 0%`,
              padding: `1% 1% 1% 2.5%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
            }}
          >
            <span style={{ display: `flex`, alignItems: `center` }}>
              <Icon icon="mdi:engine-outline" fontSize="45px" />
              <span
                style={{ marginLeft: `2%`, width: `115px`, fontWeight: `500` }}
              >
                ENGINE
              </span>
            </span>
            <span>{cars[0].engine.toUpperCase()}</span>
          </span>
          <span
            style={{
              width: `95%`,
              border: `0px solid red`,
              margin: `1% 0%`,
              padding: `1% 1% 1% 2.5%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
            }}
          >
            <span style={{ display: `flex`, alignItems: `center` }}>
              <Icon icon="carbon:gas-station" fontSize="40px" />
              <span style={{ marginLeft: `2%`, fontWeight: `500` }}>FUEL</span>
            </span>
            <span>{cars[0].fuel.toUpperCase()}</span>
          </span>
          <span
            style={{
              width: `95%`,
              border: `0px solid red`,
              margin: `1% 0%`,
              padding: `1% 1% 1% 2.5%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
            }}
          >
            <span
              style={{
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <Icon icon="ic:outline-car-repair" fontSize="45px" />
              <span
                style={{
                  marginLeft: `2%`,
                  fontWeight: `500`,
                }}
              >
                CONSUMPTION
              </span>
            </span>
            <span>{cars[0].fuel_consumption.toUpperCase()}</span>
          </span>
          <span
            style={{
              width: `95%`,
              border: `0px solid red`,
              margin: `1% 0%`,
              padding: `1% 1% 1% 2.5%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
            }}
          >
            <span style={{ display: `flex`, alignItems: `center` }}>
              <Icon icon="mdi:car-shift-pattern" fontSize="40px" />
              <span style={{ marginLeft: `2%`, fontWeight: `500` }}>
                TRANSMISSION
              </span>
            </span>
            <span>{cars[0].transmission.toUpperCase()}</span>
          </span>
          <span
            style={{
              width: `95%`,
              border: `0px solid red`,
              margin: `1% 0%`,
              padding: `1% 1% 1% 2.5%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
            }}
          >
            <span style={{ display: `flex`, alignItems: `center` }}>
              <Icon icon="mdi:speedometer" fontSize="40px" />
              <span style={{ marginLeft: `2%`, fontWeight: `500` }}>SPEED</span>
            </span>
            <span>{cars[0].speed} KM/H</span>
          </span>

          <span
            style={{
              width: `95%`,
              border: `0px solid red`,
              margin: `1% 0%`,
              padding: `1% 1% 1% 2.5%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
            }}
          >
            <span style={{ display: `flex`, alignItems: `center` }}>
              <Icon icon="mdi:car-seat" fontSize="40px" />
              <span style={{ marginLeft: `2%`, fontWeight: `500` }}>
                SEATING PLACES
              </span>
            </span>
            <span>{cars[0].seat}</span>
          </span>
          <span
            style={{
              width: `95%`,
              border: `0px solid red`,
              margin: `1% 0%`,
              padding: `1% 1% 1% 2.5%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
            }}
          >
            <span style={{ display: `flex`, alignItems: `center` }}>
              <Icon icon="wpf:security-checked" fontSize="40px" />
              <span style={{ marginLeft: `2%`, fontWeight: `500` }}>
                SECURITY
              </span>
            </span>
            <span>{cars[0].airbag ? `AIRBAG` : `NONE`}</span>
          </span>
          <span
            style={{
              width: `95%`,
              border: `0px solid red`,
              margin: `1% 0%`,
              padding: `1% 1% 1% 2.5%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
            }}
          >
            <span style={{ display: `flex`, alignItems: `center` }}>
              <Icon icon="wpf:maintenance" fontSize="35px" />
              <span style={{ marginLeft: `2%`, fontWeight: `500` }}>
                MAINTENANCE
              </span>
            </span>
            <span>{cars[0].maintenance.toUpperCase()}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
