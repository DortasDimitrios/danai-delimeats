import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import style from '../styles/Rec6.css';
import Searchbar from './Searchbar';
import More from './More';

class Rec6 extends React.Component{




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

        if(this.state.w>1000){
        return(
            <div>
                <div className='left-side'>
                    <h4 className='welcome-rec'>Σάντουιτς με απάκι και κατίκι Δομοκού</h4>
                    

                    <div className='image-wrapper-sand'>
                    <Menu />
                    </div>
                   
                </div>
                            
                <div className='right-side'><More/><Searchbar/>
                            <h3>Συστατικά</h3>
                            <p>-200 gr κατίκι Δομοκού</p>
                            <p>-150 gr Απάκι σε φέτες</p>

                            <p>-Φέτες ψωμιού</p>

                            <p>-Ρίγανη</p>

                            <p>-Μαύρο πιπέρι</p>

                    

                            

                            
                            <br></br>

                            <h3>Οδηγίες</h3>
                            <br></br>

                            <p>1.Κόβουμε λεπτές φέτες απάκι, τις ψήνουμε ελαφρά σε ένα αντικολλητικό τηγάνι μέχρι να ροδίσουν.</p>

                            <p>2.Φρυγανίζουμε δυο φέτες ψωμιού στο γκριλ.</p>

                            <p>3.Αλείφουμε τη μία φέτα με κατίκι Δομοκού, προσθέτουμε το απάκι το μαύρο πιπέρι και τη ρίγανη.

</p>

                            <p>4.Σκεπάζουμε με την άλλη φέτα και σερβίρουμε.</p>














                   


                </div>

            </div>
        );
        }
        else{
            return(
                <div>
                    <div className='left-side'>
                    

                <div className='image-wrapper-sand'>
               < MobileMenu />
                <h4 className='welcome-rec'>Σάντουιτς με απάκι και κατίκι Δομοκού</h4>
                </div>
                </div>
                
                <div className='right-side'><More/><Searchbar/>
                <h3>Συστατικά</h3>
                            <p>-200 gr κατίκι Δομοκού</p>
                            <p>-150 gr Απάκι σε φέτες</p>

                            <p>-Φέτες ψωμιού</p>

                            <p>-Ρίγανη</p>

                            <p>-Μαύρο πιπέρι</p>

                    

                            

                            
                            <br></br>

                            <h3>Οδηγίες</h3>
                            <br></br>

                            <p>1.Κόβουμε λεπτές φέτες απάκι, τις ψήνουμε ελαφρά σε ένα αντικολλητικό τηγάνι μέχρι να ροδίσουν.</p>

                            <p>2.Φρυγανίζουμε δυο φέτες ψωμιού στο γκριλ.</p>

                            <p>3.Αλείφουμε τη μία φέτα με κατίκι Δομοκού, προσθέτουμε το απάκι το μαύρο πιπέρι και τη ρίγανη.

</p>

                            <p>4.Σκεπάζουμε με την άλλη φέτα και σερβίρουμε.</p>









                   


                </div>

                </div>
            );
        }
    }
};

export default Rec6;





