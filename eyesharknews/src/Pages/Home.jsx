import Hero from './Homepages/hero.jsx';
import Business from './Homepages/business.jsx';
import Latest from './Homepages/latest.jsx';
import World from './Homepages/world.jsx';
import More from './Homepages/More.jsx';

const Home = () => {
  return (
    <div>
        <Hero />
        <Business />
        <World />
        <More />
        <Latest />
    </div>
  )
}

export default Home