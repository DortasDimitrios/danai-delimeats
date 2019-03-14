import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Searchbar from './Searchbar';
import style from '../styles/rec4.css';
import More from './More';

class Rec4 extends React.Component{




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
                    <h4 className='welcome-rec'>Πράσινη σαλάτα με αβοκάντο και απάκι κοτόπουλο</h4>
                    

                    <div className='image-wrapper-salata'>
                    <Menu />
                    </div>
                   
                </div>
                            
                <div className='right-side'>
                <More/>
                <Searchbar/>
                             <h3>Συστατικά</h3>
                             <br>
                             </br>
                             <br>
                             </br>

                            <p>-½ μαρούλι</p>
                            <p>-200 gr. Ρόκα</p>

                            <p>-150 gr απάκι κοτόπουλο κυρά Δανάη κομμένο σε φέτες</p>

                            <p>-1 ντομάτα</p>

                            <p>-1 αβοκάντο</p>

                            <h3>Για τη σώς:</h3>

                            <p>-1 κουτ. σούπας γιαούρτι στραγγιστό</p>

                            <p>-1/2 σκελίδα σκόρδο</p>

                            <p>-Λίγο άνηθο</p>

                            <p>-1/4 φλ. ελαιόλαδο χυμός από μισό λεμόνι</p>

                            <p>-1/4 κουτ. γλυκού πάπρικα γλυκιά</p>

                            <p>-αλάτι και πιπέρι</p>

                            
                            <br></br>

                            <h3>Οδηγίες</h3>
                            <br></br>

                            <p>1.Βάζετε όλα τα υλικά της σώς στο μίξερ και πολτοποιείτε μέχρι να αναμιχθούν καλά.</p>

                            <p>2.Κόβετε τη ντομάτα και το αβοκάντο σε κύβους.</p>

                            <p>3.Τοποθετείτε το μαρούλι και τη ρόκα σε ένα μπόλ, προσθέτετε τη σως και ανακατεύετε απαλά.</p>

                            <p>4.Σερβίρετε τη σαλάτα σε μια σαλατιέρα και προσθέτετε τη ντοματα, το αβοκάντο και το απάκι.</p>

                            {/* <p>5.Ψήνουμε για 4 περίπου ώρες σε μέτρια θερμοκρασία. Σερβίρουμε στα πιάτα και θέλουμε προσθέτουμε λίγο μπούκοβο.</p> */}











                   


                </div>

            </div>
        );
        }
        else{
            return(
                <div>
                    <div className='left-side'>
                    

                <div className='image-wrapper-salata'>
               < MobileMenu />
                <h4 className='welcome-rec'>Πράσινη σαλάτα με αβοκάντο και απάκι κοτόπουλο</h4>
                </div>
                </div>
                
                    <div className='right-side'>
                    <More/>
                    <Searchbar/>
                    <h3>Συστατικά</h3>
                             <br>
                             </br>
                             <br>
                             </br>

                            <p>-½ μαρούλι</p>
                            <p>-200 gr. Ρόκα</p>

                            <p>-150 gr απάκι κοτόπουλο κυρά Δανάη κομμένο σε φέτες</p>

                            <p>-1 ντομάτα</p>

                            <p>-1 αβοκάντο</p>

                            <h3>Για τη σώς:</h3>

                            <p>-1 κουτ. σούπας γιαούρτι στραγγιστό</p>

                            <p>-1/2 σκελίδα σκόρδο</p>

                            <p>-Λίγο άνηθο</p>

                            <p>-1/4 φλ. ελαιόλαδο χυμός από μισό λεμόνι</p>

                            <p>-1/4 κουτ. γλυκού πάπρικα γλυκιά</p>

                            <p>-αλάτι και πιπέρι</p>

                            
                            <br></br>

                            <h3>Οδηγίες</h3>
                            <br></br>

                            <p>1.Βάζετε όλα τα υλικά της σώς στο μίξερ και πολτοποιείτε μέχρι να αναμιχθούν καλά.</p>

                            <p>2.Κόβετε τη ντομάτα και το αβοκάντο σε κύβους.</p>

                            <p>3.Τοποθετείτε το μαρούλι και τη ρόκα σε ένα μπόλ, προσθέτετε τη σως και ανακατεύετε απαλά.</p>

                            <p>4.Σερβίρετε τη σαλάτα σε μια σαλατιέρα και προσθέτετε τη ντοματα, το αβοκάντο και το απάκι.</p>

                            {/* <p>5.Ψήνουμε για 4 περίπου ώρες σε μέτρια θερμοκρασία. Σερβίρουμε στα πιάτα και θέλουμε προσθέτουμε λίγο μπούκοβο.</p> */}












                   


                </div>

                </div>
            );
        }
    }
};

export default Rec4;





