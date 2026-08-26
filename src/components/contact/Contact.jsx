import emailjs from '@emailjs/browser';
import { useState, useEffect, useRef } from 'react';
import './Contact.css'

const MIN_FILL_TIME_MS = 3000;

function Contact() {
    const [mailSendStatus, updatemailSendStatus] = useState(null);
    const [error, updateError] = useState('');
    const [loading, setLoading] = useState(false);
    const [firstName, updateFirstName] = useState('');
    const [lastName, updateLastName]= useState('');
    const [mail, updateMail] = useState('');
    const [number, updateNumber] = useState('');
    const [message, updateMessage]= useState('');
    const [website, updateWebsite] = useState('');
    const to_name ="Tapabrata";
    const formMountTime = useRef(Date.now());

    const formData = {to_name, firstName, lastName, mail, number, message};

    const onSubmit= async (e) =>{
        e.preventDefault();

        if(website){
            return;
        }
        if(Date.now() - formMountTime.current < MIN_FILL_TIME_MS){
            return;
        }

        setLoading(true);

        emailjs.init({
            publicKey: 'Fn6ef-SH3nFFPUxMR',
            blockHeadless: true,
            blockList: {
                watchVariable: 'userEmail',
            },
            limitRate: {
                id: 'app',
                throttle: 10000,
            },
        });
        
        await emailjs.send('service_udpva7q', 'template_mi2h4tj', formData).then(
            (response) => {
                setLoading(false)
                if(response.status){
                    updatemailSendStatus(true);
                    updateFirstName('');
                    updateLastName('');
                    updateMail('');
                    updateNumber('');
                    updateMessage('');
                }else{
                    updatemailSendStatus(false);
                }
            },
            (error) => {
                setLoading(false)
                updatemailSendStatus(false)
                updateError(error.message); 
            },
        );
    }

    useEffect(()=>{
        setTimeout(()=>{
            if(mailSendStatus){
                updatemailSendStatus(null)
            }else{
                updatemailSendStatus(null)
            }
        },2000)
    },[mailSendStatus]);

    return (
        <div className="container my-5" id="contact-me">
            <div className='row justify-content-center ml-100 get-in-touch-contaier'>
                <div className='col-md-6 d-flex align-items-center'>
                    <div className='mob-pd-b-2'>
                        <h6 className='contact-heading pb-3'>Get in touch</h6>
                        <p className='get-in-touch-info'><b>Email:</b> tapabratagoswami21@gmail.com</p>
                        <p className='get-in-touch-info'><b>Phone:</b> +91 86378 15595</p>
                    </div>

                </div>
                <div className="col-md-6">
                    <form className='p-3 contact-me-form-container'>
                        <div className='honeypot-field' aria-hidden="true">
                            <label htmlFor="website">Leave this field empty</label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                tabIndex="-1"
                                autoComplete="off"
                                value={website}
                                onChange={(e) => updateWebsite(e.target.value)}
                            />
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <input
                                        type="text"
                                        placeholder='First name*'
                                        aria-label='First name'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => updateFirstName(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='col-md-6 mob-pd-t-1'>
                                <div className='form-group'>
                                    <input
                                        type="text"
                                        placeholder='Last name*'
                                        aria-label='Last name'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => updateLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="from-group mt-2">
                            <input
                                type="email"
                                className='form-control'
                                placeholder='Email*'
                                aria-label='Email'
                                value={mail}
                                onChange={(e) => updateMail(e.target.value)}
                            />
                        </div>
                        <div className="from-group mt-2">
                            <input
                                type="tel"
                                className='form-control'
                                placeholder='Contact number*'
                                aria-label='Contact number'
                                value={number}
                                onChange={(e) => updateNumber(e.target.value)}
                            />
                        </div>
                        <div className='form-group mt-2'>
                            <textarea className="form-control" rows="5"
                            value={message}
                            placeholder="Enter your message" aria-label="Message" onChange={(e) => updateMessage(e.target.value)}></textarea>
                        </div>
                        <div className='from-group'>
                            <button className='btn btn-primary mt-2 contact-form-sbmit-button' disabled={loading ? true : false } onClick={onSubmit} >{ loading ? 'Sending..' : 'Submit'}</button>
                        </div>
                        <div className='pt-2'>
                            <p>
                                { mailSendStatus !== null ?
                                    mailSendStatus ? 
                                        'Message sent successfully.'
                                        : error
                                :   ''
                                }
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;