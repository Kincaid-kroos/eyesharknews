import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import advert from  '.././assets/adpic.jpg';
const postData = {
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    content: `
      <p>Booking a hotel room can be expensive if you don't plan ahead. Here are 5 tips to help you save money on your next hotel booking:</p>
      
      <h2>1. Use Price Comparison Websites</h2>
      
      <p>Before booking a hotel room, make sure to check multiple price comparison websites like Booking.com, Expedia, and Hotels.com. These websites often offer discounts and deals that you may not find elsewhere.</p>
      
      <h2>2. Book During Off-Peak Seasons</h2>
      
      <p>Hotels tend to have lower prices during off-peak seasons when there is less demand. Consider booking your hotel stay during these times to take advantage of lower rates.</p>
      
      <h2>3. Look for Package Deals</h2>
      
      <p>Many hotels offer package deals that include accommodations, meals, and activities at a discounted rate. Look for these deals to save money on your overall travel expenses.</p>
      
      <h2>4. Join Loyalty Programs</h2>
      
      <p>Joining hotel loyalty programs can earn you points and rewards that can be redeemed for free nights or room upgrades. Take advantage of these programs to maximize your savings.</p>
      
      <h2>5. Negotiate with the Hotel</h2>
      
      <p>Don't be afraid to negotiate with the hotel directly, especially if you're booking last minute or staying for an extended period. Hotels may be willing to offer discounts or perks to fill empty rooms.</p>
      
      <p>Following these tips can help you save money on your next hotel room booking, leaving you with more money to spend on other aspects of your trip!</p>
      
      <!-- Use the image source directly as a string -->
      <img src=".././assets/img25.jpg" alt="Hotel Room" />
    `
};

const popularItems = [
    { title: "Why Manchester United has the biggest fanbase in the world" },
    { title: "Meet The Man Who Designed The Simping Lady" },
    { title: "2020 Audi R8 Spyder spy shots release in Manchester" },
    { title: "Lamborghini makes  GT3 racer faster for 2024" },
    { title: "Why Tesla shares is worth investing in" }
  ];


const PostPage = () => {
  return (
    <div className="bg-gray-50 py-6 md:px-10">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">

        <div className="flex flex-row flex-wrap">
         <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden"> 
          <div className="flex-shrink max-w-full w-full overflow-hidden">
            <div className="w-full pt-12 mb-3">
              <h2 className="text-gray-800 text-3xl font-bold">
              <div className="inline-block h-3 border-l-2 border-blue-800 mr-2"></div>{postData.title}
              </h2>
            </div>

            <ul className=" space-x-3 md:space-x-6 mt-6 mb-6 Lg:mb-0">
                <li className="inline-block">
                  <a target="_blank" className="text-blue-600 hover:text-[#ff3f19]" rel="noopener noreferrer" href="https://facebook.com" title="Facebook">
                    <FaFacebook size={32} />
                  </a>
                </li>
                <li className="inline-block">
                  <a target="_blank" className="text-blue-600 hover:text-[#ff3f19]" rel="noopener noreferrer" href="https://twitter.com" title="Twitter">
                    <FaTwitter size={32} />
                  </a>
                </li>
                <li className="inline-block">
                  <a target="_blank" className="text-blue-600 hover:text-[#ff3f19]" rel="noopener noreferrer" href="https://youtube.com" title="Youtube">
                    <FaYoutube size={32} />
                  </a>
                </li>
                <li className="inline-block">
                  <a target="_blank" className="text-blue-600 hover:text-[#ff3f19]" rel="noopener noreferrer" href="https://instagram.com" title="Instagram">
                    <FaInstagram size={32} />
                  </a>
                </li> 
              </ul>

            <div className="leading-relaxed pb-4" dangerouslySetInnerHTML={{ __html: postData.content }} />
          </div>
          </div>

          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-last">
            <div className="w-full bg-white">
              <div className="mb-6">
                <div className="p-4 bg-gray-100">
                  <h2 className="text-lg font-bold">Most Popular</h2>
                </div>
                <ul className="post-number">
                
                  {popularItems.map((item, index) => (
                    <li key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-sm py-6 sticky">
              <div className="w-full text-center">
                <a className="uppercase" href="#">Advertisement</a>
                <a href="#">
                  <img className="mx-auto" src={advert} alt="advertisement area" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PostPage;
