import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "./home/index";
import About from "./aboutUs/about-us";
import Services from "./services";
import Projects from "./projects";
import Team from "./team";
import Footer from "./footer";
const contentful = require("contentful");

function Home({ resources }) {
  const { items } = resources;
  const [fields] = items;

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
        {items.map((item, index) => (
          <HomePage key={index} item={item} />
        ))}
        {fields.fields.aboutUs.map((item, index) => (
          <About key={index} item={item} />
        ))}
        <Services service={fields.fields.services} />

        <Projects projects={fields.fields.projects} />
        <Team teams={fields.fields.teams} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const ClientContentful = contentful.createClient({
    space: "sjwpoajwjci7",
    accessToken: "ZqZa7Blq2ZTZ3zuX4BJIPpSOI9p_Tvh4wniIs4ZvI_U",
  });

  const res = ClientContentful.getEntries({
    content_type: "yomayo",
  });
  const resources = await res;

  return {
    props: {
      resources,
    },
  };
}

export default Home;
