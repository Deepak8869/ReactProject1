import React from 'react'

const Contact = () => {
  return (
    <div className="contact">

        <main>
            <h1>Contact Us</h1>
            <form action="">
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='abc'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='abc@gmail.com'/>
                </div>
                <div>
                    <label>Message</label><br/>
                    <textarea name="message"  cols="30" rows="6"></textarea>
            
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact;