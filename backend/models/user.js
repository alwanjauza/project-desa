const connection = require("../config/db");

const createUser = (user, callback) => {
  connection.query("INSERT INTO users SET ?", user, (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

const findUserByEmail = (email, callback) => {
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      return callback(null, results[0]);
    }
  );
};

module.exports = {
  findUserByEmail,
  createUser,
};
