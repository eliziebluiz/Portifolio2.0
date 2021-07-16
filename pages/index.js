import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Animation from "./Animation/animationHome";
// import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
const user = "eliziebluiz";

export default function Home({ allPostsData }) {
  const [date, setDate] = useState();
  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}`).then((response) => {
      console.log(response?.data);
      setDate(response?.data);
    });
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.containerDate}>
        <section className={utilStyles.headingMdM}>
          <p>
            Hello, I’m <strong>Elizieb Luiz</strong>.
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2> 👨🏻‍💻 Bios</h2>
          <h3>{date?.bio || "Ideas developer"}</h3>
          <h2 className={utilStyles.headingLg}> 🥷 About Me</h2>
          <p className={utilStyles.headingMd}>
            ~ UFERSA, Pau dos Ferros: 2017/06 - 2021/01 Bachelor of Information
            Technology
          </p>
          <p className={utilStyles.headingMd}>
            ~ Studying Software Engineering at Federal Rural University of
            Semiarid.
          </p>
          <p className={utilStyles.headingMd}>
            ~ Front end developer at Acelerabit.
          </p>
          <p className={utilStyles.headingMd}>~ Learning more about NextJS. </p>
        </section>
        <section
          className={`${utilStyles.headingMdTecs} ${utilStyles.padding1px}`}
        >
          <h2 className={utilStyles.headingLg}> 😎 Tech Stack</h2>
          <p className={utilStyles.headingMd}>
            ~ Javascript | HTML | CSS | ReactJS | Typescript | NextJS | Python
          </p>
          <p className={utilStyles.headingMd}>
            ~ Fundamentals of Database - MySQL | MongoDB | SQlite3
          </p>
          <p className={utilStyles.headingMd}>~ Git</p>
        </section>
        <section className={utilStyles.animation}>
          <Animation />
          <section className={utilStyles.animationBox}>
            <p>Contatos</p>
            <a href="https://www.linkedin.com/in/elizieb-luiz-798994183/">
              § Linkedin
            </a>
            <a href="https://github.com/eliziebluiz">§ GitHub</a>
            <a href="https://gitlab.com/Elizieb">§ GitLab</a>
          </section>
        </section>
      </section>
    </Layout>
  );
}
