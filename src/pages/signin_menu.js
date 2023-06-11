import React from "react";
import Head from "next/head";
import PageTransition from "@/components/PageTransition";
import Button from "@/components/Buttons/Button";

export default function SignInMenu() {
  const admin_form = () => {
    location.href = "/admin_menu";
  };
  return (
    <>
      <Head>
        <title>SFSA | Sign In Menu</title>
        <meta name="description" content="" />
      </Head>

      <PageTransition />
      <main className="flex items-center justify-center w-full min-h-screen">
        <div className="flex flex-col items-center">
          <Button className="font-semibold rounded-3xl text-lg mb-4 btn-large">
            Student
          </Button>
          <Button className="font-semibold rounded-3xl text-lg btn-large">
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
