import { useState } from "react";
import { useRouter } from "next/router";
import { db, connectToDatabase } from "../../mongodb";
import Head from "next/head";
import Navbar from "@/components/Nav";
import { Cormorant_Upright } from "next/font/google";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'




const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})

export default function Rsvp({ data, confirmedData }) {
  const router = useRouter();
  const { t } = useTranslation()
  const [nameToCheck, setNameToCheck] = useState("");
  const [nameExists, setNameExists] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [plusOne, setPlusOne] = useState(false);
  const [confirmedNameExists, setConfirmedNameExists] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [additionalName, setAdditionalName] = useState("");



  //submiting the form

  const handleFormSubmit = async (e) => {

    e.preventDefault();
    const formData = {
      name: nameToCheck,
      email,
      phone,
      additionalName,

    };

    try {
      const response = await fetch("/api/submit-rsvp", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {

        console.error("RSVP submission failed.");
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    }
  }


  //checking the name
  function removeDiacritics(str) {
    
    str = str.replace(/đ/g, 'd');
    
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  

  const handleCheckButtonClick = async () => {
    if (nameToCheck.trim() !== "") {
      const invitedData = data[0].invited;
      const normalizedInput = removeDiacritics(nameToCheck.toLowerCase());



      const selectedGuest = invitedData.find((guest) => {
        const normalizedGuestName = removeDiacritics(guest.name.toLowerCase());
        return normalizedGuestName === normalizedInput;
      });

      if (selectedGuest) {
        setNameExists(true);
        setPlusOne(selectedGuest.plusOne);

               const confirmedGuest = confirmedData?.find((guest) => {
          const normalizedGuestName = removeDiacritics(guest.name.toLowerCase());
          const normalizedAdditionalName = guest.additionalName
            ? removeDiacritics(guest.additionalName.toLowerCase())
            : null;
          return (
            normalizedGuestName === normalizedInput ||
            (normalizedAdditionalName && normalizedAdditionalName === normalizedInput)
          );
        });


        if (confirmedGuest) {
          setConfirmedNameExists(true);

        } else {
          setConfirmedNameExists(false);

        }
      } else {
        setNameExists(false);
        setPlusOne(false);
        setConfirmedNameExists(false);

      }
    }
  };


  return (
    <>
      <Head>
        <title>{`Marija & Liam - ${t("M_TITLE_RSVP")}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" purpose="maskable" />
      </Head>
      <Navbar />
      <section className={corm.className}>
        <div className="pt-12 lg:pt-40 bg-maingreen"></div>
        <div className=" bg-white bg-cover h-full" style={{ backgroundImage: 'url("/bkg2.svg")' }}>
          <div className="mx-auto w-5/6 pt-10 md:pt-16 ">
            <h1 className="uppercase  text-2xl  font-bold md:text-5xl text-textb text-center">RSVP</h1>

            <p className="text-textb text-center pt-6 text-xl md:text-3xl">{t("ATTENDENCE")}</p>
          </div>
        </div>
        <div className="min-h-screen flex flex-col items-center  bg-white bg-cover" style={{ backgroundImage: 'url("/bkg2.svg")' }}>


          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent the default form submission behavior
              handleFormSubmit(e); // Pass the event object to the submit function
            }}
            className=" mx-auto md:w-2/6 w-5/6 p-4 bg-maingreen rounded-lg shadow-lg border-2 border-textb mt-10 md:mt-16">
            <div className="mb-4">
              <label htmlFor="name"
                className="block font-bold mb-1 mt-1 text-textb">{t("NAME")}:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full border-textb p-2 bg-offw"
                value={nameToCheck}
                onChange={(e) => setNameToCheck(e.target.value)} />

              <button
                onClick={() => {
                  handleCheckButtonClick();
                  setIsButtonClicked(true);
                }}
                type="button"
                id="checkButton"
                className=" mt-3 bg-textb  border border-maingreen text-maingreen font-semibold rounded p-2 hover:border hover:border-textb hover:bg-maingreen hover:text-textb cursor-pointer">{t("CHECK")}</button>

            </div>
            {isButtonClicked && nameToCheck.trim() !== "" && (
              nameExists && !confirmedNameExists ? (
                <p className="text-textb">{t("CHECK_NAME_YES")}</p>
              ) : confirmedNameExists ? (
                <p className="text-textb">{t("RSVP_BEFORE")}</p>
              ) : (
                <p className="text-textb">{t("CHECK_NAME_NO")}</p>
              )
            )}


            {isButtonClicked && nameExists && !confirmedNameExists && (
              <div id="step2" className="">
                <label htmlFor="email" className="block font-bold mb-1 mt-1 text-textb">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded w-full p-2 border-textb bg-offw" />

                <label htmlFor="phone" className="block font-bold mb-1 mt-1 text-textb">{t("PHONE")}:</label>
                <input type="tel" id="phone" onChange={(e) => setPhone(e.target.value)} name="phone" value={phone} className="border rounded w-full p-2" />
              </div>
            )}
            {isButtonClicked && nameExists && !confirmedNameExists && plusOne && (
              <div id="step3" className="">
                <label htmlFor="additionalName" className="block font-bold mb-1 mt-1 text-textb">{t("+1")}:</label>
                <input type="text" id="additionalName" onChange={(e) => setAdditionalName(e.target.value)} value={additionalName} name="additionalName" className="border rounded w-full p-2  border-textb bg-offw" />


              </div>
            )}
            {isButtonClicked && nameExists && !confirmedNameExists && (
              <button type="submit" className="mt-3 bg-textb  border border-maingreen text-maingreen font-semibold rounded p-2 hover:border hover:border-textb hover:bg-maingreen hover:text-textb cursor-pointer">{t("SUBMIT")}</button>
            )}
          </form>

        </div>

      </section>

    </>
  )
}
export async function getStaticProps({locale}) {
  

  await connectToDatabase();
  const collection = db.collection("invited");
  const data = await collection.find({}, { projection: { _id: 0 } }).toArray();
  const confirmedCollection = db.collection("confirmed");
  const confirmedData = await confirmedCollection.find({}, { projection: { _id: 0 } }).toArray();





  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
      confirmedData,
    },
  };
}
