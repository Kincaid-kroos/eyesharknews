import advert from  '../../assets/adpic.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';


const Latest = () => {

  const [latestFeatured, setLatestFeatured] = useState([]);
  const [otherPosts, setOtherPosts] = useState([]);
  const [popular, setPopular] = useState([]);

  const fetchPopularData = async () => {
    try {
      const heroRes = await csrfAxios.get(`https://api.eyesharknews.com/articles/api/posts/popular`);
      setPopular(heroRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const heroRes = await csrfAxios.get(`https://api.eyesharknews.com/articles/api/posts/latest/featured`);
        setLatestFeatured(heroRes.data);
        const otherRes = await csrfAxios.get(`https://api.eyesharknews.com/articles/api/posts/latest`);
        const nonFeaturedPosts = otherRes.data.filter(post => !post.featured);
        const remainingPosts = nonFeaturedPosts.slice(0, 6);
        setOtherPosts(remainingPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchLatestData();
    fetchPopularData();
  }, []);
  
  



  return (
    <div className="bg-gray-50 py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold">
              <div className="inline-block h-3 border-l-2 border-blue-800 mr-2"></div>
                Latest news
              </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
            {latestFeatured.map((item, index) => (
              <div key={index} className="flex-shrink max-w-full w-full px-3 pb-5">
                <div className="relative hover-img max-h-98 overflow-hidden">
                  <a href="#">
                    <img className="max-w-full w-full mx-auto h-auto" src={item.image} alt="Image description" />
                  </a>
                  <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                    <Link to={`/articles/${item.slug}`}>
                      <h2 className="text-3xl font-bold capitalize text-white mb-3">{item.title}</h2>
                    </Link>
                    <p className="text-gray-100 hidden sm:inline-block">{item.description}</p>
                    <div className="pt-2">
                      <div className="text-gray-100">
                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                        {item.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
              {/* Render Small Items */}
              {otherPosts.map((item, index) => (
                <div key={index} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="#">
                      <img className="max-w-full w-full mx-auto" src={item.image} alt="alt title" />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">{item.title}</a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">{item.description}</p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        {item.category}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-first">
            <div className="w-full bg-white">
              <div className="mb-6">
                <div className="p-4 bg-gray-100">
                  <h2 className="text-lg font-bold">Most Popular</h2>
                </div>
                <ul className="post-number">
                  {/* Render Sidebar Items */}
                  {popular.map((item, index) => (
                    <li key={index} className="border-b border-gray-100 hover:bg-gray-50">
                       <Link to={`/articles/${item.slug}`} className="text-lg font-bold
                        px-6 py-3 flex flex-row items-center" href="#">{item.title}</Link>
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
};

export default Latest;
