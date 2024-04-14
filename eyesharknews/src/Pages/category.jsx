import advert from '.././assets/adpic.jpg';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Category = () => {
  const { categoryName } = useParams();
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await csrfAxios.get(`https://api.eyesharknews.com/articles/api/posts/category/${categoryName}`);
        setNewsItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryData();
  }, [categoryName]);

  if (loading) {
    return (
      <div className='bg-white p-32 flex justify-center items-center'>
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-800 h-32 w-32"></div>
      </div>
    );
  }

  if (newsItems.length === 0) {
    return (
      <div className='bg-white p-32 flex justify-center items-center'>
        <p className="text-gray-500 text-2xl font-semibold">No articles found for this category.</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
       <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap ">
          {/* Left */}
          <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div className="w-full pt-14">
              <h2 className="text-gray-800 text-2xl font-bold">
                <div className="inline-block h-3 border-l-2 border-blue-800 mr-2"></div> {categoryName}
              </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
              {/* Each news item */}
              {newsItems.map((item, index) => (
                <div key={index} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                  <Link to={`/articles/${item.slug}`}>
                      <img className="max-w-full w-full mx-auto" src={item.image} alt={item.title} />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <Link to={`/articles/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">{item.description}</p>
                      <a className="text-gray-500" href={item.categoryLink}><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>{item.category}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 lg:order-last">
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

export default Category;
