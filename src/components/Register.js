import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidate } from '../helper/Validate'
import convertTobase64 from '../helper/convert'

function Register() {
    const [file, setFile] = useState();
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: ''
        },
        validate: registerValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, { profile: file || '' });
            console.log(values)
        }
    })
    // fromik dont support file to upload
    const onupload = async e => {
        const base64 = await convertTobase64(e.target.files[0]);
        setFile(base64);
    }


    return (
        <div className='container mx-auto'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex items-center justify-center h-Screen'>
                <div className={styles.glass} style={{ width: '35%', paddingTop: '3em' }}>
                    <div className='flex flex-col items-center title'>
                        <h2 className='text-5xl font-bold'>Register</h2>
                        <span className='py-4 text-xl w-2/3 text-center text-grey-500'>
                            happy to join you!!!
                        </span>
                        <form className='py-1' onSubmit={formik.handleSubmit}>
                            <div className='profile flex justify-center  py-4'>
                                <label htmlFor='profile'>
                                    <img className={styles.profile_img} src={file || avatar} alt='avatar' />
                                </label>
                                <input onChange={onupload} type='file' id='profile' name='profile' />
                            </div>
                            <div className='textbox flex flex-col items-start gap-6'>
                                <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" placeholder='email *' />
                                <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='username *' />
                                <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='password *' />

                                <button type='submit' className={styles.btn}>register</button>
                            </div>
                            <div className='text-center py-4'>
                                <span className='text-gray-500'>
                                    Already register? &nbsp;&nbsp;
                                    <Link className='text-red-500' to='/' >Login now</Link>
                                </span>
                            </div>

                        </form>

                    </div>
                </div>

            </div >
        </div >
    )
}

export default Register