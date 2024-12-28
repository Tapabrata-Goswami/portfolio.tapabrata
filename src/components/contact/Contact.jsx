import './Contact.css'

function Contact() {
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
                                        // value={Fname}
                                        //onChange={(e) => setFname(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='col-md-6 mob-pd-t-1'>
                                <div className='form-group'>
                                    <input
                                        type="text"
                                        placeholder='Last name*'
                                        className='form-control'
                                        //onChange={(e) => setLname(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="from-group mt-2">
                            <input
                                type="email"
                                className='form-control'
                                placeholder='Email*'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="from-group mt-2">
                            <input
                                type="email"
                                className='form-control'
                                placeholder='Contact number*'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form-group mt-2'>
                            <textarea className="form-control" rows="5" 
                            placeholder="Enter your message" onChange={(e) => setMsg(e.target.value)}></textarea>
                        </div>
                        <div className='from-group'>
                            <button className='btn btn-primary mt-2 contact-form-sbmit-button' onClick={(e) => submit(e)}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;