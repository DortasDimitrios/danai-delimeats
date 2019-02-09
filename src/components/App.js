import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import WhoWeAre from './WhoWeAre';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
         
            <Switch>
        
                <Route  path="/" exact render={(props)=> <Homepage {...props}/>} />
                <Route path="/about-us" exact render={(props)=> <WhoWeAre {...props}/>} />
                {/* <Route exactly component={Page3} pattern="/path3" />
                <Route component={Page404} /> */}
            </Switch>
            
          </BrowserRouter>
        );
    }
};

export default withRouter(App);
