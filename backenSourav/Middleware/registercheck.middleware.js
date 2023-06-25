const registerCheck = (req, res, next) => {
  const { name, email, age , password,gender,city } = req.body;

  if (!name || !password || !email || !age || !gender || !city) {
    return res.status(400).json({ error: 'Fill all the required fields' });
  }

  if (password.length < 8) {
    return res.status(400).json({ error: 'Password should be at least 8 characters long' });
  }

  if (!/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
    return res.status(400).json({
      error: 'Password should contain at least one uppercase character, one number, and one special character',
    });
  }

  next();
};

module.exports = {registerCheck}

/**
 *  name: '',
        email: '',
        password: '',
        city: '',
        age: '',
        gender: '',
 */