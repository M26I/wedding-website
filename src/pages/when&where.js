import Head from "next/head";
import Navbar from "@/components/Nav";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Cormorant_Upright } from "next/font/google";

const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})


export default function WhenWhere() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Marija & Liam - {t("WHEN_WHERE")} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <div className="pt-12 lg:pt-40 bg-maingreen"></div>
      <section className='pt-12 mx-auto w-5/6'>
        <div className={corm.className}>

        </div>
      </section>

    </>
  )
}

export async function getStaticProps(context) {

  const { locale } = context

  return {
    props: {

      ...(await serverSideTranslations(locale)),
    },
  }
}