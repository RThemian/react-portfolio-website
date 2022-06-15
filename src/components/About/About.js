import classes from './About.module.css'
import PageHeader from '../PageHeader/PageHeader';
import profileMe from './../../images/profileMe.PNG'
import gitHubIcon from './../../images/gitHubIcon.svg'

const About = () => {
    return (
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
                    

                    
                    <div className={classes.Photo}>
                        <img className={classes.Me} src ={profileMe} alt = 'me'></img>
                    </div>
                    <label id ="gitHub">Find me on GitHub</label>
                    <div className={classes.Photo}>
                        
                        <a href="https://github.com/RThemian" target="_blank" rel="noreferrer">
                            <img className={classes.Me} src ={gitHubIcon} alt = 'gitHub'></img>
                        </a>
                    </div>
                    
       
       
                </div>
            </div>
        </div>
      );
}
 
export default About ;