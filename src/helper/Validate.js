
import toast from 'react-hot-toast'
// login page validate
export async function usernameValidate(values) {
    const error = usernameVerify({}, values);

    return error;
}
// password page validate 

export async function passwordValidate(values) {
    const error = passwordVerify({}, values);

    return error;
}
//  reset page validate
export async function ResetPasswordValidate(values) {
    const error = passwordVerify({}, values);
    if (values.password !== values.confirm_pwd) {
        error.exist = toast.error('password not match')
    }
    return error;
}
// register paf]ge validate
export async function registerValidate(values) {
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values)

    return errors;
}

//profile page validate
export async function profileValidate(values) {
    const errors = emailVerify({}, values);
    return errors;
}









// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//validate OTP

// function OTPVerify(error = {}, values) {
//     if (!values.OTP) {
//         error.OTP = toast.error('OTP required ...!');
//     } else if (values.OTP.includes(" ")) {
//         error.OTP = toast.error('invalid OTP...!');
//     } else if (values.OTP.length < 6) {
//         error.OTP = toast.error('OTP must conatin 6 digit..!')
//     }
//     return error;

// validate email
function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error('Email required ...!');
    } else if (values.email.includes(" ")) {
        error.email = toast.error('invalid email...!');
    } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
        error.email = toast.error('invalid email...!');
    }
    return error;
}




// validate password
function passwordVerify(error = {}, values) {
    const special_char = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/ ? ~]/;

    if (!values.password) {
        error.password = toast.error(' password required ...!');
    } else if (values.password.includes(" ")) {
        error.password = toast.error('invalid password...!');
    } else if (values.password.length < 8) {
        error.password = toast.error('must contain 8 charaters..!');
    } else if (!special_char.test(values.password)) {
        error.password = toast.error('must contain special charaters..!');
    }
    return error;
}
// validate username
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error('username required ...!');
    } else if (values.username.includes(" ")) {
        error.username = toast.error('invalid username...!');
    }
    return error;
}