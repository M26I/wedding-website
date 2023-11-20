import { Container } from "./CardStyles";
import { useTranslation } from 'next-i18next';
import { Cormorant_Upright } from 'next/font/google';
import Image from 'next/image';

const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})



const Cards = () => {
  const { t } = useTranslation('common');

  return (
    <Container>

      <div className="card">
        <div className="box">
          <div className="imgBox">
            <Image src="../rsvp-card.svg"
              alt="mailbox image"
              width={300}
              height={300} />
            <h2 className="pt-44 md:pt-52">RSVP</h2>
          </div>
          <div className="contentBox">
            <div>
              <p>
                {t("RSVP_CARD")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <div className="imgBox">
            <Image
              src="../ceremony-card.svg"
              alt="wedding bands image"
              width={300}
              height={300} />
            <h2 className="pt-44 md:pt-52">{t("CEREMONY")}</h2>
          </div>
          <div className="contentBox">
            <div>
              <p>
                {t("CEREMONY_CARD")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <div className="imgBox">
            <Image
              src="../speech-card.svg"
              alt="speech image"
              width={300}
              height={300} />
            <h2 className="pt-44 md:pt-52">{t("SPEECHES")}</h2>
          </div>
          <div className="contentBox">
            <div>

              <p>
                {t("SPEECH_CARD")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <div className="imgBox">
            <Image
              src="../kids-card.svg"
              alt="Kid image"
              width={300}
              height={300} />
            <h2 className="pt-44 md:pt-52">{t("KIDS")}</h2>
          </div>
          <div className="contentBox">
            <div>

              <p>
                {t("KIDS_CARD")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <div className="imgBox">
            <Image
              src="../gallery-card.svg"
              alt="Taking photo with mobile phone image"
              width={300}
              height={300} />
            <h2 className="pt-44 md:pt-52">{t("GALLERY")}</h2>
          </div>
          <div className="contentBox">
            <div>

              <p>
                {t("GALLERY_CARD")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <div className="imgBox">
            <Image
              src="../dresscode-card.svg"
              alt="Image of wardrobe"
              width={300}
              height={300} />
            <h2 className="pt-44 md:pt-52">{t("ATTIRE")}</h2>
          </div>
          <div className="contentBox">
            <div>

              <p>
                {t("ATTIRE_CARD")}
              </p>
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
};

export default Cards;
