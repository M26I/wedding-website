const Header = () => {
    return (
        <>
            <div className="hidden md:block mb-6 opacity-95">
                <div className="relative h-screen">
                    <div className="h-full bg-center bg-cover" style={{ backgroundImage: 'url("/header2.svg")' }}>
                        
                    </div>

                </div>


            </div>

            <div className='block md:hidden'>
                <div className=" h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/phone-header.svg")' }}>
                

                </div>

            </div>
        </>
    );
};
  
  export default Header;