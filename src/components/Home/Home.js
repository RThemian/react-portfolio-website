import classes from './Home.module.css'
import codeSymbol from './../../images/codeSymbol.png'
import mountainMe from './../../images/mountainMe.jpg'
import codingMe from './../../images/codingMe.jpg'



const Home = () => {
    return ( <>
    <div >
        <div className = ''>
            <h1 className = 'font-extrabold font-serif text-4xl text-white ' >Hello Fellow Coders!</h1>
            <h1>Welcome to my PORTO-FOLIO</h1>
        </div>
       
        

        <img className = {classes.Code} src = {codeSymbol} alt = 'codeSymbol' ></img>

        <img className = 'rounded-full px-2 py-3' src = {mountainMe} alt = "profileMe"></img>
      {/*
        <img className = {classes.Code} src = {codeSymbol} alt = 'codeSymbol' ></img>
        
        <img  src = {codingMe} alt = "profileMe"></img> */}
        
        </div>
    </>
     );
}
 
export default Home;