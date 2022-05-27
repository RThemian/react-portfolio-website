import PageHeader from '../PageHeader/PageHeader';
import classes from './Teaching.module.css';


const Teaching = () => {
    return ( 
    <div id = "teaching" >
        <PageHeader title = {"Science and Math Education"} />
        <h1 className = 'text-xl p-2 px-3'>Teaching Computer Science, Math, and Physics</h1>
        <div className={classes.TeachingContent}>
            <div className={classes.Paragraph}>
                <p className = 'px-5 font-mono'>
                    I have taught in Guadalajara, Mexico; Gary, Indiana; Mexico City, Mexico; and Loveland, Colorado.
                    Additionally, I am trained as a teacher for English Language Learners (ELL).  
                </p>
                <a className = 'underline px-6 hover:text-3xl text-xl text-blue-600' href =''>CV</a>
            </div>
        </div>
    </div> );
}
 
export default Teaching;