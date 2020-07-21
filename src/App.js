import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainCover from './Components/MainCover/MainCover'
import SlideShow from './Components/SlideShow/SlideShow'
import MainImage from './Components/MainImage/MainImage' 
import Header from './Components/Header/Header' 
import Presentation from './Components/Presentation/Presentation' 
import Footer from './Components/Footer/Footer'
import Latest from './Components/Latest/Latest'



const alb = [["photo1.jpeg" , "img5.PNG" , "img4.JPG" , "img2.jpg" ],["img5.PNG" ], ["img4.JPG"] , ["img6.jpeg"] , ["img2.jpg"]];
const titles = ["Architecture " , "Portaits" , "Landscape" , "VSCO" , "ArtWork"];

class App extends React.Component {  
  constructor(props){
    super(props);
    this.state={
      Albums: alb , 
      Album: alb[0],
      imgindex: 0 , 
      Titles: titles
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
      <div className="container-1">

      
    <div className="container">
       <header className="header">
          <Header/>
          <div className="background">
            <MainCover/>
          </div>
       </header>
       <main>
       <Presentation></Presentation>
        
         <div className="sld-container">
         <SlideShow Albums={this.state.Albums} Titles={this.state.Titles} handler={this.handler} resetindex={this.resetindex} ></SlideShow>
            <MainImage display={this.state.Album[this.state.imgindex]} Titles={this.state.Titles} index={alb.indexOf(this.state.Album)} />
           <button className="next-slide" onClick={this.nextimg} disabled={ this.state.imgindex === this.state.Album.length - 1}  >
             <img className="next-image-1"src={require("./assets/after.png")} ></img>
           </button>

           <button className="prev-slide" onClick={this.previmg} disabled={ this.state.imgindex === 0}>
                  <img className="next-image-1"src={require("./assets/before .png")} ></img>
           </button>

         </div>
        
        

       </main>
        
      
    </div>
    <Latest/>
    <Footer/>
    </div>
  );
 }
}

export default App;
