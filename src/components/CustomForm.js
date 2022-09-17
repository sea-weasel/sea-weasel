import React, {useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from './InputField';

const CustomForm = ({ status, message, onValidated}) => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email 
        });
    }

    return (
        <form className='mc__form' onSubmit={(e) => handleSubmit(e)}>
            <h3 className='mc__title'>Join email list</h3>

            {status === 'sending' && (
                <div className='mc__alert mc__alert--sending'>
                    sending...
                </div>
            )}
            {status === 'error' && (
                <div 
                    className='mc__alert mc__alert--error'
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === 'success' && (
                <div 
                    className='mc__alert mc__alert--success'
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            <div className='mc__field-container'>
                <InputField 
                    label='Email'
                    onChangeHandler={setEmail}
                    type='email'
                    value={email}
                    placeholder='enter email address'
                    isRequired
                />
            </div>
            <InputField 
                label='subscribe'
                type='submit'
                formValues={[email]}
            />
        </form>
        
    );
}

export default CustomForm;