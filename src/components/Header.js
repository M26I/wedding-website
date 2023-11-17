import Image from "next/image";
const Header = () => {
    return (
        <>
            <div className="hidden md:block lg:pt-36 pt-20">
  <div className="relative ">
    <Image
      src="/collage4.svg"
      alt="Collage"
      width={1550}
      height={1000}
      priority={true}
      style={{ objectFit: 'cover' }}
    />
   
  </div>
</div>

            <div className='block md:hidden'>
                <div className=" h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/head-p.svg")' }}>
                

                </div>
                <div className="absolute inset-0 bg-black opacity-40"></div>

            </div>
        </>
    );
};
  
  export default Header;