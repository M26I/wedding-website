import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="hidden md:block lg:pt-36 pt-20">
        <div className="relative ">
          <Image
            src="/collage4.webp"
            alt="Collage"
            width={1550}
            height={1000}

            style={{ objectFit: 'cover'; width: 100%; }}
          />

        </div>
      </div>

      <div className='block md:hidden h-screen bg-center'>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image
            src="/head-ph.webp"
            fill
            alt='collage'
            style={{ objectFit: "cover" }} />


        </div>




      </div>
    </>
  );
};

export default Header;
