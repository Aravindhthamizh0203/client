import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from '../helper/Validate'

function Password() {
    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })
    return (
        <div className='container mx-auto'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex items-center justify-center h-Screen'>
                <div className={styles.glass}>
                    <div className='flex flex-col items-center title'>
                        <h2 className='text-5xl font-bold'>hello again</h2>
                        <span className='py-4 text-xl w-2/3 text-center text-grey-500'>
                            it me aravindh as ravi king but not to tell you
                        </span>
                        <form className='py-1' onSubmit={formik.handleSubmit}>
                            <div className='profile flex justify-center  py-4'>
                                <img className={styles.profile_img} src={avatar} alt='avatar' />
                            </div>
                            <div className='textbox flex flex-col items-start gap-6'>
                                <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='password' />

                                <button type='submit' className={styles.btn}>sign up</button>
                            </div>
                            <div className='text-center py-4'>
                                <span className='text-gray-500'>
                                    forget password &nbsp;&nbsp;
                                    <Link className='text-red-500' to='/recovery' >recover now</Link>
                                </span>
                            </div>

                        </form>

                    </div>
                </div>

            </div >
        </div >
    )
}

export default Password