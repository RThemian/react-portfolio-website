import classes from './Home.module.css'
import codeSymbol from './../../images/codeSymbol.png'
import mountainMe from './../../images/mountainMe.jpg'
import undraw_connected_world_wuay from './../../images/undraw_connected_world_wuay.svg'



const Home = () => {
    return ( 
    <div className = {classes.Home}>
        <div className = {classes.Container}>
            <h1 className = {classes.Hello} >Hello Fellow Coders!</h1>
            <h1 className={classes.Headline}>Welcome to my PORTFOLIO!</h1>
        
       
        <img className = {classes.Code} src = {codeSymbol} alt = 'codeSymbol' ></img>
        <img className = {classes.MountainMe} src = {mountainMe} alt = "mountainMe"></img>
        <img className = {classes.ConnectedWorld} src = {undraw_connected_world_wuay} alt = 'connected_world'></img>
    </div>
    </div>
     );
}
 
export default Home;