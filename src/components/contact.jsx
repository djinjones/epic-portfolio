import React, { useState } from 'react';


function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Regex pattern for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        const newErrors = { ...errors };
        switch (name) {
            case 'name':
                if (!value) {
                    newErrors.name = 'Name is required';
                } else {
                    newErrors.name = '';
                }
                break;
            case 'email':
                if (!value) {
                    newErrors.email = 'Email is required';
                } else if (!emailRegex.test(value)) {
                    newErrors.email = 'Email is not valid';
                } else {
                    newErrors.email = '';
                }
                break;
            case 'message':
                if (!value) {
                    newErrors.message = 'Message is required';
                } else {
                    newErrors.message = '';
                }
                break;
            default:
                break;
        }
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasErrors = false;
        const newErrors = {};

        if (!form.name) {
            newErrors.name = 'Name is required';
            hasErrors = true;
        }
        if (!form.email) {
            newErrors.email = 'Email is required';
            hasErrors = true;
        } else if (!emailRegex.test(form.email)) {
            newErrors.email = 'Email is not valid';
            hasErrors = true;
        }
        if (!form.message) {
            newErrors.message = 'Message is required';
            hasErrors = true;
        }

        setErrors(newErrors);

        if (!hasErrors) {
            console.log('Form submitted:', form);
            setForm({
                name: '',
                email: '',
                message: '',
            });
            setErrors({});
        }
    };

    return (
        <div className='card'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <p className='error-text'>{errors.name}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && <p className='error-text'>{errors.email}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message:</label>
                    <textarea
                        id='message'
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input ${errors.message ? 'error' : ''}`}
                    />
                    {errors.message && <p className='error-text'>{errors.message}</p>}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
