import React from 'react';

const Contact = () => {
    return ( 
        <>
        <div id="contact" >
            <h1 className="text-3xl font-bold underline" >Contact</h1>
        </div>
        
        <div className="w-full max-w-xs">
  <form 
  action ='https://getform.io/f/08deec31-286d-4c71-8052-f78cec986218'
  method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
        Full name
      </label>
      <input 
      name = 'name' placeholder="name"
      className="hover:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text"/>
    </div>
    
    
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input 
      
      name = 'email' placeholder="email"
      className="hover:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
        Message
      </label>
      <textarea  className="resize shadow appearance-none border  hover:border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p className="text-xs italic">Please write your message.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Add file
      </a>
    </div>
  </form>
</div>
</>
     );
}
 
export default Contact;