import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import {useForm} from "react-hook-form";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

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
        <section id="contact"
                 className="pt-24 w-full flex flex-col min-h-screen justify-around bg-color-secondary pb-4
                 md:pt-40
                 lg:pt-48
                 xl:pt-32"
        >
            {result && (<p className={`${result.success ? 'success' : 'error'}`}>{result.message}</p>)}
            <h1
                className="text-3xl text-center text-black p-3 section-title mb-8
                md:text-5xl md:p-5
                lg:text-6xl lg:p-8
                xl:text-4xl xl:p-3"
            >
                <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="mr-3"
                />
                CONTACT
            </h1>
            <form
                className="flex flex-col items-center text-lg
                md:text-3xl
                lg:text-4xl
                xl:text-xl xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:w-3/5 xl:m-auto xl:h-auto xl:gap-2"
                action="#"
                method="post"
                onSubmit={(e) => e.preventDefault()}>
                <fieldset
                    className="w-4/5
                    xl:w-3/5 xl:justify-self-end "
                >
                    {errors.name && (
                        <div
                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                        >
                            Ce champ est obligatoire
                        </div>
                    )
                    }
                    <br/>
                    <input id="name"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight
                           focus:outline-none focus:shadow-outline mb-3"
                           type="text"
                           name="name"
                           onChange={onInputChange}
                           value={info.name}
                           ref={register({required: true})}
                           placeholder="Nom"
                    />
                </fieldset>
                <fieldset
                    className="w-4/5
                    xl:w-3/5 xl:justify-self-start xl:self-end"
                >
                    {errors.email && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        Ce champ est obligatoire
                        </div>
                    )
                    }
                    <input id="email"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight
                           focus:outline-none focus:shadow-outline mb-3"
                           type="email"
                           name="email"
                           onChange={onInputChange}
                           value={info.email}
                           ref={register({required: true})}
                           placeholder="Email"
                    />
                </fieldset>
                <fieldset
                    className="w-4/5
                    xl:w-3/5 xl:col-span-2 xl:m-auto"
                >
                    {errors.subject && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            Ce champ est obligatoire
                        </div>
                    )
                    }
                    <input id="subject"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight
                              focus:outline-none focus:shadow-outline mb-3"
                              type="text"
                              name="subject"
                              onChange={onInputChange}
                              value={info.subject}
                              ref={register({required: true})}
                              placeholder="Objet"
                    />
                </fieldset>
                <fieldset
                    className="w-4/5 pb-20
                    xl:w-3/5 xl:col-span-2 xl:m-auto"
                >
                    {errors.message && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            Ce champ est obligatoire
                        </div>
                    )
                    }
                    <textarea id="message"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight
                              focus:outline-none focus:shadow-outline mb-3 md:h-40 h-32"
                              type="text"
                              name="message"
                              onChange={onInputChange}
                              value={info.message}
                              ref={register({required: true})}
                              placeholder="Message"
                    />
                </fieldset>
                <button
                    className="bg-color-primary-2 hover:bg-color-primary hover:color-primary-3 text-white font-bold py-3 px-20 rounded text-xl mb-12
                    md:text-3xl
                    lg:text-5xl
                    xl:text-2xl xl:col-span-2 xl:w-2/5 xl:justify-self-center"
                    type="submit"
                    onClick={handleSubmit(sendEmail)}
                >
                        Envoyer
                </button>
            </form>
            <div
                className="text-xl self-center
                md:text-4xl
                xl:text-2xl"
            >
                <div id="mail-contact">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="color-primary-3"
                    />
                    <a href="mailto:li.kevin.contact@gmail.com"
                       className="p-3">li.kevin.contact@gmail.com</a>
                </div>
                <div id="mobile-contact" className="text-center">
                    <FontAwesomeIcon
                        icon={faMobileAlt}
                        className="color-primary-3"
                    />
                    <span className="p-3">06 76 33 01 70</span>
                </div>
            </div>
        </section>
    );
}



export default Contact;