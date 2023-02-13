const validateEmail = (email) => {
  const emailRegex= new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    );
  
    if (!emailRegex.test(email)){
      const err = new Error("invalid email");
      err.statusCode = 400;
      throw err;
    }
};

const validatePassword = (password) => {
  const passwordRegex= new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@$#$%^&*\-?])[A-Za-z\d~!@$#$%^&*\-?]{8,20}/
      );

    if (!passwordRegex.test(password)){
      const err = new Error("invalid password");
      err.statusCode = 400;
      throw err;
    }
}

module.exports = { 
  validateEmail,
  validatePassword
 }