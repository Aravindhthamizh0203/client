import React from 'react'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { ResetPasswordValidate } from '../helper/Validate'
function Reset() {
    const formik = useFormik({
        initialValues: {
            password: ''
        }, confirm_pwd: '',
        validate: ResetPasswordValidate,
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
                <div className={styles.glass} style={{ width: '30%' }}>
                    <div className='flex flex-col items-center title'>
                        <h2 className='text-5xl font-bold'>Reset</h2>
                        <span className='py-4 text-xl w-2/3 text-center text-grey-500'>
                            Enter new password
                        </span>
                        <form className='pt-20' onSubmit={formik.handleSubmit}>
                            <div className='textbox flex flex-col items-start gap-6'>
                                <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='new password' />
                                <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="password" placeholder='repeat password' />
                                <button type='submit' className={styles.btn}>reset password</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div >
        </div >
    )
}

export default Reset