import img8 from '../../assets/img8.jpg';
import img2 from '../../assets/img2.jpg';
import img14 from '../../assets/img14.jpg';
import img25 from '../../assets/img25.jpg';
import img5 from  '../../assets/img5.jpg';



const Hero = () => {
  return (
    <div >
      {/* hero big grid */}
      <div className="bg-white pt-16 py-6">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          {/* big grid 1 */}
          <div className="flex flex-row flex-wrap">
            {/* Start left cover */}
            <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              <div className="relative hover-img max-h-98 overflow-hidden">
                <a href="#">
            
                  <img className="max-w-full w-full mx-auto h-auto text-gray-500" src={img8} />
                </a>
                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  <a href="#">
                    <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                  </a>
                  <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpful for generating default content..</p>
                  <div className="pt-2">
                    <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-green-800 mr-2"></div>World News</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Start box news */}
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
                <article className="flex-shrink max-w-full w-full sm:w-1/2 p-2">
                  <div className="relative hover-img max-h-48 overflow-hidden">
                    <a href="#">
                      
                      <img className="max-w-full w-full mx-auto h-auto text-gray-500" src={img2} />
                    </a>
                    <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                      <a href="#">
                        <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">News magazines are becoming obsolete, replaced by gadgets</h2>
                      </a>
                      <div className="pt-1">
                        <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-green-800 mr-2"></div>Politics</div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink max-w-full w-full sm:w-1/2 p-2">
                  <div className="relative hover-img max-h-48 overflow-hidden">
                    <a href="#">
                      
                      <img className="max-w-full w-full mx-auto h-auto text-gray-800" src={img14} />
                    </a>
                    <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                      <a href="#">
                        <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">News magazines are becoming obsolete, replaced by gadgets</h2>
                      </a>
                      <div className="pt-1">
                        <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-green-800 mr-2"></div>Tech News</div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink max-w-full w-full sm:w-1/2 p-2">
                  <div className="relative hover-img max-h-48 overflow-hidden">
                    <a href="#">
                      
                      <img className="max-w-full w-full mx-auto h-auto text-gray-800" src={img25} />
                    </a>
                    <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                      <a href="#">
                        <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">1o ways to make your business more profitable</h2>
                      </a>
                      <div className="pt-1">
                        <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-green-800 mr-2"></div>Business</div>
                      </div>
                    </div>
                  </div>
                </article>
                
                <article className="flex-shrink max-w-full w-full sm:w-1/2 p-2">
                <div className="relative hover-img max-h-48 overflow-hidden">
                  <a href="#">
                    <img className="max-w-full w-full mx-auto h-auto" src={img5} alt="Image description" />
                  </a>
                  <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 className="text-lg font-bold capitalize leading-tight text-[#ffffff] mb-1">Online taxi users are increasing drastically ahead of the new year</h2>
                    </a>
                    <div className="pt-1">
                      <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-green-800 mr-2"></div>More</div>
                    </div>
                  </div>
                </div>
              </article>          
               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
