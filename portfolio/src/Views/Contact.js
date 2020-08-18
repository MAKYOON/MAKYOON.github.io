import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobile} from "@fortawesome/free-solid-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import {useForm} from "react-hook-form";


function Contact() {
    const {register, errors, handleSubmit} = useForm();

    const [info, setInfo] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const [result, setResult] = useState(null);

    const sendEmail = () => {
        axios
            .post('/send', {...info})
            .then(response => {
                setResult(response.data);
                setInfo({name: '', email: '', subject: '', message: ''});
            })
            .catch(() => {
                setResult({success: false, message: 'Something went wrong. Try again later'});
            });
    }

    const onInputChange = event => {
        const { name, value } = event.target;

        setInfo({
            ...info,
            [name]: value
        });
    };

    return (
        <section style={{backgroundImage: `url(${require("../Assets/contact.jpg")}` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                 id="contact"
                 className="pt-20 text-white w-full flex flex-col h-screen justify-around"
        >
            {result && (<p className={`${result.success ? 'success' : 'error'}`}>{result.message}</p>)}
            <h1  className="font-bold text-center text-3xl"> CONTACT </h1>
            <form className="flex flex-col items-center opacity-100" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
                <fieldset className="w-4/5">
                    <label htmlFor="name">Nom</label> <span className="text-red-500">*</span>
                    {errors.name && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            Ce champ est obligatoire
                        </div>
                    )
                    }
                    <br/>
                    <input id="name"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight
                           focus:outline-none focus:shadow-outline mb-3 color-primary"
                           type="text"
                           name="name"
                           onChange={onInputChange}
                           value={info.name}
                           ref={register({required: true})}
                    />
                </fieldset>
                <fieldset className="w-4/5">
                    {errors.email && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        Ce champ est obligatoire
                        </div>
                    )
                    }
                    <label htmlFor="email">Email</label> <span className="text-red-500">*</span>
                    <input id="email"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight
                           focus:outline-none focus:shadow-outline mb-3 color-primary"
                           type="email"
                           name="email"
                           onChange={onInputChange}
                           value={info.email}
                           ref={register({required: true})}
                    />
                </fieldset>
                <fieldset className="w-4/5">
                    {errors.subject && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            Ce champ est obligatoire
                        </div>
                    )
                    }
                    <label htmlFor="subject">Objet</label> <span className="text-red-500">*</span>
                    <input id="subject"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight
                              focus:outline-none focus:shadow-outline mb-3 color-primary"
                              type="text"
                              name="subject"
                              onChange={onInputChange}
                              value={info.subject}
                              ref={register({required: true})}
                    />
                </fieldset>
                <fieldset className="w-4/5 pb-20">
                    {errors.message && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            Ce champ est obligatoire
                        </div>
                    )
                    }
                    <label htmlFor="message">Message</label> <span className="text-red-500">*</span>
                    <textarea id="message"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight
                              focus:outline-none focus:shadow-outline mb-3 color-primary"
                              type="text"
                              name="message"
                              onChange={onInputChange}
                              value={info.message}
                              ref={register({required: true})}
                    />
                </fieldset>
                <button className="color-secondary hover:bg-blue-700 text-white font-bold py-3 px-20 rounded text-xl"
                        type="submit"
                        onClick={handleSubmit(sendEmail)}
                >
                        Envoyer
                </button>
            </form>
            <div className="text-xl self-center">
                <div id="mail-contact">
                    <FontAwesomeIcon
                        icon={faAt}
                    />
                    <a href="mailto:li.kevin.contact@gmail.com"
                       className="p-3 text-blue-500 font-bold">li.kevin.contact@gmail.com</a>
                </div>
                <div id="mobile-contact" className="text-center font-bold">
                    <FontAwesomeIcon
                        icon={faMobile}
                    />
                    <span className="p-3">06 76 33 01 70</span>
                </div>
            </div>
        </section>
    );
}



export default Contact;