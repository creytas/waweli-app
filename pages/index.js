import Head from "next/head";
import Layout, {
  siteTitle,
  navBlackUserItems,
  navBlackCarsItems,
  navWhiteCarsItems,
} from "../src/components/layout";
import NavOption from "../src/components/Navs/NavOption.jsx";
import utilStyles from "../styles/utils.module.css";
import { Icon } from "@iconify/react";
import SelectVehicle from "./cars/select_vehicle";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <SelectVehicle />
    </Layout>
  );
}
