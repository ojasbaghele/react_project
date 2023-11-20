import React from 'react'
import './ReactLayout.css';
import Header from './Header';
import Navigatation from './Navigatation';
import Main from './Main';
import SidebarRight from './SidebarRight';
// import Sidebarleft from './SidebarLeft';
import Footer from './Footer';
import AboutPage from './About';
import { 
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';


export default function ReactLayout() {
  return (
    <>
        <BrowserRouter>
    <p class="text">ReactLayout - Page Layout Divided in Components</p>
    <div class="header"> <Header/> </div>
    <div class="navbar"> <Navigatation/> </div>
    <div class="main">
        {/* <div class="left"> <Sidebarleft/> </div> */}
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      </Routes>
        <div class="right"> <SidebarRight/> </div>
    </div>
    <div class="footer"> <Footer/></div>
    </BrowserRouter>
    </> 
  )
}