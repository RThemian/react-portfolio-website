import classes from './Contact.module.css'
import PageHeader from '../PageHeader/PageHeader';

const Contact = () => {
    return ( 
        <>
        <div id="contact" className = {classes.Container}>
        <PageHeader title = {"Contact"} />
            
        
        <div className={classes.Form}>
            <form
                action = 'https://getform.io/f/08deec31-286d-4c71-8052-f78cec986218'
                method = 'POST'
                encType='multipart/form-data'
            
            
            >
                 <label id = "name">Full Name </label>
                <div className={classes.Spacing}>
                    
                    <input type = 'name' name = 'name' placeholder='name'/>
                </div>
                <label id = "email">Email </label>
                <div>
                    <input type = 'email' name = 'email' placeholder='email' />
                </div>
                <label id = "subject">Subject </label>
                <div>
                    <input type = 'subject' name = 'subject' placeholder='subject' />
                </div>
                <label id = "message">Please write your message</label> 
                <div>
                    <textarea name = 'message' cols='30' rows = '10' placeholder='message' ></textarea>
                </div>
                <div>
                    <input  type ='file' name='resume[]' />
                </div>
                <button type = 'submit' >Submit</button>
            </form>
        </div>
        </div>
        </>
     );
}
 
export default Contact;