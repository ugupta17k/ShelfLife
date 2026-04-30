require("dotenv").config();
const express = require("express");
const { UserModel } = require("./models/UserSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AuthMiddleware } = require("./middlewares/authMiddleware");
const { ConnectTODb } = require("./db/db");
const referralCodes = require("referral-codes");
const { HouseHoldModel } = require("./models/HouseholdSchema");

const app = express();
ConnectTODb();

app.use(express.json());

// ------------ SIGNUP and LOGIN -------------------------

app.post("/api/auth/register", async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  const EmailExist = await UserModel.findOne({
    email: email,
  });

  const hashPassword = await bcrypt.hash(password, 10);

  if (EmailExist) {
    res.status(409).json({
      message: "Email already exist",
    });
    return;
  }

  let createUser = await UserModel.create({
    name,
    email,
    password: hashPassword,
  });

  res.json({
    message: "user created successfully",
    createUser,
  });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const User = await UserModel.findOne({
    email,
  });

  const passwordMatch = bcrypt.compare(password, User.password);

  let token;

  if (User && passwordMatch) {
    token = jwt.sign(
      {
        userId: User._id,
      },
      process.env.JWT_SECRET,
    );
  } else {
    res.status(404).json({
      message: "user not found with this credentials",
    });
    return;
  }
  res.json({
    message: "Sign up done",
    token,
  });
});

// ------------ CREATE HOUSEHOLD -------------------------

app.post("/api/households", AuthMiddleware, async (req,res) => {
  const userId = req.userId;
  let HouseHoldName = req.body.HouseHoldName;
  console.log(userId)

  let InvitationCode = referralCodes.generate({
    length: 6,
    count: 1,
  });

  let code = InvitationCode[0]

  console.log(InvitationCode);

  let createHousehold = await HouseHoldModel.create({
    HouseHoldName,
    inviteCode: code,
    member: [userId],
    createdAt: new Date(),
  })

  await UserModel.findByIdAndUpdate(userId, {
    HouseHoldId: createHousehold._id
  })

  res.json({
    message:"HouseHold created Successfully",
    InvitationCode: code,
    House : {
        createHousehold
    }
  })
});

// app.post("/api/households/join", AuthMiddleware, async (req,res)=>{
//     const userId = req.userid
//     const Invitecode = req.body.InviteCode

// })



app.listen(3000, () => {
  console.log("server is running on port 3000");
});
