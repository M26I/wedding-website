import Header from "@/components/Header"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Inter, Alex_Brush, Cormorant_Upright } from 'next/font/google'
import VerticalTimeline from "@/components/Timeline"
import GoogleMap from "@/components/map"
import Image from "next/image"

const corm = Cormorant_Upright({
    weight: "400",
    subsets: ['latin'],
  })
export default function Test(){
    const { t } = useTranslation()
    return(

<div className="relative">
   
        <Header />
    
    <div className="sticky top-0  bg-white">
    <section className={corm.className}>
        <div className='mx-auto w-5/6 pt-10 pb-10 md:pb-20 md:pt-20'>
          <h1 className=' uppercase  text-2xl  font-bold md:text-5xl text-textb text-center'>{t("MAIN_TITLE")}</h1>
          <p className='text-lg md:text-3xl text-textb text-center pt-10 md:pt-16 font-bold'>{t("WHEN")}</p>
          <p className='text-lg md:text-3xl text-textb text-center  pt-2 md:pt-4 font-bold'>{t("WHERE")}</p>

        </div>
      </section>
    </div>
    
    <div className="sticky top-0 h-screen ">
    <div className="hidden md:block h-full bg-center bg-cover" style={{ backgroundImage: 'url("/cabo.svg")' }}>
                        
                        </div>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="block md:hidden h-full bg-center bg-cover" style={{ backgroundImage: 'url("/view-p.svg")' }}>
                        
                        </div>
                        
    </div>
    <div className="sticky top-0 bg-white h-full">
    <section className='pt-12 mx-auto w-5/6 pb-10 md:pb-16'>
        <div className={corm.className}>
        <h1 className="uppercase  text-2xl  font-bold md:text-5xl text-textb text-center pt-10 md:pt-16">{t("WHEN_WHERE")}</h1>

       
<div className="grid md:grid-cols-2 grid-cols-1 pt-10 md:pt-32  mx-auto w-5/6  md:pb-32">
        

        <GoogleMap />
        <div className={corm.className}>
        <p className=" text-textb text-center pb-6 text-xl pt-10 xl:text-3xl md:pr-6 lg:pl-10 xl:pt-16 lg:pt-8">{t("ADDRESS")}</p>
        </div>

       </div>

        

        </div>
        </section>
    </div>
    
    <div className="sticky top-0 h-full">
    <div className="sticky top-0 h-screen ">
    <div className="hidden md:block h-full bg-center bg-cover" style={{ backgroundImage: 'url("/newcollage.svg")' }}>
                        
                        </div>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="block md:hidden h-full bg-center bg-cover" style={{ backgroundImage: 'url("/we-p.svg")' }}>
                        
                        </div>
                        
    </div>
   </div>
    <div className="sticky top-0 h-full bg-white">
    <div className={corm.className}>
          <h2 className='text-center text-textb text-2xl md:text-5xl font-bold uppercase pb-16 pt-16'>{t("TIMELINE")}</h2>
          <VerticalTimeline />
        </div>
    </div>
    
</div>
)
    }
    export async function getStaticProps({locale}) {

 

        return {
          props: {
      
            ...(await serverSideTranslations(locale, ['common'])),
          },
        }
      }