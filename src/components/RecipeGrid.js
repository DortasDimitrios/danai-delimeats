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


















class RecipeGrid extends React.Component{


    constructor(props){
        super(props);
        this.state = {hover : false}
    }
    // const style = {
    //     display = this.state.hover ? "none" : 'inline-block'
    // };
    
    // const handleMouseEnter = () => this.setState({hover : true});
    // const handleMouseLeave = () => this.setState({hover : false});
    
    // className={'inactive' ? 'active' :this.state.hoverhover
    // onMouseOver={this.setState({hover:true})




    render(){
        // const style = {
            
        //     opacity : this.state.hover ? '1' : '0'
           
        // };
        
        // const handleMouseEnter = () => this.setState({hover : true});
        // const handleMouseLeave = () => this.setState({hover : false});
        return(
            
            <div style={{backgroundColor:'black'}} className="right-side-grid">
                <div className='grid' >
                  
                  
           
                    
                    <div className='grid-overlay'>
                    <img  src={rec1} /> 
                        <div className='over' >
                        <Link  to='/recipes/spaghetti-apaki'
                        
                    
                        className='txt'>
                        Spaghetti με pesto λιαστής τομάτας και απάκι κοτόπουλο
                        </Link> 
                        </div>
                    </div>
                    <div className='grid-overlay'>
                    <img  src={rec2} /> 
                        <div className='over' >
                        <Link  to='/recipes/potato-salad-with-bacon'
                        
                        className='txt'>
                        Πατατοσαλάτα με bacon
                        </Link> 
                        </div>
                    </div>
                    <div className='grid-overlay'>
                    <img  src={rec3} /> 
                        <div className='over' >
                        <Link  to='/recipes/fasolada'
                        
                        className='txt'>
                         Φασολάδα με λουκάνικο
                        </Link> 
                        </div>
                    </div>
                    <div className='grid-overlay'>
                    <img  src={rec4} /> 
                        <div className='over' >
                        <Link  to='/recipes/salata-avocado'
                        
                        className='txt'>
                        Πράσινη σαλάτα με αβοκάντο και απάκι κοτόπουλο
                        </Link> 
                        </div>
                    </div>
                    <div className='grid-overlay'>
                    <img  src={rec5} /> 
                        <div className='over' >
                        <Link  to='/recipes/spaghetti-apaki-manitaria'
                        
                        className='txt'>
                        Spaghetti με απάκι και μανιτάρια
                        </Link> 
                        </div>
                    </div>
                    <div className='grid-overlay'>
                    <img  src={rec6} /> 
                        <div className='over' >
                        <Link  to='/recipes/sandwich'
                        
                        className='txt'>
                        Σάντουιτς με απάκι και κατίκι Δομοκού
                        </Link> 
                        </div>
                    </div>
                    <div className='grid-overlay'>
                    <img  src={rec7} /> 
                        <div className='over' >
                        <Link  to='/recipes/burger'
                        
                        className='txt'>
                        Burger με μπιφτέκι και καπνιστή μπριζόλα
                        </Link> 
                        </div>
                    </div>
                    <div className='grid-overlay'>
                    <img  src={rec8} /> 
                        <div className='over' >
                        <Link  to='/recipes/kritharoto'
                        
                        className='txt'>
                        Κριθαρότο με απάκι και γραβιέρα
                        </Link> 
                        </div>
                    </div>

                 
                    </div>
            </div>
        );
    }
};

export default RecipeGrid;