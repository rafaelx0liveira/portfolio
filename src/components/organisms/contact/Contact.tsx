import { useRef, FormEvent, useState } from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isProjectFocused, setIsProjectFocused] = useState(false);

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (form.current) {
        emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
                toast.success('Thank you for your message!');
            }
        );
        form.current.reset();
    }
};

    return (
        <section className="contact section" id="contact">
            <h2 className="section-title"> Get in touch </h2>
            <span className="section-subtitle">Contact Me</span>

            <div className="contact-container container grid">
                <div className="contact-cards-content">
                    <h3 className="contact-title">Talk to me</h3>

                    <div className="contact-info">
                        <div className="contact-card">
                            <i className="bx bx-mail-send contact-card-icon"></i>

                            <h3 className="contact-card-title">Email</h3>
                            <span className="contact-card-data">rafaelaparecido.oliveirasilva@gmail.com</span>

                            <a href="mailto:rafaelaparecido.oliveirasilva@gmail.com" className="contact-button" target="_blank">
                                Write me
                                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                            </a>
                        </div>

                        <div className="contact-card">
                            <i className="bx bxl-whatsapp contact-card-icon"></i>

                            <h3 className="contact-card-title">WhatsApp</h3>
                            <span className="contact-card-data">+5511962807125</span>

                            <a href="https://wa.me/5511962807125" className="contact-button" target="_blank">
                                Write me
                                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                            </a>
                        </div>

                        <div className="contact-card">
                            <i className="bx bxl-linkedin-square contact-card-icon"></i>

                            <h3 className="contact-card-title">LinkedIn</h3>
                            <span className="contact-card-data">Rafael Oliveira</span>

                            <a href="https://www.linkedin.com/in/rafael-oliveira-44351b18a/" className="contact-button" target="_blank">
                                Write me
                                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-send-content">
                    <h3 className="contact-title">Write me your project</h3>

                    <form action="" 
                        className="contact-form" 
                        ref={form} 
                        onSubmit={sendEmail}>
                        <div className="contact-form-div">
                            <label 
                                className={`contact-form-tag ${isNameFocused ? 'focused' : ' '}`}
                                htmlFor='name'
                                >Name</label>
                            <input 
                                type="text" 
                                name="name"
                                id='name'
                                className="contact-form-input" 
                                placeholder="Insert your name" 
                                onFocus={() => setIsNameFocused(true)}
                                onBlur={() => setIsNameFocused(false)}
                                />
                        </div>

                        <div className="contact-form-div">
                            <label 
                                className={`contact-form-tag ${isEmailFocused ? 'focused' : ' '}`}
                                htmlFor='email'
                                >Mail</label>
                            <input 
                                type="email" 
                                name="email"
                                id='email'
                                className="contact-form-input" 
                                placeholder="Insert your email" 
                                onFocus={() => setIsEmailFocused(true)}
                                onBlur={() => setIsEmailFocused(false)}
                                />
                        </div>

                        <div className="contact-form-div contact-form-area">
                            <label 
                                className={`contact-form-tag ${isProjectFocused ? 'focused' : ' '}`}
                                htmlFor='project'
                                >Opportunity</label>
                            <textarea 
                                name="project"
                                id='project'
                                cols={30} 
                                rows={10} 
                                className="contact-form-input"
                                placeholder="Describe how I can boost your business!"
                                onFocus={() => setIsProjectFocused(true)}
                                onBlur={() => setIsProjectFocused(false)}
                                ></textarea>
                        </div>

                        <button className="button button-flex" type='submit'>
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" id="message">
                                <path fill="var(--container-color)" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z">
                                </path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer 
            position="bottom-right" 
            autoClose={3000}  />
        </section>
    )
}

export default Contact