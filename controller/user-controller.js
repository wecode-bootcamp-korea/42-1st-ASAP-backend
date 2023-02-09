const {userService} = require('../services/user-services');

const signUp = async (req, res) => {
  try {
    const {email, password, firstname, lastname, skintype} =req.body;

    await userService.signUp(email, password, firstname, lastname, skintype);

    if (!email|| !password || !firstname || !lastname){
      throw new Error("KEY Error!");
    }

    return res.status(201).send({message: "SIGNUP_SUCCESS"});
  }catch (err) {
    res.status(err.statusCode || 400).json({message: err.message});
  }
};

const signIn = async (req, res) => {
  try{
    const {email, password }= req.body;

   const accessToken = await userService.signIn(email,password);
   
   
   if( !eamil || !password ){
    throw new Error("SIGN IN FAILED!");
   }

   return res.status(200).json({accessToken: accessToken});
  } catch (err){
    res.status(er.statusCode || 400).json ({message: err.message});
  }
};



module.exports = {
  signUp, 
  signIn
};