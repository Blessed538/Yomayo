import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "../components/home/home";
import About from "../components/aboutUs/aboutUs";
import Services from "../components/services/services";
import Projects from "../components/projects/projects";
import Team from "../components/team/team";
import Footer from "../components/footer/footer";
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
        {items?.map((item, index) => (
          <HomePage key={index} item={item} />
        ))}
        {fields?.fields?.aboutUs?.map((item, index) => (
          <About key={index} item={item} />
        ))}
        <Services service={fields?.fields?.services} />

        <Projects projects={fields.fields.projects} />
        <Team teams={fields?.fields?.teams} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const ClientContentful = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.accessToken,
  });

  const res = ClientContentful.getEntries({
    content_type: process.env.content_type,
  });

  const resources = await res;

  return {
    props: {
      resources,
    },
  };
}

export default Home;
