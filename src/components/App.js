import React from 'react';
import Homepage from './Homepage';
import WhoWeAre from './WhoWeAre';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Recipes from './recipes';
import Contact from './Contact';
import Blog from './Blog';
import SpaghettiRecipe from './SpaghettiRecipe';
import Rec2 from './Rec2';
import Rec3 from './Rec3';
import Rec4 from './Rec4';
import Rec5 from './Rec5';
import Rec6 from './Rec6';
import Rec7 from './Rec7';
import Rec8 from './Rec8';
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';
import Products from './Products';
import More from './More';




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
                    <Route path='/blog' exact component={Blog} />
                    <Route path='/products' exact component={Products}/>
                    <Route path='/recipes/spaghetti-apaki' exact component={SpaghettiRecipe}/>
                    <Route path='/recipes/potato-salad-with-bacon' exact component={Rec2}/>
                    <Route path='/recipes/fasolada' exact component={Rec3}/>
                    <Route path='/recipes/salata-avocado' exact component={Rec4}/>
                    <Route  path='/recipes/spaghetti-apaki-manitaria' exact component={Rec5}/>
                    <Route  path='/recipes/sandwich' exact component={Rec6}/>
                    <Route  path='/recipes/burger' exact component={Rec7}/>
                    <Route  path='/recipes/kritharoto' exact component={Rec8}/>
                    <Route path='/blog/6-basic-rules' exact component={Post1}/>
                    <Route path='/blog/epilogi' exact component={Post2} />
                    <Route path='/blog/genikes-plirofories' exact component={Post3} />
                    <Route path='/blog/categories' exact component={Post4} />
                    <Route path='/more' exact component={More} />
            </Switch>
            
          
          </BrowserRouter>
         

        );
    }
     
};

export default withRouter(App);
