import React from 'react';
import { Cormorant_Upright } from "next/font/google";
import { useTranslation } from 'next-i18next';

const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})

export default function ImageUpload() {
  const { t } = useTranslation('common');
  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', e.target[0].files[0]);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,

        headers: {

        },
      });

      if (response.ok) {
        console.log('Image uploaded successfully');

        const netlifyBuildHookUrlImage = "https://api.netlify.com/build_hooks/6555dd753639bf618062dbaa";
        await fetch(netlifyBuildHookUrlImage, { method: 'POST' });


        window.location.reload();

      } else {
        console.error('Error uploading image:', response.statusText);

      }
    } catch (error) {
      console.error('Error uploading image:', error.message);

    }
  };

  return (
    <div className={corm.className}>
      <div className="mx-auto md:w-2/3 w-5/6 p-4 rounded-lg shadow-lg border-2 border-textb bg-maingreen mt-10 md:mt-16">
        <form encType="multipart/form-data" onSubmit={handleUpload} className="flex flex-col items-center">
          <input
            type="file"
            name="image"
            className="w-full md:w-auto border border-textb bg-offw p-2 mb-4"
          />

          <button
            type="submit"
            className="w-auto mt-3 bg-textb border border-maingreen text-maingreen font-semibold rounded p-2 hover:border hover:border-textb hover:bg-maingreen hover:text-textb cursor-pointer"
          >
            {t("UPLOAD")}
          </button>
        </form>
      </div>
    </div>


  );
};


