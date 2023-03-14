import React from 'react'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from '../helper/Validate'


function Recovery() {
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
                        <h2 className='text-5xl font-bold'>recover Password</h2>
                        <span className='py-4 text-xl w-2/3 text-center text-grey-500'>
                            enter OTP to recover Password
                        </span>
                        <form className='pt-20' onSubmit={formik.handleSubmit}>
                            <div className='textbox flex flex-col items-start gap-6'>
                                <div className='input text-center'>
                                    <span className='py-4 text-sm text-gray-500 text-left'>Enter 6 Digit OTP send to your email.
                                    </span>
                                    <input className={styles.textbox} type="number" placeholder='OTP' />

                                </div>

                                <button type='submit' className={styles.btn}>sign up</button>
                            </div>
                            <div className='text-center py-4'>
                                <span className='text-gray-500'>
                                    can't get OTP? &nbsp;&nbsp;
                                    <button className='text-red-500'  >resend OTP</button>
                                </span>
                            </div>

                        </form>

                    </div>
                </div>

            </div >
        </div >
    )
}

export default Recovery