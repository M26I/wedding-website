import Head from "next/head";
import Navbar from "@/components/Nav";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Cormorant_Upright } from "next/font/google";
import Image from "next/image";
import GoogleMap from "@/components/map";

const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})


export default function WhenWhere() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Marija & Liam  </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <div className="pt-12 lg:pt-40 bg-maingreen"></div>
      
      
      <section className='pt-12 mx-auto w-5/6 pb-10 md:pb-16 '>
        <div className={corm.className}>
        <h1 className="uppercase  text-2xl  font-bold md:text-5xl text-textb text-center pt-10 md:pt-16 ">{t("WHEN_WHERE")}</h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 pt-10 md:pt-32">
  <p className="text-textb text-center pb-10 text-xl xl:text-3xl md:pr-6 ">{t("PLACE")}</p>
  <Image
    src="/vilad.jpg"
    alt="Vila Dalmatia"
    width={800}
    height={600}
    
    className="rounded-xl"
    
  />
</div>

        

        </div>
        <div className=" block lg:hidden grid lg:grid-cols-2 grid-cols-1 pt-10 md:pt-16  ">
        <div className={corm.className}>
         <p className=" text-textb text-center pb-10 text-xl xl:text-3xl md:pl-6 md:pb-16 ">{t("ADDRESS")}</p>
         </div>

         <GoogleMap />
        

        </div>

        <div className=" hidden lg:grid lg:grid-cols-2 grid-cols-1 pt-10 md:pt-32 ">
        

         <GoogleMap />
         <div className={corm.className}>
         <p className="text-textb text-center pb-6 text-xl xl:text-3xl md:pl-6  ">{t("ADDRESS")}</p>
         </div>

        </div>
      </section>
     

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