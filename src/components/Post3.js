import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import style from '../styles/Post3.css';
import Post301 from '../images/post301.jpg';
import {Link} from 'react-router-dom';

import Searchbar from './Searchbar';



class Post3 extends React.Component{




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
                    <h4 className='welcome-rec'>Αλλαντικά</h4>
                    

                    <div className='image-wrapper-post3'>
                    <Menu />
                    </div>
                   
                </div>
         
                <div className='right-side-post'>
                
                            

                            <h1>Αλλαντικά</h1>

                           

                            <p>Τα αλλαντικά προέκυψαν ως αποτέλεσμα διαδικασιών επεξεργασίας του κρέατος με στόχο την συντήρησή του για μεγαλύτερο χρονικό διάστημα. Τεχνικές όπως η προσθήκη θαλασσινού αλατιού, μπαχαρικών, το ψήσιμο, το κάπνισμα αλλά και η αποθήκευση του κρέατος μέσα σε ζωικό λίπος ήταν γνωστές από την εποχή της Αρχαίας Ελλάδας. Μετέπειτα αναφορές υπάρχουν από την περίοδο της ρωμαϊκής αυτοκρατορίας και του Μεσαίωνα.

</p>

                           


                            <h2>Τα πιο δημοφιλή
</h2>

                            <p>Κάποια από τα πιο δημοφιλή της σημερινής Ευρωπαϊκής αγοράς είναι το ζαμπόν, το ψητό φιλέτο γαλοπούλας, το προσούτο, τα σαλάμια, το μπέικον κ.ά. Στην Ελλάδα συναντάμε επιπλέον παραδοσιακά είδη ανά περιοχή.

</p>

                            

                            <h2>Ελληνική υπόθεση</h2>

                            <p>Το απάκι της Κρήτης, η λούτζα των Κυκλάδων και το σύγλινο της Μάνης είναι κάποιες από τις πιο διαδεδομένες λιχουδιές της Ελληνικής κουζίνας. Όλοι πρέπει κάποια στιγμή να δοκιμάσουν.

</p>

                            <img src={Post301}/>
<br></br>
<br></br>
<br></br>
                             <h3>Πατήστε <a href='https://www.athinorama.gr/umami/food/articles/?id=2004813' target='_blank'>ΕΔΩ</a> για να μάθετε περισσότερα για τα ελληνικά αλλαντικά!</h3>
                             <h3>Διαβάστε τις κατηγορίες αλλαντικών<Link to='/blog/categories'>ΕΔΩ</Link></h3>
                             <br></br>
<br></br>
<br></br>

                            




                   


                </div>

            </div>
        );
        }
        else{
            return(
                <div>
                    <div className='left-side'>
                    

                <div className='image-wrapper-post3'>
               < MobileMenu />
                <h4 className='welcome-rec'>Αλλαντικά</h4>
                </div>
                </div><Searchbar/>
                <div className='right-side-post'>
                
                
                <h1>Αλλαντικά</h1>

                           

<p>Τα αλλαντικά προέκυψαν ως αποτέλεσμα διαδικασιών επεξεργασίας του κρέατος με στόχο την συντήρησή του για μεγαλύτερο χρονικό διάστημα. Τεχνικές όπως η προσθήκη θαλασσινού αλατιού, μπαχαρικών, το ψήσιμο, το κάπνισμα αλλά και η αποθήκευση του κρέατος μέσα σε ζωικό λίπος ήταν γνωστές από την εποχή της Αρχαίας Ελλάδας. Μετέπειτα αναφορές υπάρχουν από την περίοδο της ρωμαϊκής αυτοκρατορίας και του Μεσαίωνα.

</p>




<h2>Τα πιο δημοφιλή
</h2>

<p>Κάποια από τα πιο δημοφιλή της σημερινής Ευρωπαϊκής αγοράς είναι το ζαμπόν, το ψητό φιλέτο γαλοπούλας, το προσούτο, τα σαλάμια, το μπέικον κ.ά. Στην Ελλάδα συναντάμε επιπλέον παραδοσιακά είδη ανά περιοχή.

</p>



<h2>Ελληνική υπόθεση</h2>

<p>Το απάκι της Κρήτης, η λούτζα των Κυκλάδων και το σύγλινο της Μάνης είναι κάποιες από τις πιο διαδεδομένες λιχουδιές της Ελληνικής κουζίνας. Όλοι πρέπει κάποια στιγμή να δοκιμάσουν.

</p>

<img src={Post301}/>
<br></br>
<br></br>
<br></br>
                             <h3>Πατήστε <a href='https://www.athinorama.gr/umami/food/articles/?id=2004813' target='_blank'>ΕΔΩ</a> για να μάθετε περισσότερα για τα ελληνικά αλλαντικά!</h3>
                             <h3>Διαβάστε τις κατηγορίες αλλαντικών<Link to='/blog/categories'>ΕΔΩ</Link></h3>
                             <br></br>
<br></br>
<br></br>

 

                   


                </div>

                </div>
            );
        }
    }
};

export default Post3;





