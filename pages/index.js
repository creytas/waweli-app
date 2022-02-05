import Head from "next/head";
import Layout, {
  siteTitle,
  navBlackUserItems,
  navBlackCarsItems,
  navWhiteCarsItems,
} from "../src/components/layout";
//import Cars from "../src/components/Cards/Cars";
import NavOption from "../src/components/Navs/NavOption.jsx";
import utilStyles from "../styles/utils.module.css";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section style={{ display: `flex`, justifyContent: `space-between` }}>
        

      </section>
    </Layout>
  );
}
