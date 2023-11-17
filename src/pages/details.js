import Head from "next/head";
import Navbar from "@/components/Nav";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Cormorant_Upright } from "next/font/google";
import Cards from "@/components/Cards";


const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})





export default function Details() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{`Marija & Liam - ${t("M_TITLE_DETAILS")}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" purpose="maskable" />
      </Head>
      <Navbar />
      <div className="pt-12 lg:pt-40 bg-maingreen"></div>
      <div className=" bg-white bg-cover h-full"  style={{ backgroundImage: 'url("/bkg2.svg")' }}>
      <section className='pt-12 mx-auto w-5/6 pb-12 md:pb-16'>
        <div className={corm.className}>
        <h1 className="uppercase  text-4xl  font-bold md:text-5xl text-textb text-center pt-10 md:pt-16 pb-10 md:pb-26">{t("DETAILS")}</h1>
        <Cards />
        </div>
      </section>
      </div>

    </>
  )
}

export async function getStaticProps({locale}) {

  

  return {
    props: {

      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}