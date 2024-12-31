import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import './Contact.css'


function Contact() {
    const [mailSendStatus, updatemailSendStatus] = useState(null);
    const [error, updateError] = useState('');
    const [loading, setLoading] = useState(false);
    const [firstName, updateFirstName] = useState('');
    const [lastName, updateLastName]= useState('');
    const [mail, updateMail] = useState('');
    const [number, updateNumber] = useState('');
    const [message, updateMessage]= useState('');
    const to_name ="Tapabrata";

    const formData = {to_name, firstName, lastName, mail, number, message};

    const onSubmit= async (e) =>{
        e.preventDefault();
        setLoading(true);

        updateFirstName('');
        updateLastName('');
        updateMail('');
        updateNumber('');
        updateMessage('');

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
                response.status ? 
                    updatemailSendStatus(true)
                        : updatemailSendStatus(false);
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
        <div className="container my-5 pb-5" id="contact-me">
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
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <input
                                        type="text"
                                        placeholder='First name*'
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
                                value={mail}
                                onChange={(e) => updateMail(e.target.value)}
                            />
                        </div>
                        <div className="from-group mt-2">
                            <input
                                type="tel"
                                className='form-control'
                                placeholder='Contact number*'
                                value={number}
                                onChange={(e) => updateNumber(e.target.value)}
                            />
                        </div>
                        <div className='form-group mt-2'>
                            <textarea className="form-control" rows="5" 
                            value={message}
                            placeholder="Enter your message" onChange={(e) => updateMessage(e.target.value)}></textarea>
                        </div>
                        <div className='from-group'>
                            <button className='btn btn-primary mt-2 contact-form-sbmit-button' disabled={loading ? true : false } onClick={onSubmit} >{ loading ? 'Sending..' : 'Submit'}</button>
                        </div>
                        <div className='pt-2'>
                            <p>
                                { mailSendStatus !== null ?
                                    mailSendStatus ? 
                                        'Message sent successfuly.' 
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