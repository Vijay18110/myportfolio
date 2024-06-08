import style from '../css/constactme.module.css'
import a from '../../public/ui.jpeg'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'
const Contactme = () => {
    const form = useRef();
    const formname = useRef();
    const formemail = useRef();
    const formmessage = useRef();
    const handlevalidastion = () => {
        if (formname.current.value === "") {
            toast.error('enter name',
                {
                    autoClose: 8000,
                    position: "bottom-right",
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
            return false;
        }
        if (formemail.current.value === "") {
            toast.error('enter email',
                {
                    autoClose: 8000,
                    position: "bottom-right",
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
            return false;
        }
        if (formmessage.current.value == "") {
            toast.error('enter some message that you want to send',
                {
                    autoClose: 8000,
                    position: "bottom-right",
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",

                })
            return false;
        }

        return true;
    }
    const sendEmail = (e) => {


        e.preventDefault();
        if (handlevalidastion()) {


            emailjs
                .sendForm('service_yqnfozs', 'template_1oehsf6', form.current, {
                    publicKey: 'q25bcOXqIcVuqjeN1r-h7',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        alert("email send");
                        e.target.reset();
                    },

                    (error) => {
                        console.log('FAILED...', error.text);
                        alert("some error may occurr please make sure your internet connection stablished:")

                        formemail.current.value = ""
                        formname.current.value = ""
                        formmessage.current.value = ""
                    },

                )
        }
    }

    return (
        <>
            <section id={style.Contactme}>
                <h2 className={style.constactmetitle}> Contact Me</h2>
                <p className="contactmedesc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laudantium magnam dolores eius, cumque facere minima magni i
                    taque ratione officiis saepe ad quibusdam. Atque corrupti
                    officiis nesciunt provident velit numquam?
                </p>
                <form action="" className={style.contactme} ref={form} onSubmit={sendEmail}>
                    <input ref={formname} type="text" className={style.name} placeholder="your name" name="user_name" />
                    <input ref={formemail} type="email" className={style.email} placeholder="your email" name="user_email" />
                    <textarea ref={formmessage} name="message" id="textarea" row="5" placeholder="message"></textarea>
                    <button className={style.contactmebtn}> Submit</button>
                    <div className={style.linkimg}>
                        <img src={a} alt="" className={style.link} />
                        <img src={a} alt="" className={style.link} />
                        <img src={a} alt="" className={style.link} />
                        <img src={a} alt="" className={style.link} />
                    </div>

                </form>
            </section>
            <ToastContainer></ToastContainer>
        </>
    )
}
export default Contactme;