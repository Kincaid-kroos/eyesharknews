
import { BiSearch,  BiMenu } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-black">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex justify-between">
              <div className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center">EyeSharkNews</div>
              
              <div className="flex flex-row ">
                
                <ul className="navbar hidden lg:flex lg:flex-row text-gray-200 text-sm items-center font-extrabold ">
  <li className="active relative border-l border-gray-800 hover:bg-gray-900">
    <Link className="block py-3 px-6 border-b-2 border-transparent font-bold" to="/">Home</Link>
  </li>
  <li className="relative border-l border-gray-800 hover:bg-gray-900">
    <Link className="block py-3 px-6 border-b-2 border-transparent" to="/category/Sports">Sports</Link>
  </li>
  <li className="relative border-l border-gray-800 hover:bg-gray-900">
    <Link className="block py-3 px-6 border-b-2 border-transparent" to="/category/Entertainment">Entertainment</Link>
  </li>
  <li className="relative border-l border-gray-800 hover:bg-gray-900">
    <Link className="block py-3 px-6 border-b-2 border-transparent" to="/category/Business">Business</Link>
  </li>
  <li className="relative border-l border-gray-800 hover:bg-gray-900">
    <Link className="block py-3 px-6 border-b-2 border-transparent" to="/category/Tech News">Tech News</Link>
  </li>
  <li className="relative border-l border-gray-800 hover:bg-gray-900">
    <Link className="block py-3 px-6 border-b-2 border-transparent" to="/category/World News">World News</Link>
  </li>
  <li className="relative border-l border-gray-800 hover:bg-gray-900">
    <Link className="block py-3 px-6 border-b-2 border-transparent" to="/category/Politics">Politics</Link>
  </li>
  <li className="relative border-l border-gray-800 hover:bg-gray-900">
    <Link className="block py-3 px-6 border-b-2 border-transparent" to="/category/More">More</Link>
  </li>
</ul>
<div className="flex flex-row items-center text-gray-300">
                  {isSearchOpen ? (
                    <div className="search-dropdown relative border-r lg:border-l border-gray-800 hover:bg-gray-900">
                      <div className="dropdown-menu absolute left-auto right-0 top-full z-50 text-left bg-white text-gray-700 border border-gray-100 mt-1 p-3" style={{ minWidth: '15rem' }}>
                        <div className="flex flex-wrap items-stretch w-full relative">
                          <input type="text" className="flex-shrink flex-grow  max-w-full leading-5 w-px flex-1 relative py-2 px-5 text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-green-100  dark:focus:border-gray-600" name="text" placeholder="Search..." aria-label="search" />
                          <div className="flex -mr-px">
                            <button className="flex items-center py-2 px-5 -ml-1 leading-5 text-gray-100 bg-black hover:text-white hover:bg-[#9ee251] hover:ring-0 focus:outline-none focus:ring-0" type="submit">
                              <BiSearch />
                            </button>
                            <button className="flex items-center py-2 px-5 -ml-1 leading-5 text-gray-100 bg-black hover:text-white hover:bg-[#9ee251] hover:ring-0 focus:outline-none focus:ring-0" onClick={closeSearch}>
                              <RiCloseLine />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="search-dropdown relative border-r lg:border-l border-gray-800 hover:bg-gray-900">
                      <button className="block py-3 px-6 border-b-2 border-transparent" onClick={toggleSearch}>
                        <BiSearch />
                      </button>
                    </div>
                  )}

                  <div className="relative hover:bg-gray-800 block lg:hidden">
                    <button type="button" className="menu-mobile block py-3 px-6 border-b-2 border-transparent" onClick={toggleMobileMenu}>
                      <span className="sr-only"> Menu</span>
                      <BiMenu size={24} /> 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className={`side-area fixed w-full h-full inset-0 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="back-menu fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0">
          <div className="cursor-pointer text-white absolute right-64 p-2" onClick={toggleMobileMenu}>
            <RiCloseLine size={32} /> 
          </div>
        </div>

        <nav id="mobile-nav" className="side-menu flex flex-col right-0 w-64 fixed top-0 bg-[#ffffff] dark:bg-gray-200 h-full overflow-auto z-40">
          <div className="mb-auto">
            <nav className="relative flex flex-wrap">
              <div className="text-center py-4 w-full font-bold border-b border-gray-800">EyeSharkNews</div>
              <ul id="side-menu" className="w-full float-none flex flex-col">
              <li className="relative">
                <Link to="/" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">Home</Link>
              </li>
              <li className="relative">
                <Link to="/category/sports" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">Sports</Link>
              </li>
              <li className="relative">
                <Link to="/category/Entertainment" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">Entertainment</Link>
              </li>
              <li className="relative">
                <Link to="/category/Business" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">Business</Link>
              </li>
              <li className="relative">
                <Link to="/category/Tech news" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">Tech News</Link>
              </li>
              <li className="relative">
                <Link to="/category/Politics" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">Politics</Link>
              </li>
              <li className="relative">
                <Link to="/category/World news" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">World News</Link>
              </li>
              <li className="relative">
                <Link to="/category/More" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">More</Link>
              </li>
            </ul>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
