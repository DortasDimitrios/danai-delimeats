import React from 'react';
import Homepage from './Homepage';
import WhoWeAre from './WhoWeAre';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import {withRouter} from 'react-router-dom';



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
        
                <Route  key={window.location.pathname}  path={'/'} exact component={Homepage} />
                <Route key={window.location.pathname} path={'/about-us'} exact component={WhoWeAre} />
                {/* <Route exactly component={Page3} pattern="/path3" />
                <Route component={Page404} /> */}
                
            </Switch>
            
          </BrowserRouter>


        );
    }
     
};

export default withRouter(App);
