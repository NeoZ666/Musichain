const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../model/userModal');

const fs = require('fs');

const multer = require("multer");
const uploadMiddleware = multer({ dest: "./uploads/" });

const signToken = (id) => {
  return jwt.sign({ id }, 'my-name-is-nilanchala-panda-who-stays-in-goregaon-mumbai', {
    expiresIn: '90d',
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + 90 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  }

  // cookie options
  res.cookie('jwt', token, cookieOptions);

  // Remove Password from the respone body : 
  user.password = undefined;

  //5) Saving the imformation in the database :
  res.status(statusCode).json({
    message: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.uploadFile = uploadMiddleware.single("file");

exports.signup = (async (req, res, next) => {
  try{

    console.log("REQ FILE :", req.file);

    const { originalname, path } = req.file;
    const ext = originalname.split(".")[1];

    console.log(ext);

    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    // 1) Check if the user has all the fields filled :
  const {
    name,
    email,
    password,
    walletAddress,
    file = newPath,
    role
  } = req.body;
  // 2) Check for existing user with same email address :
  const alreadyExistUser = await User.findOne({ email });
  if (alreadyExistUser) {
    return next(new Error('Email is taken! Please login instead'));
  }

  // 3) If above both checks are passed, then start the process of creating new user :
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    file: req.body.file = newPath,
    walletAddress: req.body.walletAddress,
    role: req.body.role,
  });

  await user.save();

  //4) Creating JWT token for the authorized user :
  //5) Saving the imformation in the database :
  createSendToken(user, 201, res);
  }catch(e){
    console.log("ERROR : ",e);
  }
});

exports.login = (async (req, res, next) => {
try{
  const { email, password } = req.body;

  console.log(req.body);

  // 1) If email and password exists :
  if (!email || !password) {
    return next(new Error('Please provide email and password!', 400));
  }

  // 2) Verify password or email is same or not :
  const user = await User.findOne({ email }).select('+password');

  // if (!user || !(await user.correctPassword(password, user.password))) {
  //   return next(new Error('Email or Password is incorrect', 401));
  // }

  // 3) Send token, cuz first two steps completed 😊🫂
  createSendToken(user, 200, res);
}catch(err){
  console.log("ERROR :", err)
}
});

exports.protect = (async (req, res, next) => {
  let token;
  //1) Getting the token and check if it's there.
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(
      new Error('You are not logged in! Please login to get access', 401)
    );
  }

  //2) Verification the token --> ErrorController of prod mode not working
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3) If user still exists.
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new Error('User does not exist', 401));
  }

  console.log( 'decoded : ' ,decoded)
  console.log( 'decoded.iat : ' ,decoded.iat)

  //4) If user changes password after JWT_TOKEN.
  if (currentUser.changePasswordAfter(decoded.iat)) {
    return next(
      new Error('Your password has been changed. Please log in again')
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTES :
  req.user = currentUser;
  next();
});