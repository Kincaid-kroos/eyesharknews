import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Scroll from './scroll.jsx';


const Footer = () => {
  return (
    <div>
    <footer className="bg-black text-gray-300">
      {/* Footer content */}
      <div id="footer-content" className="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
          <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
            <div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
              <div className="flex items-center mb-2">
                <span className="text-3xl leading-normal mb-2 font-bold text-gray-100 mt-2">Eyeshark News</span>
              </div>
              <p>We provide the latest news and articles across the globe.</p>
              <ul className="space-x-3 mt-6 mb-6 Lg:mb-0">
                <li className="inline-block">
                  <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://facebook.com" title="Facebook">
                    <FaFacebook size={32} />
                  </a>
                </li>
                <li className="inline-block">
                  <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://twitter.com" title="Twitter">
                    <FaTwitter size={32} />
                  </a>
                </li>
                <li className="inline-block">
                  <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://youtube.com" title="Youtube">
                    <FaYoutube size={32} />
                  </a>
                </li>
                <li className="inline-block">
                  <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://instagram.com" title="Instagram">
                    <FaInstagram size={32} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
               <div className="flex flex-wrap flex-row">
                   <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                     <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Product</h4>
              <ul>
          <li className="py-1 hover:text-white"><a href="#">Landing</a></li>
          <li className="py-1 hover:text-white"><a href="#">Pages</a></li>
          <li className="py-1 hover:text-white"><a href="#">Sections</a></li>
          <li className="py-1 hover:text-white"><a href="#">Sign Up</a></li>
          <li className="py-1 hover:text-white"><a href="#">Login</a></li>
        </ul>
      </div>
      <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
        <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Support</h4>
        <ul>
          <li className="py-1 hover:text-white"><a href="#">Documentation</a></li>
          <li className="py-1 hover:text-white"><a href="#">Changelog</a></li>
          <li className="py-1 hover:text-white"><a href="#">Tools</a></li>
          <li className="py-1 hover:text-white"><a href="#">Icons</a></li>
        </ul>
      </div>
      <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
        <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Includes</h4>
        <ul>
          <li className="py-1 hover:text-white"><a href="#">Utilities</a></li>
          <li className="py-1 hover:text-white"><a href="#">Components</a></li>
          <li className="py-1 hover:text-white"><a href="#">Example code</a></li>
          <li className="py-1 hover:text-white"><a href="#">Updates</a></li>
        </ul>
      </div>
      <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
        <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Legal</h4>
        <ul>
          <li className="py-1 hover:text-white"><a href="#">Privacy Policy</a></li>
          <li className="py-1 hover:text-white"><a href="#">Terms of Use</a></li>
          <li className="py-1 hover:text-white"><a href="#">License</a></li>
          <li className="py-1 hover:text-white"><a href="#">GDPR</a></li>
        </ul>
      </div>
    </div>

</div>
</div>
</div>
</div>

      {/* Start footer copyright */}
      <div className="footer-dark">
        <div className="container py-4 border-t border-gray-200 border-opacity-10">
          <div className="row">
            <div className="col-12 col-md text-center">
              <p className="d-block my-3">Copyright © EyesharkNews | All rights reserved.</p>
            </div>
          </div>
        </div>
        <Scroll />
      </div>
      {/* End footer copyright */}
     
    </footer>
   
    {/* end footer */}
    </div>
  );
}

export default Footer;
