
import React, { Component } from 'react';
import data from './data';
import Card from './Card';
import '../styles/ImageSlider.css';
import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';

class ImageSlider extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
          properties: data.properties,
          property: data.properties[0]
        }
      }
      nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
          property: data.properties[newIndex]
        })
      }
    
      prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
          property: data.properties[newIndex]
        })
      }

  
    
    render() {
        
        const {property} = this.state;
        return (
          <div className="image-slider">
    
        <div className='slide'>
            <button 
              onClick={() => this.prevProperty()} 
              disabled={property.index === 0}
              
            > <p className={property.index === 0?'none':'arrow'} >  &larr; Προηγούμενο </p>
             </button>
            <h4 className="kwd">{property.code} </h4>
            <button 
              onClick={() => this.nextProperty()}               
              disabled={property.index === data.properties.length-1}
            ><p className={property.index === data.properties.length-1?'none':'arrow'} >Επόμενo &rarr;</p>
            </button>
        </div>
    
    <div className="page">
            

            <Card property={property} />

        </div>
          </div>
        );
      }
    
  
}

export default ImageSlider;
    
