import PageHeader from '../PageHeader/PageHeader';
import classes from './Teaching.module.css';


const Teaching = () => {
    return ( 
    <div className = {classes.Teaching} id = "teaching">
        <PageHeader title = {"Math and Computer Science Teacher"} />
       
        <div className={classes.TeachingContent}>
            <div className={classes.Paragraph}>
                <p>
                    I have taught in Guadalajara, Mexico; Gary, Indiana; Mexico City, Mexico; and Loveland, Colorado.
                    Additionally, I am trained as a teacher for English Language Learners (ELL).  
                </p>
            </div>
        </div>
    </div> );
}
 
export default Teaching;