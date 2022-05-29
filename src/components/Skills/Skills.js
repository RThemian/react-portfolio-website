import PageHeader from '../PageHeader/PageHeader';
import classes from './Skills.module.css';

const listTitleStyle = {fontWeight: 900, color:'#9B1FE8', marginBottom:'4px', textDecoration: 'underline'}

const backendSkills = 
    <ul>
        <li style={listTitleStyle}>BACKEND</li>

        
        <li className='px-2'>Java with Spring Boot</li>
        <li className='px-2'>Python Django</li>
        <li className='px-2'>Firebase</li>
    </ul>

const frontendSkills =
    <ul >
        <li style={listTitleStyle}>FRONTEND</li>
        <li className='px-2'>ReactJS - HTML - CSS - REDUX / NATIVE</li>
        <li className='px-2'>UI: Bootstrap and MUI</li>
    </ul>

const otherSkills = 
    <ul>
        <li style={listTitleStyle}>OTHER</li>
        <li className='px-2'>VERSION CONTROL:</li>
        <li className='px-2'>GitHub - VS Code</li>
        <li className='px-2  pb-1' >Google Suite - Apple Suite</li>
    </ul>

const totalSkills = [backendSkills, frontendSkills, otherSkills]




const Skills = () => {
    return (  
    <div className={classes.Skills} id = "skills">
        
        <PageHeader title = {"What about the Skillset?"} />

        
        <h1 className = 'px-3 pb-2'>
            Get better by 1% per day! Below are some of the computing languages, toolkits, frameworks, 
            and libraries that I worked with and like:
        </h1>
        
        <div className = {classes.Container}>
            
            {totalSkills.map(skills => {
                return (
                    <div className = {classes.List} >
                        {skills}
                        </div>
                )
            })}

        </div>
    </div> 
    );
}
 
export default Skills;