const express = require("express");
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const router = express.Router()

//now make route.


// first we are going to create user using post method.
//  api--->  

router.post("/createuser",[   //Iam using here express validation
    body("name","Enter valid name").isLength({min:5}),
    body("email","Enter valid Email").isEmail(),
    body("password","Enter Valid Password").isLength({min:5, max:8}) 
]
    , (req, res)=> {
  try {
       //object destructur
    //    const {name, email, password} = req.body
    //    let createUser = new User ({
    //        name, email, password
    //    })
      const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

       let createUser = new User ( {
           name:req.body.name,
           email:req.body.email,
           password:req.body.password
        })
        createUser.save().then((data => {
            res.send(data);
        }))
  } catch(error){
      console.error(error)
      res.status(500).send("Internal server Error")
  }
});




module.exports = router;