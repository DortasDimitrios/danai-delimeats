import React from 'react';
import Homepage from './Homepage';
import WhoWeAre from './WhoWeAre';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Recipes from './recipes';
import Contact from './Contact';








class App extends React.Component{

    
    clickAction=(history)=> {
        return (param) => {
            history.push(param.key);
        };
    }
    
    render(){
        return(
            <BrowserRouter>
  
            <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/about-us" exact render={props => <WhoWeAre {...props}/>} />
                    <Route path="/recipes" exact render={props => <Recipes {...props} />} />
                    <Route path='/contact' exact component={Contact} />
                
            </Switch>
          
          </BrowserRouter>
         

        );
    }
     
};

export default withRouter(App);
