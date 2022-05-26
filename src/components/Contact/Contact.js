import React from 'react';
import classes from './Contact.module.css'



const Contact = () => {
    return ( 
    <div id="contact" className={classes.Container}>
            <h1>Contact</h1>
        <form method="POST"
        action = 'https://getform.io/f/08deec31-286d-4c71-8052-f78cec986218'>
            <div>
            <input 
        
            type = 'text' 
            name = 'name' 
            placeholder="Name" 
            />
            </div>

            <div>
            <input 
            
            type = 'email'
            name = 'email'
            placeholder="Email"
            />
            </div>

            <div>
            <input 
         
            type = 'subject'
            name = 'subject'
            placeholder="Subject"
            />

            </div>

           <textarea 
     
           name = 'message' 
           cols = '30'
           rows = '10'
           placeholder="Message"
           />

           <input 
           className='container'
           type = 'file'
           name = 'resume[]'
           />
           
           <button type = 'submit'>Submit</button>
           
    </form>

</div>
     );
}
 
export default Contact;