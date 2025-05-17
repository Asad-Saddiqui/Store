const User = require('../Models/User')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.loginFunc = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(400).json({ msg: "Invalid login credentials" });
    }

    const isPasswordCorrect = await bycrypt.compare(password, findUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ msg: "Invalid login credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { _id: findUser._id, email: findUser.email },
      "123456",
      { expiresIn: "1d" }
    );

    res.cookie("token", token, { maxAge: 8 * 60 * 60 * 1000, httpOnly: true })
    res.cookie('user', findUser.email, { maxAge: 8 * 60 * 60 * 1000, httpOnly: false });
    res.cookie('role', findUser.role, { maxAge: 8 * 60 * 60 * 1000, httpOnly: false });


    return res.json({
      login: true,
      token,
      msg: "Login successful"
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
};


exports.signup = async (req, res) => {
  const data = req.body;
  const findUser = await User.findOne({ email: data.email })
  console.log(findUser)
  if (findUser) {
    return res.status(400).json({ msg: "Account Already Exist" })
  }




  const hashPassword = await bycrypt.hash(data.password, 10)

  console.log({ hashPassword })

  data.password = hashPassword
  data.role = "User"
  const user_ = await User.create(data)
  const saved = await user_.save()
  return res.json({ msg: "Account Created" })
}


exports.getUser = async (req, res) => {
  const findUser = await User.find()
  return res.json({ user: findUser })
}

