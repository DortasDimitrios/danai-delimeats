
import React from 'react';


import menustyle from '../styles/menustyle.css';

import triagnle from '../images/down copy.png';


import {BrowserRouter , Route , Link} from 'react-router-dom';

import {withRouter} from 'react-router-dom';





//these are const variables of components 



class Menu extends React.Component{

    constructor(props) {
        super(props);
       
        this.state = {
            active: false,
        };
    }

    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


    render(){
        return(
             <BrowserRouter>
               








              
                <div className='menu'>
                
                        
                 <Link to={'/'}>Καλωσήρθατε</Link>
                 <Link to={'/about-us'} >Ποιοί είμαστε</Link>
                 
                    
                    <Link to='/' onClick={() => this.setState({active: !this.state.active})} className='dropbtn'>Προϊόντα < img className='arrow' src={triagnle} /></Link>
                    
                            <div className={ this.state.active ? "show":"hide"}>
                            <div className='dropdown-content'>
                                <Link to='/about-us' >Home</Link>
                                <Link to='/'>About</Link>
                                <Link to='/'>Contact</Link>
                                </div>
                            </div>

                    <Link to='/'>Συνταγές</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Επικοινωνία</Link> 

                   
                    
                    
                    
                        
                 </div> 
                
            </BrowserRouter> 
        );
    }
};

export default withRouter(Menu);