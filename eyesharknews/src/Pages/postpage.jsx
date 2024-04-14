import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import advert from '.././assets/adpic.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';

const PostPage = () => {
  const [postData, setPostData] = useState({
    title: "",
    content: ""
  });

  const { slug } = useParams();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await csrfAxios.get(`https://api.eyesharknews.com/articles/api/posts/${slug}`);
        console.log('little data tuone', response.data)
        setPostData(response.data);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };
    fetchPostData();
    fetchPopularData();
  }, [slug]);

  const createBlog = () => {
    return { __html: postData.content };
  };


  const [popular, setPopular] = useState([]);

  const fetchPopularData = async () => {
    try {
      const heroRes = await csrfAxios.get(`https://api.eyesharknews.com/articles/api/posts/popular`);
      setPopular(heroRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  return (
    <div className="bg-gray-50 py-6 md:px-10">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">

          <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
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
            <div className="leading-relaxed pb-4" dangerouslySetInnerHTML={createBlog()} />
          </div>


          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-last">
            <div className="w-full bg-white">
              <div className="mb-6">
                <div className="p-4 bg-gray-100">
                  <h2 className="text-lg font-bold">Most Popular</h2>
                </div>
                <ul className="post-number">
                  {popular.map((item, index) => (
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
