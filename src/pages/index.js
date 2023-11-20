import Head from 'next/head'
import { Cormorant_Upright } from 'next/font/google'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Header from '@/components/Header'
import Navbar from '@/components/Nav'
import VerticalTimeline from '@/components/Timeline'
import Image from 'next/image'






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
        <meta name="description" content="Info and RSVP for wedding of Marija and Liam- home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1D3539" />
        <link rel="manifest" href="/manifest.json"></link>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />

      <div className="relative">

        <Header />

        <div className="sticky top-0  bg-white h-full bg-center bg-cover" style={{ backgroundImage: 'url("/bkg2.webp")' }}>
          <section className={corm.className}>
            <div className='mx-auto w-5/6 pt-10 pb-10 md:pb-20 md:pt-20'>
              <h1 className=' uppercase  text-2xl  font-bold md:text-5xl text-textb text-center'>{t("MAIN_TITLE")}</h1>
              <p className='text-lg md:text-3xl text-textb text-center pt-10 md:pt-16 font-bold'>{t("WHEN")}</p>
              <p className='text-lg md:text-3xl text-textb text-center  pt-2 md:pt-4 font-bold'>{t("WHERE")}</p>

            </div>
          </section>
        </div>

        <div className="sticky top-0 h-screen ">
          <div className='hidden md:block h-full bg-center'>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                src="/newcollage1.webp"
                fill
                alt='collage'
                style={{ objectFit: "cover" }} />


            </div>
          </div>

          <div className='block md:hidden h-full bg-center'>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                src="/view-ph.webp"
                fill
                alt='collage'
                style={{ objectFit: "cover" }} />


            </div>
          </div>

        </div>
        <div className="sticky top-0 bg-white h-full bg-center bg-cover" style={{ backgroundImage: 'url("/bkg2.webp")' }}>
          <section className='pt-12 mx-auto w-5/6 pb-12 md:pb-20'>
            <div className={corm.className}>
              <div className="grid lg:grid-cols-2 grid-cols-1 pt-10 md:pt-16 pb-10">
                <p className="text-textb text-center pb-6 text-xl xl:text-3xl md:pr-6  xl:pt-14 lg:pt-8">{t("PLACE_HOME")}</p>
                <Image
                  src="/vilad.webp"
                  alt="Vila Dalmatia"
                  width={800}
                  height={600}

                  className="rounded-xl"

                />
              </div>



            </div>

          </section>
        </div>



        <div className="sticky top-0 h-screen ">
          <div className='hidden md:block h-full bg-center'>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                src="/cabo1.webp"
                fill
                alt='collage'
                style={{ objectFit: "cover" }} />


            </div>
          </div>

          <div className='block md:hidden h-full bg-center'>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                src="/we-ph.webp"
                fill
                alt='collage'
                style={{ objectFit: "cover" }} />


            </div>
          </div>

        </div>

        <div className="sticky top-0 h-full bg-white pb-16 h-full bg-center bg-cover" style={{ backgroundImage: 'url("/bkg2.webp")' }}>
          <div className={corm.className}>
            <h2 className='text-center text-textb text-2xl md:text-5xl font-bold uppercase pb-16 pt-16'>{t("TIMELINE")}</h2>
            <VerticalTimeline />
          </div>
        </div>

      </div>



    </>
  )
}
export async function getStaticProps({ locale }) {



  return {
    props: {

      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
