import React from 'react';
import { useTranslation } from 'next-i18next';
import { Cormorant_Upright } from 'next/font/google';
import Image from 'next/image';

const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})

const VerticalTimeline = () => {
  const { t } = useTranslation('common');

  const timelineData = [
    {
      time: '00:00',
      title: 'Ceremony',
      description: t('CEREMONY'),
      icon: '/ceremony.svg',
    },
    {
      time: '00:00',
      title: 'Photos',
      description: t("PHOTOS"),
      icon: '/photos.svg',
    },
    {
      time: '00:00',
      title: 'Welcome',
      description: t("WELCOME"),
      icon: '/welcome.svg',
    },
    {
      time: '00:00',
      title: 'Dinner',
      description: t("DINNER"),
      icon: '/dinner.svg',
    },
    {
      time: '00:00',
      title: 'Cutting cake',
      description: t("CUTTING_CAKE"),
      icon: '/cake.svg',
    },
    {
      time: '00:00',
      title: 'First dance',
      description: t("FIRST_DANCE"),
      icon: '/dance.svg',
    },
    {
      time: '00:00',
      title: 'Party',
      description: t("PARTY"),
      icon: '/party.svg',
    },


  ];

  return (
    <section className={corm.className}>
      <div className=" mx-auto w-5/6 md:w-2/6  ">
        {timelineData.map((event, index) => (
          <div key={index} className="grid grid-cols-3 md:gap-4 gap-2">
            <div className="md:col-span-1 md:text-right text-center md:pr-4 py-4">
              <p className="font-bold text-textb text-xl md:text-2xl">{event.time}</p>
            </div>

            <div className="  pb-4  flex justify-center">
              <Image
                src={event.icon}
                alt={event.title}
                width={10}
                height={10}
                className='w-10 h-10 md:w-16 md:h-16'
              />
            </div>


            <div className="py-4 col-span-1">
              <h2 className="text-md md:text-2xl text-textb font-semibold text-left">{event.description}</h2>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalTimeline;
