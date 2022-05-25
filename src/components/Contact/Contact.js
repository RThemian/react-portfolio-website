import React from 'react';

const Contact = () => {
    return ( 
    <div id="contact" className="container">
            <h1>Contact</h1>
        <form>
            <input 
            type = 'text' 
            name = 'name' 
            placeholder="Name" 
            />

            <input 
            type = 'email'
            name = 'email'
            placeholder="Email"
            />

            <input 
            type = 'subject'
            name = 'subject'
            placeholder="Subject"
            />

           <textarea 
           name = 'message' 
           cols = '30'
           rows = '10'
           placeholder="Message"
           />

           <input 
           type = 'file'
           name = 'resume[]'
           />
           <button type = 'submit'>Submit</button>
    </form>

</div>
     );
}
 
export default Contact;