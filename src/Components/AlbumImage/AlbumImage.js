import React from "react"
import './AlbumImage.css'



class AlbumImage extends React.Component{
   

        render(){
            

            return(
                        
                        <div id={this.props.id} className="polaroid1 card" style={{'transform': `  translateY(${this.props.index*(-670) / 5 + 260}% ) `}}>
                             <img className="shown" src={require(`../../assets/${this.props.display}`)}  />
                             <div class="container1">
                                <h4>John Doe</h4>
                            </div>
                        </div>
            

            );


        }

}
export default AlbumImage ;