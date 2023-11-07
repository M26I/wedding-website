import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Inter, Alex_Brush, Cormorant_Upright } from 'next/font/google'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Header from '@/components/Header'
import Navbar from '@/components/Nav'
import VerticalTimeline from '@/components/Timeline'






const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})

export default function Home() {

  const { t } = useTranslation()



  return (
    <>
      <Head>
        <title>Marija & Liam - Wedding website</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />

      <Header />
      <section className={corm.className}>
        <div className='mx-auto w-5/6 pt-10 pb-10 md:pb-20 md:pt-20'>
          <h1 className=' uppercase  text-2xl  font-bold md:text-5xl text-textb text-center'>{t("MAIN_TITLE")}</h1>
          <p className='text-lg md:text-3xl text-textb text-center pt-10 md:pt-16 font-bold'>{t("WHEN")}</p>
          <p className='text-lg md:text-3xl text-textb text-center  pt-2 md:pt-4 font-bold'>{t("WHERE")}</p>

        </div>
      </section>
      <section className='bg-white block md:hidden'>
        <div className='mx-auto w-5/6 pt-10 pb-10 md:pb-20 md:pt-20'>
          <div className={corm.className}>
            <h2 className='text-center text-textb text-2xl md:text-5xl font-bold uppercase pb-10'>{t("TIMELINE")}</h2>

            <VerticalTimeline />




          </div>
        </div>
      </section>
      <section className='hidden md:block'>
        <div className={corm.className}>
          <h2 className='text-center text-textb text-2xl md:text-5xl font-bold uppercase pb-16'>{t("TIMELINE")}</h2>
          <VerticalTimeline />
        </div>
      </section>



    </>
  )
}
export async function getStaticProps(context) {

  const { locale } = context

  return {
    props: {

      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
