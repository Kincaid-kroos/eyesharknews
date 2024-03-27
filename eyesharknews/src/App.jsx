import Home from "./Pages/Home.jsx";
import Navbar from './hoc/navbar.jsx';
import Footer from './hoc/footer.jsx';
import Category from './Pages/category.jsx';
import Post from './Pages/postpage.jsx';
import SignUp from './Pages/signup.jsx'
import SignIn from './Pages/signin.jsx';
//import Scroll from './hoc/scroll.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <div className="bg-[#56da35] text-left justify-end">
  <Router>
    <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/articles' element={<Post />} />
          <Route path='/sign in' element={<SignIn />} />
          <Route path='/sign up' element={<SignUp />} />
          
         
         
        
          
          
        </Routes>

        
        <Footer />
        

    </Router>

        </div>

        
  )
}

export default App
