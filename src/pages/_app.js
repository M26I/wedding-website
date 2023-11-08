
import '@/styles/globals.css';

import { appWithTranslation } from 'next-i18next';
import Navbar from '@/components/Nav';




function MyApp({ Component, pageProps }) {
  

  
   

  return (
    <>
    <Navbar />
   
          <Component {...pageProps} />
          </>
       
  );
}



export default appWithTranslation(MyApp);
