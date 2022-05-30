import classes from './About.module.css';
import PageHeader from '../PageHeader/PageHeader';
//import profileMe from './../../images/profileMe.png';

const About = () => {
    return (
        <div className={classes.AboutMe} id="about">
            <PageHeader title = {'About Me'} />
            <div className='grid-cols-2'>
                <div className={classes.Text}>
                    
                    <h2 className='px-2'>Hello there! I'm Tomas Paul Cservenak.</h2>
                    
                    <p className='px-2'>
                        Software developer based in Fort Collins, Colorado, USA. 
                        Computer science, math, and Spanish teacher for 11 years.
                        I problem solve in ReactJS, Java, Javascript among others
                    </p >
                    {/* <div className='relative'>
                        <img className='rounded-md items-center right-0 content-center' src ={profileMe} alt = 'me'></img>
                    </div> */}
                </div>
            </div>
        </div>
      );
}
 
export default About ;