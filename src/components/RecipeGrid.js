import React from 'react';
import recipegrid from '../styles/RecipeGrid.css';
import rec1 from '../images/apaki.jpg';
import rec2 from '../images/patatosalata.jpg';
import rec3 from '../images/fasolada.jpg';
import rec4 from '../images/avokado.jpg';
import rec5 from '../images/makaronia.jpg';
import rec6 from '../images/sand.jpg';
import rec7 from '../images/burger.jpg';
import rec8 from '../images/krithari.jpg';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';




// // this handler will be executed only once when the cursor moves over the unordered list
// img.addEventListener("mouseenter", function( event ) {   
//     // highlight the mouseenter target
//     event.target.classList.add = "active";
//     event.target.classList.remove = "inactive";



//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.classList.remove = "active";
//       event.target.classList.add = "inactive";
//     }, 500);



//   }, false);








//   render: function render() {
//     return (
//       React.createElement("i", {
//           className: this.state.hover ? "fa fa-heart" : "fa fa-heart-o",
//           onMouseEnter: this.hoverOn,
//           onMouseLeave: this.hoverOff },

//         " ", " My class is: ", this.state.hover ? "fa-heart" : "fa-heart-o"));


//   } });


// ReactDOM.render(React.createElement(HoverTest, { name: "World" }), document.getElementById('container'));





















class RecipeGrid extends React.Component{


    constructor(props){
        super(props);
        this.state = {hover : false}
    }
    
    
    




    render(){
        return(
            
            <div style={{backgroundColor:'black'}} className="right-side-grid">
                <div className='grid' >
                  
                  
           
                    <img  src={rec1}/>
                
                    <img  src={rec2}/>
                    <img  src={rec3}/>
                    <img  src={rec4}/>
                    <img  src={rec5}/>
                    <img  src={rec6}/>
                    <img  src={rec7}/>
                    <img  src={rec8}/>
                 
                </div>
            </div>
        );
    }
};

export default RecipeGrid;