import advert from '../../assets/adpic.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Hero = () => {
  const [heroFeatured, setHeroFeatured] = useState([]);
  const [otherPosts, setOtherPosts] = useState([]);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const heroRes = await csrfAxios.get(`https://api.eyesharknews.com/articles/api/posts/hero/featured`);
        setHeroFeatured(heroRes.data);
        const otherRes = await csrfAxios.get(`https://api.eyesharknews.com/articles/api/posts/hero`);
        const nonFeaturedPosts = otherRes.data.filter(post => !post.featured);
        const remainingPosts = nonFeaturedPosts.slice(0, 4);
        setOtherPosts(remainingPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchHeroData();
  }, []);

  return (
    <div>
      <div className="bg-gray-50 py-4 hidden">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="mx-auto table text-center text-sm">
            <a className="uppercase" href="#">Advertisement</a>
            <a href="#">
              <img src={advert} alt="advertisement area" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white pt-16 py-6">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Hero Featured Posts */}
            <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              {heroFeatured.map(post => (
                <div key={post.id} className="relative hover-img max-h-98 overflow-hidden mb-4">
                  <a href="#">
                    <img className="w-full h-auto" src={post.image} alt={post.title} />
                  </a>
                  <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                    <Link to={`/articles/${post.slug}`}>
                      <h2 className="text-3xl font-bold capitalize text-white mb-3">{post.title}</h2>
                    </Link>
                    <p className="text-gray-100 hidden sm:inline-block">{post.description}</p>
                    <div className="pt-2">
                      <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-800 mr-2"></div>{post.category}</div>
                    </div>

              <div className="relative hover-img max-h-98 overflow-hidden">
                <a href="#">
            
                  <img className="max-w-full w-full mx-auto h-auto text-gray-500" src={img8} />
                </a>
                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  <Link to='/articles'>
                    <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designers for This Best-Selling</h2>
                  </Link>
                  <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpful for generating default content..</p>
                  <div className="pt-2">
                    <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-green-800 mr-2"></div>World News</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Other Posts */}
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="flex flex-row flex-wrap pb-8">
                {otherPosts.map(post => (
                  <article key={post.id} className="flex-shrink max-w-full w-full sm:w-1/2 p-2">
                    <div className="relative hover-img max-h-48 overflow-hidden">
                      <a href="#">
                        <img className="w-full h-auto" src={post.image} alt={post.title} />
                      </a>
                      <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                        <Link to={`/articles/${post.slug}`}>
                          <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">{post.title}</h2>
                        </Link>
                        <div className="pt-1">
                          <div className="text-gray-300"><div className="inline-block h-3 
                          border-l-2 border-red-800 mr-2 font-bold"></div>{post.category}</div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
