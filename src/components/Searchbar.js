import React from 'react';
import close from '../images/x.png';
import search from '../images/searchbar.png';
import searchwhite from '../images/searchbar white.png';
import closewhite from '../images/x white.png';
import style from '../styles/Searchbar.css';
import {Link} from 'react-router-dom';

//list of items

const results =[
    {   key:1,
        name: 'Καλωσορίσατε',
        path:'/',
    },
    {
        key:2,
        name: 'Ποιοί είμαστε',
        path:'/about-us'
    },
    {
        key:3,
        name: 'Προϊόντα',
        path:'/products'
    },
    {
        key:4,
        name: 'Συνταγές',
        path:'/recipes'
    },
    {
        key:5,
        name: 'μπλόγκ',
        path:'/blog'
    },
    {
        key:6,
        name: 'blog',
        path:'/blog'
    },
    {
        key:7,
        name: 'Eπικοινωνία',
        path:'/Contact'
    },
    {
        key:8,
        name: 'σπαγγέτι',
        path:'/recipes/spaghetti-apaki'
    },
    {
        key:9,
        name: 'pesto',
        path:'/recipes/spaghetti-apaki'
    },
    {
        key:10,
        name: 'σπαγγέτι',
        path:'/recipes/spaghetti-apaki'
    },
    {
        key:11,
        name: 'πατατοσαλάτα με μπέικον',
        path:'/recipes/potato-salad-with-bacon'
    },
    {
        key:12,
        name: 'Φασολάδα με Λουκάνικο',
        path:'/recipes/fasolada'
    },
    {
        key:13,
        name: 'Πράσινη σαλάτα με αβοκάντο και απάκι κοτόπουλο',
        path:'/recipes/salata-avocado'
    },{
        key:14,
        name: ' Spaghetti με απάκι και μανιτάρια',
        path:'/recipes/spaghetti-apaki-manitaria'
    },
    {
        key:15,
        name: 'Σάντουιτς με απάκι και κατίκι Δομοκού',
        path:'/recipes/sandwich'
    },
    {
        key:16,
        name: 'Burger με μπιφτέκι και καπνιστή μπριζόλα',
        path:'/recipes/burger'
    },
    {
        key:17,
        name: 'Κριθαρότο με απάκι και γραβιέρα',
        path:'/recipes/kritharoto'
    },
    {
        key:18,
        name: '6 Βασικοί κανόνες για τη σωστή συντήρηση των αλλαντικών',
        path:'/blog/6-basic-rules'
    },
    {
        key:19,
        name: 'Αλλαντικά επιλογή. 6 βασικοί κανόνες!',
        path:'/blog/epilogi'
    },
    
    {
        key:20,
        name: 'Αλλαντικά',
        path:'/blog/genikes-plirofories'
    },
    
    {
        key:21,
        name: 'Κατηγορίες αλλαντικών',
        path:'/blog/categories'
    },
    
    


]












function searchFor(query){
    return function(x){
        return x.name.toLowerCase().includes(query.toLowerCase()) || !query;
    }
}


class Searchbar extends React.Component{

     constructor(props){
         super(props);
         this.state= { w : window.innerWidth,
            active:false,
            query: '',
            results : results,
            queryChanged: false
    };
    
     }
    
    // state= { w : window.innerWidth,
    //         active:false,
    //         query: '',
    //         results : results
    // };

    updateWidth(){
        
            let update_width = window.innerWidth;
            this.setState({w:update_width});
        
    }


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
    handleInputChange = () => {
        this.setState({
          query: this.search.value
          
        })
        
         if(this.state.query !==''){
            this.setState({queryChanged:true});
        }
        
        
        
      }
   






render(){
      
    


    if(this.state.w>1000){
    return(

        <div >
        <img className={this.state.active ? 'none': 'display'} src={search} onClick={() => this.setState({active : !this.state.active})}/>
        <img  className={this.state.active ? 'display': 'none'} src={close} onClick={() => this.setState({active : !this.state.active})}/>
        <div className={this.state.active ? 'search':'none'}>
            
            <div className='main-wrapper'>
                <form className='search' onSubmit={(e)=> e.preventDefault()}>
                    <input type="search" id='typer' placeholder="Type to search" ref={input => this.search = input}
                                 onChange={this.handleInputChange}/>
 
                    <p style={{opacity:'0.3'}}>{'αναζήτηση για: ' + this.state.query}</p>
                    <br></br>
                   
                    <br></br>
                    {
                    results.filter(searchFor(this.state.query)).map( result =>
                       
                        <ul className={this.state.queryChanged?'show-results':'none'} >
                            <li key={result.key.toString()} >  <Link to={result.path}>{result.name }</Link></li>
                            
                        </ul>
                        
                     
                    )
                    
                }
                <br></br>
                   </form>
                   
            </div>
        </div>
        </div>
    );
    }
    else{
        return(

            <div >
        <img className={this.state.active ? 'none': 'display'} src={searchwhite} onClick={() => this.setState({active : !this.state.active})}/>
        <img  className={this.state.active ? 'display': 'none'} src={closewhite} onClick={() => this.setState({active : !this.state.active})}/>
        <div className={this.state.active ? 'search':'none'}>
            
            <div className='main-wrapper'>
                <form className='search' onSubmit={(e)=> e.preventDefault()}>
                    <input type="search" id='typer' placeholder="Type to search" ref={input => this.search = input}
                                 onChange={this.handleInputChange}/>
 
                    <p style={{opacity:'0.3'}}>{'αναζήτηση για: ' + this.state.query}</p>
                    <br></br>
                   
                    <br></br>
                    {
                    results.filter(searchFor(this.state.query)).map( result =>
                       
                        <ul className={this.state.queryChanged?'show-results':'none'} >
                            <li key={result.key.toString()} >  <Link to={result.path}>{result.name }</Link></li>
                            
                        </ul>
                        
                     
                    )
                    
                }
                <br></br>
                   </form>
                   
            </div>
        </div>
        </div>  
        )     
    }
};
}


export default Searchbar;