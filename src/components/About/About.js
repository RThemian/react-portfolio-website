import classes from './About.module.css'
import PageHeader from '../PageHeader/PageHeader';
import profileMe from './../../images/profileMe.PNG'
import gitHubIcon from './../../images/gitHubIcon.svg'
import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';



const About = () => {
    return (
    

<div className="container-fluid">
  <h3 className="text-primary text-center">jQuery Playground</h3>
  <div className="row">
    <div className="col-xs-6">
      <div className="well">

      <a href="https://github.com/RThemian" target="_blank" rel="noreferrer"> 
                            <img className = "img-thumbnail" src ={gitHubIcon} alt = 'gitHub'></img>
                             </a>

      </div>
    </div>
    <div className="col-xs-6">
      <div >

      <a href="https://github.com/RThemian" target="_blank" rel="noreferrer"> 
                            <img className = "img-thumbnail" src ={gitHubIcon} alt = 'gitHub'></img>
                             </a>

      </div>
    </div>
  </div>


        <div className={classes.AboutMe} id="about">
             
        
            <PageHeader title = {'About Me'} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello there! I'm Tomas</h2>
                    <p>
                        Software developer based in Fort Collins, Colorado, USA. 
                        Computer science, math, and Spanish teacher for 11 years.
                        I problem solve in ReactJS
                    </p>
                 

                    
                    <div className='row'>
                         
                         
                        <div className = 'col-xs-6'></div>
                            <div className = "well">
                        <label id ="gitHub">Find me on GitHub</label>
                        
                            <a href="https://github.com/RThemian" target="_blank" rel="noreferrer"> 
                            <img className = "img-thumbnail" src ={gitHubIcon} alt = 'gitHub'></img>
                             </a>
                        
                        </div>
                        </div>

                        <div className = 'col-xs-6'></div>
                            <div className = "well">
                        <label id ="gitHub">Find me on GitHub</label>
                        
                            <a href="https://github.com/RThemian" target="_blank" rel="noreferrer"> 
                            <img className = "img-thumbnail" src ={gitHubIcon} alt = 'gitHub'></img>
                             </a>
                        
                        </div>
                        </div>
                    </div> 
                </div>
                </div>

                        
            
       
                    
                    
                
            
    
      
      );
}
 
export default About ;