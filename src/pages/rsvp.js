import Head from "next/head";
import Navbar from "@/components/Nav";
import { Cormorant_Upright } from "next/font/google";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const corm = Cormorant_Upright({
    weight: "400",
    subsets: ['latin'],
  })

  export default function Rsvp(){
    const { t } = useTranslation()

    return(
        <>
         <Head>
        <title>Marija & Liam - RSVP</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar  />
      <section className={corm.className}>
      <div className="pt-12 md:pt-40 bg-maingreen"></div>
      <div className="bg-offw">
      <div className="mx-auto w-5/6 pt-10 md:pt-16 ">
            <h1 className="uppercase  text-2xl  font-bold md:text-5xl text-textb text-center">RSVP</h1>
            
            <p className="text-textb text-center pt-6 text-xl md:text-3xl">{t("ATTENDENCE")}</p>
        </div>
        </div>
      <div className="min-h-screen flex items-center justify-center pt-6 bg-offw">
            
        
      <form className=" mx-auto md:w-2/6 w-5/6 p-4 bg-maingreen rounded-lg shadow-lg border-2 border-textb">
    <div className="mb-4">
        <label htmlFor="name" className="block font-bold mb-1 text-textb">{t("NAME")}:</label>
        <input type="text" id="name" name="name" className="border rounded w-full border-textb p-2 bg-offw" />
        <button type="button" id="checkButton" className=" mt-2 bg-textb  border border-maingreen text-maingreen font-semibold rounded p-2 hover:border hover:border-textb hover:bg-maingreen hover:text-textb cursor-pointer">{t("CHECK")}</button>
    </div>
    <div id="step2" className="">
        <label htmlFor="email" className="block font-bold mb-1 text-textb">Email:</label>
        <input type="email" id="email" name="email" className="border rounded w-full p-2 border-textb bg-offw" />
        
        <label htmlFor="phone" className="block font-bold mb-1 text-textb">{t("PHONE")}:</label>
        <input type="tel" id="phone" name="phone" className="border rounded w-full p-2" />
    </div>
    <div id="step3" className="">
        <label htmlFor="additionalName" className="block font-bold mb-1 text-textb">{t("+1")}:</label>
        <input type="text" id="additionalName" name="additionalName" className="border rounded w-full p-2  border-textb bg-offw" />
        
        
    </div>
    <button type="submit" className="mt-2 bg-textb  border border-maingreen text-maingreen font-semibold rounded p-2 hover:border hover:border-textb hover:bg-maingreen hover:text-textb cursor-pointer">{t("SUBMIT")}</button>
</form>

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