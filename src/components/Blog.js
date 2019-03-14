import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import style from '../styles/Blog.css';
import {Link} from 'react-router-dom';
import post1 from '../images/post-1.jpg';
import post2 from '../images/post-2.jpg';
import post3 from '../images/post-3.jpg';
import post4 from '../images/post-4.jpg';
import Searchbar from './Searchbar';
import More from './More';






class Blog extends React.Component{




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
                    <h4 className='welcome-blog'>Blog</h4>
                    

                    <div className='image-wrapper-Blog'>
                    <Menu />
                    </div>
                   
                </div>
                            
                <div className='right-side'>
                <More/>
                <Searchbar/>
                    <div className='post-wrapper'>
                        <div className='post'>
                                <Link to='/blog/6-basic-rules'><img src={post1} /></Link>
                                <br></br>
                                <Link to='/blog/6-basic-rules'> 6 Βασικοί κανόνες για τη σωστή συντήρηση των αλλαντικών</Link>
                                <br></br>
                                <Link to='/blog/6-basic-rules'><p> Ποια είναι η σωστή συντήρηση των αλλαντικών; Ευαισθησία 
                                    Συντήρηση αλλαντικών λοιπόν. Έχουμε και λέμε, τα αλλαντικά είναι ευαίσθητα στο φως,
                                     την υγρασία και την υψηλή θερμοκρασία. Πάνω από όλα, οφείλουμε να επιλέγουμε καταστήματα και
                                      καταστηματάρχες που εφαρμόζουν τα βασικά μέτρα υγιεινής και διαθέτουν ψυγεία με προβλεπόμενη θερμοκρασία 
                                      (από 2-4 βαθμούς κελσίου για συντήρηση και–18 βαθμούς […]
                                </p></Link>
                        </div>

                        <div className='post'>
                                <Link to='/blog/epilogi'><img src={post2} /></Link>
                                <br></br>
                                <Link to='/blog/epilogi'>Αλλαντικά επιλογή. 6 βασικοί κανόνες!</Link>
                                <br></br>
                                <Link to='/blog/epilogi'><p> Αλλαντικά επιλογή. 6 κανόνες για τη σωστή επιλογή. 1.Όψη-Οσμή Δώστε ιδιαίτερη σημασία στην όψη και την οσμή τους. 2. Ημερομηνία λήξης Προσέχετε ΠΑΝΤΑ την ημερομηνία λήξης στα συσκευασμένα προϊόντα. 3. Συσκευασία αλλαντικών Ελέγχετε προσεκτικά τις συσκευασίες των προϊόντων για την περίπτωση που έχουν πάρει αέρα δηλ. οι συσκευασίες να μην έχουν ελεγχθεί και να είναι […]
                                    
                                </p></Link>
                        </div>
                        <div className='post'>
                                <Link to='/blog/genikes-plirofories'><img src={post3} /></Link>
                                <br></br>
                                <Link to='/blog/genikes-plirofories'>Αλλαντικά</Link>
                                <br></br>
                                <Link to='/blog/genikes-plirofories'><p> Αλλαντικά Τα αλλαντικά προέκυψαν ως αποτέλεσμα διαδικασιών επεξεργασίας του κρέατος με στόχο την συντήρησή του για μεγαλύτερο χρονικό διάστημα. Τεχνικές όπως η προσθήκη θαλασσινού αλατιού, μπαχαρικών, το ψήσιμο, το κάπνισμα αλλά και η αποθήκευση του κρέατος μέσα σε ζωικό λίπος ήταν γνωστές από την εποχή της Αρχαίας Ελλάδας. Μετέπειτα αναφορές υπάρχουν από την περίοδο της […]
                                    
                                </p></Link>
                        </div>
                        <div className='post'>
                                <Link to='/blog/categories'><img src={post4} /></Link>
                                <br></br>
                                <Link to='/blog/categories'> Κατηγορίες αλλαντικών</Link>
                                <br></br>
                                <Link to='/blog/categories'><p> Αλλαντικά κατηγορίες Αλλαντικά και κατηγορίες βάσει της Ελληνικής Νομοθεσίας. τα προϊόντα αλλαντοποιίας ταξινομούνται σύμφωνα με: α) αν το κρέας για την παρασκευή τους κιμαδοποιείται ή όχι, β) τη μέθοδο επεξεργασίας τους: βραστά (θερμικής επεξεργασίας), ωρίμανσης (αέρος) ή απλώς αλατισμένα και ωμά (παστωμένα). Α) Αλλαντικά κατηγορίες. Προϊόντα από τεμάχια κρέατος. Α.1. Προϊόντα ωρίμανσης. Αλλαντικά που παρασκευάζονται από αυτοτελή […]


                                </p></Link>
                        </div>

                    </div>
                    </div>

            </div>
        );
        }
        else{
            return(
                <div>
                    <div className='left-side'>
                    

                <div className='image-wrapper-Blog'>
               < MobileMenu />
                <h4 className='welcome-blog'>Blog
</h4>
                </div>
                </div>
                
                <div className='right-side'>
                <More/>
                <Searchbar/>
                <div className='post-wrapper'>
                        <div className='post'>
                                <Link to='/blog/6-basic-rules'><img src={post1} /></Link>
                                <br></br>
                                <Link to='/'> 6 Βασικοί κανόνες για τη σωστή συντήρηση των αλλαντικών</Link>
                                <br></br>
                                <Link to='/'><p> Ποια είναι η σωστή συντήρηση των αλλαντικών; Ευαισθησία 
                                    Συντήρηση αλλαντικών λοιπόν. Έχουμε και λέμε, τα αλλαντικά είναι ευαίσθητα στο φως,
                                     την υγρασία και την υψηλή θερμοκρασία. Πάνω από όλα, οφείλουμε να επιλέγουμε καταστήματα και
                                      καταστηματάρχες που εφαρμόζουν τα βασικά μέτρα υγιεινής και διαθέτουν ψυγεία με προβλεπόμενη θερμοκρασία 
                                      (από 2-4 βαθμούς κελσίου για συντήρηση και–18 βαθμούς […]
                                </p></Link>
                        </div>

                        <div className='post'>
                                <Link to='/blog/allantika-epilogi'><img src={post2} /></Link>
                                <br></br>
                                <Link to='/blog/allantika-epilogi'>Αλλαντικά επιλογή. 6 βασικοί κανόνες!</Link>
                                <br></br>
                                <Link to='/blog/allantika-epilogi'><p> Αλλαντικά επιλογή. 6 κανόνες για τη σωστή επιλογή. 1.Όψη-Οσμή Δώστε ιδιαίτερη σημασία στην όψη και την οσμή τους. 2. Ημερομηνία λήξης Προσέχετε ΠΑΝΤΑ την ημερομηνία λήξης στα συσκευασμένα προϊόντα. 3. Συσκευασία αλλαντικών Ελέγχετε προσεκτικά τις συσκευασίες των προϊόντων για την περίπτωση που έχουν πάρει αέρα δηλ. οι συσκευασίες να μην έχουν ελεγχθεί και να είναι […]
                                    
                                </p></Link>
                        </div>
                        <div className='post'>
                                <Link to='/'><img src={post3} /></Link>
                                <br></br>
                                <Link to='/'>Αλλαντικά</Link>
                                <br></br>
                                <Link to='/'><p> Αλλαντικά Τα αλλαντικά προέκυψαν ως αποτέλεσμα διαδικασιών επεξεργασίας του κρέατος με στόχο την συντήρησή του για μεγαλύτερο χρονικό διάστημα. Τεχνικές όπως η προσθήκη θαλασσινού αλατιού, μπαχαρικών, το ψήσιμο, το κάπνισμα αλλά και η αποθήκευση του κρέατος μέσα σε ζωικό λίπος ήταν γνωστές από την εποχή της Αρχαίας Ελλάδας. Μετέπειτα αναφορές υπάρχουν από την περίοδο της […]
                                    
                                </p></Link>
                        </div>
                        <div className='post'>
                                <Link to='/'><img src={post4} /></Link>
                                <br></br>
                                <Link to='/'> Κατηγορίες αλλαντικών</Link>
                                <br></br>
                                <Link to='/'><p> Αλλαντικά κατηγορίες Αλλαντικά και κατηγορίες βάσει της Ελληνικής Νομοθεσίας. τα προϊόντα αλλαντοποιίας ταξινομούνται σύμφωνα με: α) αν το κρέας για την παρασκευή τους κιμαδοποιείται ή όχι, β) τη μέθοδο επεξεργασίας τους: βραστά (θερμικής επεξεργασίας), ωρίμανσης (αέρος) ή απλώς αλατισμένα και ωμά (παστωμένα). Α) Αλλαντικά κατηγορίες. Προϊόντα από τεμάχια κρέατος. Α.1. Προϊόντα ωρίμανσης. Αλλαντικά που παρασκευάζονται από αυτοτελή […]


                                </p></Link>
                        </div>

                    </div>





                   


                </div>

                </div>
            );
        }
    }
};

export default Blog;





