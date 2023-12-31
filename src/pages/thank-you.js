import Head from 'next/head'
import Navbar from '@/components/Nav'
import { Cormorant_Upright } from 'next/font/google'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})

export default function ThankYou() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{`Marija & Liam - ${t("M_TITLE_THANKS")}`}</title>
        <meta name="description" content="Thank you page after confirmation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#1D3539" />
        
      </Head>
      <Navbar />

      <div className="pt-12 lg:pt-40 bg-maingreen"></div>
      <section className='pt-12 mx-auto w-5/6'>
        <div className={corm.className}>
          <p className='text-center text-textb text-2xl md:text-4xl pt-10 font-bold'>{t("SUCCESS")}</p>
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
