import React from "react"
import './AlbumImage.css'



class AlbumImage extends React.Component{
   

        render(){
            

            return(
                        
                        <div id={this.props.id} className="polaroid1" style={{'transform': `  translateY(${this.props.index*(-600) / 5 + 230}% ) `}}>
                             <img className="shown" src={require(`../../assets/${this.props.display}`)}   />
                        </div>
            

            );


        }

}
export default AlbumImage ;