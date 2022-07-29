'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');
const config = require('../config').configuration;
const Pool = require('pg').Pool
const pool = new Pool(config);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.delete_user = function delete_user (req, res, next, id) {
  const idUser = id

  pool.query('DELETE FROM public."User" WHERE "idUser" = $1', [idUser], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`User deleted with ID: ${id}`)
  })
};

module.exports.get_users = function get_users (req, res, next) {
  pool.query('SELECT * FROM public."User" ORDER BY "idUser"', (error, results) => {    
    if(!results){
      res.status(200).json('No Rows Found')  
    }
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

module.exports.log_in = async function log_in (req, res, next, body) {
  try{
 // Get user input
 const { nameUser, passwordUser } = req.body;

 // Validate user input
 if (!(nameUser && passwordUser)) {
  res.status(400).send("All input is required");
}
var b=false
var user
const result=await pool.query('SELECT * FROM public."User" where "nameUser"=$1', [nameUser])
if(result){
 user=result.rows[0]
  b=  await bcrypt.compare(passwordUser, user.passwordUser)
  //
}
if (b) {
  // Create token
  const token = jwt.sign(
    { user_id: user._id, nameUser },
    process.env.TOKEN_KEY,
    {
      expiresIn: "5h",
    }
  );
  return res.status(200).send(nameUser);
}else{
  return res.status(200).send("Invalid Credentials");
}

  } catch (err) {
    console.log(err);
    }
};

module.exports.new_user = async function new_user (req, res, next, body) {
  // our register logic goes here...
  console.log('1. signup');
   // Our register logic starts here
   try {
    // Get user input
    const body =req.body; 

    const { nameUser, passwordUser} = req.body;
   // Validate user input
   if (!(nameUser && passwordUser)) {
    res.status(400).send("All input is required");
   }
   
     // check if user already exist
     const result=await pool.query('SELECT * FROM public."User" where "nameUser"=$1', [nameUser])
   if(result){
    return res.status(409).send("User Already Exist. Please Login");
   }       
      
   
        //Encrypt user password
        const encryptedUserPassword =  await bcrypt.hash(passwordUser, 10);
    // Create user in our database
    pool.query('INSERT INTO public."User"("nameUser", "passwordUser")	VALUES ($1, $2)', [nameUser,encryptedUserPassword], (error, result) => {
     if (error) {
       throw error
     }
     res.status(201).send(result.rows[0])
    })
   
    
   } catch (err) {
   console.log(err);
   }
   console.log('2. signup');

};

module.exports.update_user = async function update_user (req, res, next, body, id) {
  const idUser = id
  const { nameUser, passwordUser } = req.body

  //Encrypt user password
  const encryptedUserPassword =  await bcrypt.hash(passwordUser, 10);

  pool.query('UPDATE public."User" SET "nameUser"=$1, "passwordUser"=$2	WHERE "idUser"=$3',
    [nameUser, encryptedUserPassword, idUser],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User modified with ID: ${id}`)
    }
  )
};
