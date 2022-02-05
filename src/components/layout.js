import Head from "next/head";
import NavBar from "./Navs/NavBar.jsx";
import NavOption from "./Navs/NavOption.jsx";
import Cars from "./Cards/Cars.jsx";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import { width } from "@mui/system";
import { TextField, InputBase, Paper, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
export const siteTitle = "waweli - cars at prices that appeal";
export const navBlackUserItems = [
  { label: "ALL", path: "me/all" },
  { label: "MY CARS", path: "me/my-cars" },
  { label: "SOLD CARS", path: "me/sold-cars" },
  { label: "MECHANICS", path: "me/mechanics" },
];
export const navBlackCarsItems = [
  { label: "ALL", path: "vehicles/all" },
  { label: "INCOMING", path: "vehicles/incoming" },
  { label: "MOST BUYED", path: "vehicles/most-buyed" },
  { label: "USED CARS", path: "vehicles/used-cars" },
];
export const navWhiteCarsItems = [
  { label: "Select Vehicle", path: "select-vehicle" },
  { label: "Shopping Tools", path: "shopping-tools" },
  { label: "Find a Dealer", path: "find-dealers" },
];

import suzuki from "../../public/images/suzuki_swift.png";

const cars = [
  {
    id: 1,
    carName: `Suzuki Swift`,
    carImage: `${suzuki}`,
    description: `This is the new 2020 Swift.
    Sporty simplicity, that’s as practical as You are... `,
    buyingPrice: `25 300`,
    rentalPrice: `15 475`,
  },
];

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main
        style={{
          display: "flex",
          alignItems: "flex-start",
          position: `relative`,
        }}
      >
        <div
          style={{
            border: `1px solid green`,
            width: `60%`,
            height: `100%`,
            position: `absolute`,
          }}
        >
          <header className={styles.header}>waweli</header>
          <div>{children}</div>
        </div>
        <div
          style={{
            border: `1px solid red `,
            display: `flex`,
            width: `40%`,
            height: `100%`,
            position: `fixed`,
            left: `60%`,
          }}
        >
          <aside
            style={{
              width: `25%`,
              border: `1px solid blue`,
              position: `relative`,
            }}
          >
            <NavOption />
          </aside>
          <div
            style={{
              background: `#000`,
              width: `75%`,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
            }}
          >
            <header className={styles.header}>
              <Paper
                style={{
                  width: `80%`,
                  borderRadius: `none`,
                  margin: `4% 0% 0% 0%`,
                  display: `flex`,
                  justifyContent: `center`,
                  border: `2px solid #000`,
                }}
                component="form"
              >
                <InputBase
                  sx={{
                    border: `0px solid red`,
                    flex: `1`,
                    alignItems: `center`,
                    textAlign: `center`,
                    padding: `3%`,
                  }}
                  placeholder="Toyota Corola"
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px", border: `0px solid red` }}
                  aria-label="search"
                >
                  <Icon icon="akar-icons:search" />
                </IconButton>
                {/* <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  fullWidth
                /> */}
              </Paper>
              <NavBar
                navItems={navBlackCarsItems}
                color="255, 255, 255"
                width="100%"
              />
            </header>
            <div
              style={{
                width: `100%`,
                overflowY: `scroll`,
                msOverflowStyle: `none`,
                scrollbarWidth: `none`,
              }}
            >
              <Cars
                src={suzuki}
                carName={cars[0].carName}
                description={cars[0].description}
                buyingPrice={cars[0].buyingPrice}
                rentalPrice={cars[0].rentalPrice}
                key={cars[0].id}
              />
              <Cars
                src={suzuki}
                carName={cars[0].carName}
                description={cars[0].description}
                buyingPrice={cars[0].buyingPrice}
                rentalPrice={cars[0].rentalPrice}
                key={cars[0].id}
              />
              <Cars
                src={suzuki}
                carName={cars[0].carName}
                description={cars[0].description}
                buyingPrice={cars[0].buyingPrice}
                rentalPrice={cars[0].rentalPrice}
                key={cars[0].id}
              />
              <Cars
                src={suzuki}
                carName={cars[0].carName}
                description={cars[0].description}
                buyingPrice={cars[0].buyingPrice}
                rentalPrice={cars[0].rentalPrice}
                key={cars[0].id}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
