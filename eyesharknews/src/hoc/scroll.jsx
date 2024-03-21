
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Scroll = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link href="#" className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden" aria-label="Scroll To Top" onClick={handleScrollToTop}>
      <AiOutlineArrowUp className="w-6 h-6" />
    </Link>
  );
};

export default Scroll;
