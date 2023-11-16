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
      {/* Add your card components here */}
      <div className="card">
        <div className="box">
          <div className="imgBox">
            <img src="../vilad.jpg" alt="Mohana_sunset_trees" />
            <h2 className="pt-44 md:pt-52">Ceremony</h2>
          </div>
          <div className="contentBox">
            <div>
             
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit at, iste
                possimus quis sapiente voluptatibus reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <div className="imgBox">
            <img src="../vilad.jpg" alt="Mohana_sunset_trees" />
            <h2 className="pt-44 md:pt-52">Ceremony</h2>
          </div>
          <div className="contentBox">
            <div>
             
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit at, iste
                possimus quis sapiente voluptatibus reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <div className="imgBox">
            <img src="../vilad.jpg" alt="Mohana_sunset_trees" />
            <h2 className="pt-44 md:pt-52">Ceremony</h2>
          </div>
          <div className="contentBox">
            <div>
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit at, iste
                possimus quis sapiente voluptatibus reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <div className="imgBox">
            <img src="../vilad.jpg" alt="Mohana_sunset_trees" />
            <h2 className="pt-44 md:pt-52">Ceremony</h2>
          </div>
          <div className="contentBox">
            <div>
             
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit at, iste
                possimus quis sapiente voluptatibus reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <div className="imgBox">
            <img src="../vilad.jpg" alt="Mohana_sunset_trees" />
            <h2 className="pt-44 md:pt-52">Ceremony</h2>
          </div>
          <div className="contentBox">
            <div>
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit at, iste
                possimus quis sapiente voluptatibus reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="card">
        <div className="box">
          <div className="imgBox">
            <img src="../vilad.jpg" alt="Mohana_sunset_trees" />
            <h2 className="pt-44 md:pt-52">Ceremony</h2>
          </div>
          <div className="contentBox">
            <div>
             
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit at, iste
                possimus quis sapiente voluptatibus reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Repeat the above structure for each card */}
    </Container>
  );
};

export default Cards;
