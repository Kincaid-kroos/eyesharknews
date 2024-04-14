
import advert from  '../../assets/adpic.jpg';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';


const NewsBlock = () => {

  const [business, setBusiness] = useState([]);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const heroRes = await csrfAxios.get(`https://api.eyesharknews.com/articles/api/posts/category/business`);
        setBusiness(heroRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchBusinessData();
  }, []);


  return (
    <div className="bg-white">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          {/* Left */}
          <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold">
              <div className="inline-block h-3 border-l-2 border-blue-800 mr-2"></div>Business
              </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
              {/* Replace the image source URLs with appropriate imports */}
              {/* Each news item */}
              {business.map((item, index) => (
                <div key={index} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href={item.link}>
                      <img className="max-w-full w-full mx-auto" src={item.image} alt={item.title} />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <Link to={`/articles/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">{item.description}</p>
                      <a className="text-gray-500" href='/'><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>{item.category}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
            <div className="w-full bg-gray-50 h-full">
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
    </div>
  );
}

export default NewsBlock;
