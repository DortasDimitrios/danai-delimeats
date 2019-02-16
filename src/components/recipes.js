import React from 'react';
import Menu from './Menu';
import rec from '../styles/recipes.css';
import RecipeGrid from './RecipeGrid';
import MobileMenu from './MobileMenu';
import rgstyle from '../styles/RecipeGrid.css';

class Recipes extends React.Component{
    
   
   

        //state

    state= { w : window.innerWidth };

    updateWidth(){
        
            let update_width = window.innerWidth;
            this.setState({w:update_width});
        
    }

    /**
   * Add event listener
   */

    componentDidMount() {
        this.updateWidth();
        window.addEventListener("resize", this.updateWidth.bind(this));
    }

    /**
   * Remove event listener
   */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth.bind(this));
    }


    render(){
    

        if(this.state.w > 1000){
        return(
            <div>
            <div className='left-side'>
              
                <div className='image-wrapper-rec'>
                <h4 className='welcome'>Συνταγές</h4>
                    <Menu />
                 </div>
            </div>
            <RecipeGrid />
        </div>

        );


        }
        else{
            return(
                <div>
                    <div className='left-side'>
              
                <div className='image-wrapper-rec'>
                <MobileMenu />
                <h4 className='welcome'>Συνταγές</h4>
                    
                 </div>
            </div>
            <RecipeGrid />
                </div>
            );
        }
    }
};

export default Recipes;