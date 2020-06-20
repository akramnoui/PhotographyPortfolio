import React from "react"
import './SlideShow.css'
import AlbumImage from "../AlbumImage/AlbumImage";



const alb = ["photo1.jpeg" , "img5.PNG" , "img4.JPG"];
class SlideShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Albums: alb , 
            Album: alb[0] , 
            index: 0
          
        }
        this.NextImage = this.NextImage.bind(this);
        this.PreviousImage = this.PreviousImage.bind(this);
    }
    NextImage(){
        const index = this.state.index + 1;
        this.setState({
            Album: this.state.Albums[index]
        })
    }
    PreviousImage(){
        const index = this.state.Album.index + -1 ;
        this.setState({
            Album: this.state.Albums[index]
        })

    }

        render(){
            

            return(
                    <div className="album-container">
                        <button onClick={this.NextImage}>
                            next
                        </button>
                        <button>
                            prev
                        </button>
                        <AlbumImage display={this.state.Album}/>
                    </div>

            );


        }

}
export default SlideShow ;