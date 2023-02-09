const checkEmail = (email) => {
  const re = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    );
  
    if (!re.test(email)){
      const err =new Error("invalid email");
      err.statusCode = 400;
      throw err;
    }
};
const checkPassword = (password) => {
  const cp = new RegExp(
   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@$#$%^&*\-?])[A-Za-z\d~!@$#$%^&*\-?]{8,}/
   );
}

module.exports = { 
  checkEmail,
  checkPassword
 }