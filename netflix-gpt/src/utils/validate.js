export const checkValidData = (email, password,username,phone) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isUserNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username);
    // const isPhoneNumberValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);

    // if(!isUserNameValid) return "Username is not valid";
    // if(!isPhoneNumberValid) return "PhoneNumber is not valid";

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    
    
    return null;
}