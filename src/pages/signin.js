import React, { useRef } from "react";
import Head from "next/head";
import dashboard from "../../public/images/dashboard.jpg";
import {
  AnimatedTextSpring,
  AnimatedTextTypeWriter,
} from "@/components/AnimatedText";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import { aboutPage } from "../content/pages";
import PageTransition from "@/components/PageTransition";
import AnimatedList from "@/components/AnimatedList";
import Button from "@/components/Buttons/Button";

export default function sigin_menu() {
  return (
    <>
      <Head>
        <title>USFA | About</title>
        <meta name="description" content="" />
      </Head>

      <PageTransition />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <div
          className={`flex flex-row gap-4 items-center self-center lg:self-center`}
        >
          <Button
            className="!font-semibold rounded-3xl !text-lg"
            onClick={() => router.push("/about")}
          >
            Student
          </Button>
          <Button
            className="!font-semibold rounded-3xl !text-lg"
            onClick={() => router.push("/about")}
          >
            Admin
          </Button>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      protected: false,
    },
  };
};
