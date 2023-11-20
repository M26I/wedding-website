import { useState, useEffect } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { Cormorant_Upright } from "next/font/google";
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";






const corm = Cormorant_Upright({
  weight: "400",
  subsets: ['latin'],
})




export default function Navbar() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState(router.locale);

  useEffect(() => {
    setSelectedLocale(router.locale);
  }, [router.locale]);

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      null,
      { locale: newLocale }
    );
    setSelectedLocale(newLocale);
  };










  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setDropdownOpen(!isDropdownOpen);
    }
  };
  const [top, setTop] = useState(true);
  const closeMenu = () => {
    setShowMenu(false);
  };


  const [showMenu, setShowMenu] = useState(false);


  let menu;


  if (showMenu) {
    menu = (
      <div className="h-screen w-full bg-maingreen z-50 fixed top-16 ">
        <div className={corm.className}>
          <div className="pt-4 mx-auto">
            <div className="p-2">
              <ul className="row text-textb font-bold">
                <Link
                  href="/rsvp"
                  onClick={closeMenu}

                  className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-stone-200 "
                ><span className="border-2 border-textb p-2">RSVP</span>

                </Link>
                <Link
                  href="/when&where"

                  onClick={closeMenu}
                  className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-stone-200"
                >
                  {t("WHEN_WHERE")}
                </Link>
                <Link
                  href="/details"

                  onClick={closeMenu}
                  className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-stone-200"
                >
                  {t("DETAILS")}
                </Link>
                <Link
                  href="/gallery"

                  onClick={closeMenu}
                  className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-stone-200"
                >
                  Gallery
                </Link>





              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }


  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);


  return (
    <div className={corm.className}>
      <nav
        className={`fixed w-full z-50 transition duration-300 ease-in-out text-textb bg-maingreen hidden md:block z-50`}
      >
        <div className="w-5/6 mx-auto">
          <div className="hidden lg:visible w-full block flex-grow lg:flex lg:items-center lg:w-auto grid grid-cols-2 text-text-dark font-bold  py-6 ">
            <div className="text-left">
              <Link
                title=" home link"
                href="/"
                aria-label="home link"
              >
                <div
                  className="logo w-40 h-28 "
                  title=" home link"
                  alt=" home link"
                ></div>
              </Link>
            </div>
            <div className="text-2xl font-bold lg:flex-grow text-right">
              <Link
                href="/rsvp"
                className="px-4  block mt-4 lg:inline-block lg:mt-0 hover:text-offw border-2 border-textb hover:border-offw"

              >
                RSVP

              </Link>
              <Link
                href="/when&where"
                className="px-4  block mt-4 lg:inline-block lg:mt-0 hover:text-offw"

              >
                {t("WHEN_WHERE")}
              </Link>
              <Link
                href="/details"
                className="px-4  block mt-4 lg:inline-block lg:mt-0 hover:text-offw "

              >
                {t("DETAILS")}
              </Link>




              <select
                className='bg-maingreen  cursor-pointer text-offw'
                value={selectedLocale}
                onChange={handleLocaleChange}
              >
                <option className="p-2 text-lg" value='en'>EN</option>
                <option className="p-2 text-lg" value='hr'>HR</option>
              </select>







            </div>
          </div>
        </div>
      </nav>


      <nav
        className={`fixed w-full z-50 bg-maingreen transition duration-300 ease-in-out block lg:hidden z-50`}
      >
        <div className="w-screen flex items-center justify-between h-16 md:h-20">
          <div className="p-5">
            <Link
              href="/"
              title=" home link"
              aria-label="home link"
            >
              <div
                className="logo2 w-14 h-20 "
                aria-label="home link"
                title=" home link"
                alt=" home link"
              ></div>
            </Link>
          </div>
          <select
            className='bg-maingreen  cursor-pointer mr-20 text-textb text-xl  '
            value={selectedLocale}
            onChange={handleLocaleChange}
          >
            <option value='en'>en</option>
            <option value='hr'>hr</option>
          </select>
          <div className="p-5 right-0 fixed">
            <div
              className="menu-btn"
              onClick={() => setShowMenu(!showMenu)}
              aria-label="Toggle Mobile Menu"
            >
              <div>
                <Hamburger isOpen={showMenu} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {menu}
    </div>
  );
}

