
import '@/styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { appWithTranslation } from 'next-i18next';
import { i18n } from 'next-i18next';
import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Cookies from 'js-cookie';
import { Alex_Brush, Cormorant_Upright } from 'next/font/google';

const alex = Alex_Brush({
  weight: "400",
  subsets: ['latin'],
})
const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  const [languageSelected, setLanguageSelected] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const userPreferredLanguage = Cookies.get('preferredLanguage');

    // Check if a language preference cookie exists
    if (userPreferredLanguage) {
      // If a cookie exists, set the language to the stored preference
      i18n.changeLanguage(userPreferredLanguage);
      setLanguageSelected(true); // Mark language as selected
    } else {
      // Otherwise, set the default language
      i18n.changeLanguage('en'); // Set your default language here
    }
  }, []);

  const handleLanguageSelection = (language) => {
    // Add fade-out effect
    setFadeOut(true);
    
    setTimeout(() => {
      // Set the selected language
      i18n.changeLanguage(language);
      setLanguageSelected(true);

      // Store the selected language in a cookie
      const expireTimeInMinutes = 60;
      const expireDate = new Date();
      expireDate.setTime(expireDate.getTime() + expireTimeInMinutes * 60 * 1000);

      Cookies.set('preferredLanguage', language, {
        expires: expireDate,
      });
    }, 500); // Wait for the fade-out animation (0.5 seconds)
  };

  return (
    <div>
      {!languageSelected && (
        <section className={`background h-screen ${fadeOut ? 'fade' : ''}`}>
          <div className="flex h-screen items-center justify-center">
            <div className="text-center">
              <div className={alex.className}>
                <p className='text-textb text-5xl md:text-8xl '>Marija & Liam</p>
              </div>
              <div className={corm.className}>
              <button onClick={() => handleLanguageSelection('en')} className=" text-lg text-textb md:text-2xl pt-10 mr-4 md:mr-6 md:text-offw font-bold hover:text-textb transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                ENGLISH
              </button>
              <button onClick={() => handleLanguageSelection('hr')} className='text-lg text-textb md:text-2xl pt-10 md:text-offw font-bold hover:text-textb transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>HRVATSKI</button>
              </div>
            </div>
          </div>
        </section>
      )}
      {languageSelected && (
        <div>
          <Component {...pageProps} />
        </div>
      )}
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])), // Load translations for the 'common' namespace
    },
  };
};

export default appWithTranslation(MyApp);
