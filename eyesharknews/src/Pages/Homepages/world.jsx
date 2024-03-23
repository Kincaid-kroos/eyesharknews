import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import img8 from '../../assets/img8.jpg';
import img2 from '../../assets/img2.jpg';
import img14 from '../../assets/img14.jpg';
import img25 from '../../assets/img25.jpg';

const Spile = () => {
  
  const items = [
    {
      imageSrc: img8,
      title: "5 Tips to Save Money Booking Your Next Hotel Room",
      category: "World News",
      link: "#",
      categoryLink: "#"
    },
    {
      imageSrc: img14,
      title: "5 Tips to Save Money Booking Your Next Hotel Room",
      category: "World News",
      link: "#",
      categoryLink: "#"
    },
    {
      imageSrc: img2,
      title: "5 Tips to Save Money Booking Your Next Hotel Room",
      category: "World News",
      link: "#",
      categoryLink: "#"
    },
    {
      imageSrc: img25,
      title: "5 Tips to Save Money Booking Your Next Hotel Room",
      category: "World News",
      link: "#",
      categoryLink: "#"
    },
  ];

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
        {items.map((item, index) => (
          <SplideSlide key={index}>
            {/* Apply consistent right margin to each slide */}
            <div className="mx-auto p-3 max-w-xs sm:max-w-full"> {/* Adjust the max width of the slide */}
              <div className="hover-img bg-white">
                <a href={item.link}>
                  <img className="max-w-full w-full mx-auto" src={item.imageSrc} alt={item.title} />
                </a>
                <div className="py-3 px-6">
                  <h3 className="text-lg font-bold leading-tight mb-2">
                    <a href={item.link}>{item.title}</a>
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
