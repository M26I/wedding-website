import ImageUpload from "@/components/ImageUpload";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Cormorant_Upright } from "next/font/google";

const corm = Cormorant_Upright({
    weight: "400",
    subsets: ['latin'],
})


export default function Gallery() {
    const { t } = useTranslation()
    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/images');
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <>
            <Head>
                <title>{`Marija & Liam - ${t("M_TITLE_GALLERY")}`}</title>
                <meta name="description" content="Info and RSVP for wedding of Marija and Liam- gallery" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
                <meta name="theme-color" content="#1D3539" />
               
            </Head>
            <div className="pt-12 lg:pt-40 bg-maingreen"></div>
            <section className='pt-12 mx-auto w-5/6 pb-10 md:pb-'>
                <div className={corm.className}>
                    <h1 className="uppercase  text-2xl  font-bold md:text-5xl text-textb text-center pt-10 md:pt-16 ">{t("PICTURES_TITLE")}</h1>
                    <p className="text-textb text-center pt-6 text-xl md:text-3xl">{t("GALLERY_INTRO")}</p>
                </div>
            </section>
            <div>
                <ImageUpload />
            </div>
            

                <div className="pt-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4  lg:gap-10">
                        {images.map((image) => (
                            <div key={image._id} className="mx-auto w-5/6 text-center mb-4" style={{ width: '300px', height: '225px' }}>
                                <Image
                                    src={`data:image/png;base64,${image.image}`}
                                    alt={`Image ${image._id}`}
                                    width={300}
                                    height={225}
                                    style={{ objectFit: 'cover' }}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>


            
        </>
    );
};
export async function getStaticProps({ locale }) {



    return {
        props: {

            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}

