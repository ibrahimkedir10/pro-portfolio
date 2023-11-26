import React, { useRef } from 'react';
import '../style/websiteRequest.css';
import emailjs from 'emailjs-com';




export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zcksjmh', 'template_dgczd8h', form.current, 'jTyCbdKzrlY1q7Hov')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} >
            <div className="about4">
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" className='button'/>
            </div>
        </form>
    );
};

export default ContactUs;