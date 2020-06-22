import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainCover from './Components/MainCover/MainCover'
import SlideShow from './Components/SlideShow/SlideShow'
import MainImage from './Components/MainImage/MainImage' 

function App() {
  return (
    <div className="container">
       <header className="header">
         <nav>
            <div className="flex-container" >
              <img className="logo" src={require("./photography.png")}></img>
              <h2 className="logo-text">Akram's Gallery</h2>

              
            </div>
          
           <ul class="nav-list">
                    <div class="menu-icons close">
                        <i class="icon ion-md-close"></i>
                    </div>
                    <li class="nav-item">
                        <a href="#" class="nav-link current">Home</a> 
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Destinations</a> 
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Pricing</a> 
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">booking</a> 
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">About</a> 
                    </li>
                </ul>
         </nav>
          <div className="background">
            <MainCover/>
          </div>
       </header>
       <main>
         <div className="sld-container">
           <SlideShow></SlideShow>
           <MainImage display={} />
           <button className="next-slide" >
             <img className="next-image-1"src={require("./assets/after.png")} ></img>
           </button>

           <button className="prev-slide" >
                  <img className="next-image-1"src={require("./assets/before .png")} ></img>
           </button>

         </div>
    
        
        

       </main>

      
    </div>
  );
}

export default App;
