const Header = () => {
    return (
        <>
            <div className="hidden lg:block mb-6 pt-36 ">
                <div className="relative h-screen">
                    <div className="h-full bg-center bg-cover" style={{ backgroundImage: 'url("/collage2.svg")' }}>
                        
                    </div>

                </div>


            </div>

            <div className='block lg:hidden'>
                <div className=" h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/collage-p2.svg")' }}>
                

                </div>

            </div>
        </>
    );
};
  
  export default Header;