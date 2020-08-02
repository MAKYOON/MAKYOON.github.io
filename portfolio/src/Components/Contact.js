import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobile} from "@fortawesome/free-solid-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

function Contact() {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const [result, setResult] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
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
        <section id="contact" className="text-white bg-black w-full flex flex-col">
            {result && (<p className={`${result.success ? 'success' : 'error'}`}>{result.message}</p>)}

            <h1 className="font-bold  text-center p-3 text-3xl"> CONTACT </h1>
            <form className="flex flex-col items-center" action="#" method="post">
                <div className="w-2/5">
                    <label htmlFor="name">Nom</label>
                    <br/>
                    <input id="name"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                           type="text"
                           name="name"
                           onChange={onInputChange}
                           value={info.name}
                    />
                </div>
                <div className="w-2/5">
                    <label htmlFor="email">Email</label>
                    <input id="email"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                           type="email"
                           name="email"
                           onChange={onInputChange}
                           value={info.email}
                    />
                </div>
                <div className="w-2/5">
                    <label htmlFor="subject">Objet</label>
                    <input id="subject"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                              type="text"
                              name="subject"
                              onChange={onInputChange}
                              value={info.subject}
                    />
                </div>
                <div className="w-2/5">
                    <label htmlFor="message">Message</label>
                    <textarea id="message"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                              type="text"
                              name="message"
                              onChange={onInputChange}
                              value={info.message}
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        onClick={sendEmail}
                >
                        Envoyer
                </button>
            </form>
            <div id="mail-contact" className="text-2xl self-center">
                <FontAwesomeIcon
                    icon={faAt}
                />
                <a href="mailto:li.kevin.contact@gmail.com"
                   className="p-3 text-blue-500">li.kevin.contact@gmail.com</a>
            </div>
            <div id="mobile-contact" className="text-2xl self-center">
                <FontAwesomeIcon
                    icon={faMobile}
                />
                <span className="p-3">06 76 33 01 70</span>
            </div>
        </section>
    );
}



export default Contact;