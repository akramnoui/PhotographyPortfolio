import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainCover from './Components/MainCover/MainCover'
import SlideShow from './Components/SlideShow/SlideShow'
import MainImage from './Components/MainImage/MainImage' 


const alb = [["photo1.jpeg" , "img5.PNG" , "img4.JPG" , "img2.jpg" ],["img5.PNG" ], ["img4.JPG"] , ["img6.jpeg"] , ["img2.jpg"]];

class App extends React.Component {  
  constructor(props){
    super(props);
    this.state={
      Albums: alb , 
      Album: alb[0],
      imgindex: 0
    }
    this.handler = this.handler.bind(this);
    this.nextimg = this.nextimg.bind(this);
    this.previmg =  this.previmg.bind(this);
    this.resetindex = this.resetindex.bind(this);
  }

  handler(index){
    this.setState({
      Album: this.state.Albums[index]
    })
  }
  nextimg(){
    let index = this.state.imgindex + 1;
    this.setState({
      imgindex: index
    })
  }
  previmg(){
    let index = this.state.imgindex - 1;
    this.setState({
      imgindex: index
    })
  }
  resetindex(){
    this.setState({
      imgindex: 0
    })
  }

  render() {
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
         <SlideShow Albums={this.state.Albums} handler={this.handler} resetindex={this.resetindex} ></SlideShow>
            <MainImage display={this.state.Album[this.state.imgindex]} />
           <button className="next-slide" onClick={this.nextimg} disabled={ this.state.imgindex === this.state.Album.length - 1}  >
             <img className="next-image-1"src={require("./assets/after.png")} ></img>
           </button>

           <button className="prev-slide" onClick={this.previmg} disabled={ this.state.imgindex === 0}>
                  <img className="next-image-1"src={require("./assets/before .png")} ></img>
           </button>

         </div>
    
        
        

       </main>

      
    </div>
  );
 }
}

export default App;
