import React from 'react';
import mobilemenustyle from '../styles/mobilemenustyle.css';
import {BrowserRouter , Route , Link} from 'react-router-dom';
import WhoWeAre from './WhoWeAre';


class MobileMenu extends React.Component{

    constructor(props) {
        super(props);
        
       
        this.state = {
            active: false,
         
        };
    }

   
    

    
    // openNav = () => {document.getElementById("myNav").style.display = "block"}
    // _closeNav = () => { document.getElementById("myNav").style.display = "none" }
  



   
    

    render(){     
    
       

        return(
            
            <div>
                <div id='mobile-menu' className={ this.state.active ? "change":"container"}
                                      onClick={ () => this.setState({active: !this.state.active})} >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            <div id={ this.state.active ? "menu-open":"menu-close"} className="overlay">
               
                <div className="overlay-content">
                    <ul>
                        <Link to='/' onClick={ () => this.setState({active: !this.state.active})}>Καλωσήρθατε</Link>
                        <Link to='/about-us' onClick={ () => this.setState({active: !this.state.active})}>Ποιοί Είμαστε</Link>
                        <Link to='/' onClick={ () => this.setState({active: !this.state.active})}>Προϊόντα</Link>
                        <Link to='/recipes' onClick={ () => this.setState({active: !this.state.active})}>Συνταγές</Link>
                        <Link to='/' onClick={ () => this.setState({active: !this.state.active})}>Blog</Link>
                        <Link to='/' onClick={ () => this.setState({active: !this.state.active})}>Επικοινωνία</Link>
                    </ul>
                </div>
          </div>
        
             
          
          </div>
        




        )
    }
};
export default MobileMenu;