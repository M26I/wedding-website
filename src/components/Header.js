const Header = () => {
    return (
        <>
            <div className="hidden md:block  lg:pt-36 pt-20 ">
                <div className="relative h-screen">
                    <div className="h-full bg-center bg-cover" style={{ backgroundImage: 'url("/collage2.svg")' }}>
                        
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
      

                </div>


            </div>

            <div className='block md:hidden'>
                <div className=" h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/head-p.svg")' }}>
                

                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>

            </div>
        </>
    );
};
  
  export default Header;