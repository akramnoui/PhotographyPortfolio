import React from "react"
import './SlideShow.css'
import AlbumImage from "../AlbumImage/AlbumImage";



class SlideShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Albums: this.props.Albums , 
            Album: this.props.Albums[0] , 
            index: 0
          
        }
        this.NextImage = this.NextImage.bind(this);
        this.PreviousImage = this.PreviousImage.bind(this);
    }
    NextImage(){
        const index = this.state.index + 1;
        this.setState({
            index: index
        })

        this.props.handler(index);
        this.props.resetindex();
    }
    PreviousImage(){
        const index = this.state.index  - 1 ;
        this.setState({
            Album: this.state.Albums[index]  , 
            index: index
        })
        this.props.handler(index);
        this.props.resetindex();



    }

        render(){
            

            return(
               
                    <div className={`album-container active-slide-${this.state.index}`} >
                        <button className="next" onClick={this.NextImage}  disabled={this.state.index === this.props.Albums.length - 1}>
                            <img className="next-image"src={require("../../assets/down.png")} ></img>
                        </button>
                        <button className="prev" onClick={this.PreviousImage} disabled={this.state.index === 0}>
                        <img className="next-image"src={require("../../assets/up.png")} ></img>
                        </button>

                      
                      
                        {
                            this.props.Albums.map(( album , index)=>
                                <AlbumImage id={`card-${index}`} title={this.props.Titles[index]} display={album[0]} index={this.state.index}/>
                            )
                           
                            
                        }
                      
                     
                    </div>

            );


        }

}
export default SlideShow ;