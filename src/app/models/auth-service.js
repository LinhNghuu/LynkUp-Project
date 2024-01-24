const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const userSchema = new mongoose.Schema({
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    loginHistory: [{
      dateTime: { type: Date, default: Date.now },
      userAgent: String
    }]
  });
  

let User = mongoose.model('User', userSchema);

// Initialize database connection
function initialize() {
    return new Promise((resolve, reject) => {
      mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          // Check if the User model has already been initialized
          if (mongoose.models.User) {
            // Use the existing model
            User = mongoose.model("User");
          } else {
            // Initialize a new model
            User = mongoose.model("User", userSchema);
          }
          console.log('Database initialized');
          resolve();
        })
        .catch(err => {
          console.error('Error initializing database:', err);
          reject(err);
        });
    });
  }
  

// Register new user
function registerUser(userData) {
    return new Promise((resolve, reject) => {
      // Check if passwords match
      if (userData.password !== userData.password2) {
        reject("Passwords do not match");
      } else {
        // Hash the password
        bcrypt.hash(userData.password, 10) // Ensure userData.password is not undefined
          .then(hash => {
            // Create a new user with the hashed password
            let newUser = new User({
              userName: userData.userName, // Check if userData.userName is provided
              password: hash, // This should now contain the hashed password
              email: userData.email, // Check if userData.email is provided
              loginHistory: [] // Initialize login history
            });
  
            // Save the new user to the database
            newUser.save()
              .then(() => resolve())
              .catch(err => {
                if (err.code === 11000) {
                  reject("User Name already taken");
                } else {
                  reject(`There was an error creating the user: ${err}`);
                }
              });
          })
          .catch(err => reject(`Error hashing password: ${err}`)); // Error occurs here
      }
    });
  }

// Authenticate user
function checkUser(userData) {
  return new Promise((resolve, reject) => {
    User.findOne({ userName: userData.userName })
      .then(user => {
        if (!user) {
          reject(`Unable to find user: ${userData.userName}`);
        } else {
          bcrypt.compare(userData.password, user.password)
            .then(isMatch => {
              if (!isMatch) {
                reject(`Incorrect Password for user: ${userData.userName}`);
              } else {
                // Update login history
                user.loginHistory.unshift({ dateTime: new Date().toString(), userAgent: userData.userAgent });

                User.updateOne({ _id: user._id }, { $set: { loginHistory: user.loginHistory } })
                  .then(() => resolve(user))
                  .catch(err => reject(`There was an error verifying the user: ${err}`));
              }
            })
            .catch(err => reject(`Error verifying password: ${err}`));
        }
      })
      .catch(err => reject(`Unable to find user: ${userData.userName}`));
  });
}

module.exports = {
  initialize,
  registerUser,
  checkUser
};
