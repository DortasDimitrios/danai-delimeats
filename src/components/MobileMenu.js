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
            <BrowserRouter>
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
                        <a href='/' onClick={ () => this.setState({active: !this.state.active})}><li>Καλωσήρθατε</li></a>
                        <a href='/about' onClick={ () => this.setState({active: !this.state.active})}><li>Ποιοί Είμαστε</li></a>
                        <a href='/' onClick={ () => this.setState({active: !this.state.active})}><li>Προϊόντα</li></a>
                        <a href='/' onClick={ () => this.setState({active: !this.state.active})}><li>Συνταγές</li></a>
                        <a href='/' onClick={ () => this.setState({active: !this.state.active})}><li>Blog</li></a>
                        <a href='/' onClick={ () => this.setState({active: !this.state.active})}><li>Επικοινωνία</li></a>
                    </ul>
                </div>
          </div>
        
             <Route path='/' />
            <Route path='/about' exact component={WhoWeAre} />
          
          </div>
          </BrowserRouter>




        )
    }
};
export default MobileMenu;