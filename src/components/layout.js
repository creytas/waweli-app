import Head from "next/head";
import NavBar from "./Navs/NavBar.jsx";
import NavOption from "./Navs/NavOption.jsx";
import styles from "./layout.module.css";

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

import SelectCars from "./CarList/SelectCars.js";
import UserPage from "./Forms/UserPage.js";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
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
            border: `0px solid green`,
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
            border: `0px solid red `,
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
              border: `0px solid blue`,
              position: `relative`,
            }}
          >
            <NavOption />
          </aside>
          {/* <SelectCars /> */}
          <UserPage />
        </div>
      </main>
    </div>
  );
}
