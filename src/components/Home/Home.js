import classes from './Home.module.css'
import codeSymbol from './../../images/codeSymbol.png'
import mountainMe from './../../images/mountainMe.jpg'



const Home = () => {
    return ( 
    <div className = {classes.Home}>
        <div className = {classes.Container}>
            <h1 className = 'font-extrabold font-serif text-4xl text-white ' >Hello Fellow Coders!</h1>
            <h1>Welcome to my PORTO-FOLIO</h1>
        </div>
       
        <img className = {classes.Code} src = {codeSymbol} alt = 'codeSymbol' ></img>

        <img  src = {mountainMe} alt = "profileMe"></img>
        
    </div>
     );
}
 
export default Home;