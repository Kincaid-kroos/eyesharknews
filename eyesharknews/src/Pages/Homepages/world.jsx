import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';


const Spile = () => {

  const [world, setWorld] = useState([]);

  useEffect(() => {
    const fetchWorldData = async () => {
      try {
        const heroRes = await csrfAxios.get(`https://api.eyesharknews.com/articles/api/posts/category/worldnews`);
        setWorld(heroRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchWorldData();
  }, []);
  
  

  return (
    <div className='md:px-10 md:py-6'>
      <div className="w-full pt-4  mx-3 md:mx-10 ">
        <h2 className="text-gray-800 text-2xl font-bold">
          <div className="inline-block h-3 border-l-2 border-blue-800 mr-2"></div>World News
        </h2>
      </div>
      <Splide
        options={{
          type: 'slide',
          rewind: true,
          perPage: 3,
          perMove: 1,
          gap: '0.5rem',
          pagination: false,
          breakpoints: {
            768: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
        className="splide-container" // Add class to Splide component
      >
        {world.map((item, index) => (
          <SplideSlide key={index}>
            {/* Apply consistent right margin to each slide */}
            <div className="mx-auto p-3 max-w-xs sm:max-w-full"> {/* Adjust the max width of the slide */}
              <div className="hover-img bg-white">
                <a href={item.link}>
                  <img className="max-w-full w-full mx-auto" src={item.image} alt={item.title} />
                </a>
                <div className="py-3 px-6">
                  <h3 className="text-lg font-bold leading-tight mb-2">
                  <Link to={`/articles/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <a className="text-gray-500" href={item.categoryLink}>
                    <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                    {item.category}
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Spile;
