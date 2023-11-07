import Head from "next/head";
import Script from "next/script";

function GoogleMap() {
  return (
    <>
      <Head>
        <Script async defer src="https://maps.googleapis.com/maps/api/js"></Script>
      </Head>
      <div className="w-full max-w-screen-sm mx-auto md:max-w-screen-md lg:max-w-screen-lg">
        <div
          className="w-full md:aspect-w-16 md:aspect-h-12 lg:aspect-w-16 lg:aspect-h-10"
          style={{
            position: "relative",
            paddingBottom: "54%", 
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11239.826282484915!2d16.4064055!3d43.5044897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13356762e4dd7fa1%3A0x374476265ddafd24!2sVilla%20Dalmacija!5e0!3m2!1sen!2sus!4v1609753306121!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", top: 0, left: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default GoogleMap;
