import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Cars from "../components/Cards/Cars";
import NavOption from "../components/Navs/NavOption";
import utilStyles from "../styles/utils.module.css";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <aside>
          <NavOption />
        </aside>

        <p>
          {" "}
          <Icon icon="mdi-light:home" fontSize="50px" /> I'm Randy and I'm a web
          developer
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
