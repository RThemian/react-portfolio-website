import PageHeader from '../PageHeader/PageHeader';
import classes from './Skills.module.css';
import codeThinking from './../../images/codeThinking.svg';

const listTitleStyle = {fontWeight: 900, color:'#9B1FE8', marginBottom:'4px', textDecoration: 'underline'}

const backendSkills = 
    <ul>
        <li style={listTitleStyle}>BACKEND</li>
        <li>JAVA with SPRING BOOT</li>
        <li>PYTHON DJANGO</li>
        <li>Firebase</li>
    </ul>

const frontendSkills =
    <ul>
        <li style={listTitleStyle}>FRONTEND</li>
        <li>ReactJS - HTML - CSS - REDUX / NATIVE</li>
        <li>UI: Bootstrap and MUI</li>
    </ul>

const otherSkills = 
    <ul>
        <li style={listTitleStyle}>OTHER</li>
        <li>VERSION CONTROL:</li>
        <li>GitHub - VS Code</li>
        <li>Google Suite - Apple Suite</li>
    </ul>

const totalSkills = [backendSkills, frontendSkills, otherSkills]




const Skills = () => {
    return (  
    <div className={classes.Skills} id = "skills">
        <PageHeader title = {"What about the Skillset?"} />
        <p>
            Get better by 1% per day!
            Below are some of the computing languages, toolkits, frameworks, 
            and libraries that I worked with and like:
        </p>
        <img className = {classes.Icon} src = {codeThinking} alt = 'CodeThinking'/>
        
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