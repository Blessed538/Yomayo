import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "./home/index";
import About from "./aboutUs/about-us";
import Services from "./services";
import Projects from "../pages/projects";
import Team from "./team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BayomAssociate</title>
        <meta
          name="description"
          content="Get your architecture work done here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
        <About />
        <Services />
        <Projects />
        <Team />
      </main>
    </div>
  );
}
