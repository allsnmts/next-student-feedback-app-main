import React from 'react';
import Head from 'next/head';
import PageTransition from '@/components/PageTransition';
import AdminLayout from '@/layouts/AdminLayout';
import CardBarChartContainer from '@/containers/CardBarChartContainer';
import CardTableContainer from '@/containers/CardTableContainer';
import AdminHeaderStatsContainer from '@/containers/AdminHeaderStatsContainer';
import Modal from '@/components/Modal';
import CheckFeedbackDataContainer from '@/containers/CheckFeedbackDataContainer';

export default function sentimentAnalysis() {
  return (
    <AdminLayout>
      <Head>
        <title>USFA | SA</title>
        <meta name="description" content="" />
      </Head>

      <PageTransition />
      <main className="text-dark w-full h-full dark:text-light">
        <div className="mx-auto w-[80vw] lg:w-[90vw] ">
          <CheckFeedbackDataContainer
            ifFeedbackArrIsEmpty={<Modal />}
            ifFeedbackArrIsNotEmpty={
              <div className="flex flex-col gap-y-5">
                <div>
                  <Modal />
                </div>
                <AdminHeaderStatsContainer />
                <div className="flex flex-row lg:flex-col gap-8">
                  <div className="w-full shadow-2xl h-full">
                    <CardBarChartContainer />
                  </div>
                  <div className="w-full shadow-2xl h-full">
                    <CardTableContainer />
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </main>
    </AdminLayout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      protected: true,
    },
  };
};
