import React from 'react';

const Contact = () => {
    return ( 
      <>
        <div id="contact" >
            <h1 className="text-3xl  px-2 font-bold underline" >Contact</h1>
        </div>
      
   <div className='container mx-auto'>
  <form 
  action ='https://getform.io/f/08deec31-286d-4c71-8052-f78cec986218'
  method="POST" 
  enctype='multipart/form-data'
  
  >
      <div className='p-3'>
      <input 
      className='border-2 text-center h-12 border-black rounded-sm hover:border-blue-600 '
      type = 'text' name = 'name' placeholder='Name'/>
      </div>
      <div className='p-3'>
      <input className='border-2 text-center h-12 w-80 border-black rounded-sm hover:border-blue-600 '
      type = 'email' name = 'email' placeholder='Email'/>
      </div>
      <div className = 'p-3'>
      <input 
      className='border-2 text-center h-12 border-black rounded-sm hover:border-blue-600 'type = 'subject' name = 'subject' placeholder='Subject'/>
      </div>
      <div>
      <textarea className = 'relative border-2 text-center border-black rounded-sm hover:border-blue-600' name = 'message' cols = '30' rows = '10' placeholder='Message'/>
      </div>
      <div>
        <input 
        type = 'file' name = 'resume[]'
        className='pb-5'
        />
        <button className='bg-blue-400 rounded-md border-2 border-black px-4 py-1 hover:border-blue-600 focus:outline-none focus:shadow-outline  '>Submit</button>
      </div>
      
    </form>
    
    </div> 
    </>
  

    )

   
}
 
export default Contact;