import './App.css'; 
import Header from './components/Header'
import NewFutures from './components/NewFutures'; 
import Feature from './components/Feature'; 
import Sys from './components/Sys' 
import Cuttingedge from  './components/Cuttingedge'
import FrequentQuestions from './components/FrequentQuestions' 
import StillQuestions from './components/StillQuestions'
import LatestBlog from './components/LatestBlogs' 
import FreeTrail  from './components/FreeTrail' 
import Footer from './components/Footer'
function App() {
  return (
    <div className="projectBackground">  
    <Header/> 
     <NewFutures/>
       <Feature/> 
       <Sys/> 
       <Cuttingedge/> 
       <FrequentQuestions/> 
       <StillQuestions/> 
       <LatestBlog/> 
       <FreeTrail /> 
       <Footer/>
    </div>
  );
}

export default App;
