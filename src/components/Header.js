const Header = () => {
    return (
        <>
            <div className="hidden md:block mb-6 opacity-90">
                <div className="relative h-screen">
                    <div className="h-full bg-center bg-cover" style={{ backgroundImage: 'url("/header.jpg")' }}></div>

                </div>


            </div>

            <div className='block md:hidden'>
                <div className=" h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/h-phone.png")' }}>

                </div>

            </div>
        </>
    );
};
  
  export default Header;