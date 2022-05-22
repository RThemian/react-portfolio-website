import classes from './Home.module.css'
import codeSymbol from './../../images/codeSymbol.png'
import undraw_connected_world_wuay from './../../images/undraw_connected_world_wuay.svg'



const Home = () => {
    return ( 
    <div className = {classes.Home}>
        <div className = {classes.Container}>
            <h1 className = {classes.Hello}>Hello Fellow Coders!</h1>
            <h1>Welcome to my PORTO-FOLIO</h1>
        </div>
       
        <img className = {classes.Code} src = {codeSymbol} alt = 'codeSymbol' ></img>
        <img className = {classes.ConnectedWorld} src = {undraw_connected_world_wuay} alt = "connected world"></img>
        
    </div>
     );
}
 
export default Home;