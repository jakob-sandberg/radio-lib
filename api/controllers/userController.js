const sqlite3 = require("sqlite3");
const Encrypt = require("../Encrypt");
const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "../radioLibDB.db"));


const whoami = (req,res) => {
  res.json(req.session.user || "No user logged in");
}

const login = (req, res) => {

    let query = /*sql*/ `SELECT * FROM users WHERE email = $email`;

    let params = { $email: req.body.email};

    db.get(query, params, (err, userInDB) => {
      if(!userInDB) {
        res.status(401).json({error: "Wrong Password/Email or this user doesent exists :( "});
        return;
      }

      req.body.password = Encrypt.encrypt( req.body.password);
      if(userInDB.password ===  req.body.password) {
        delete userInDB.password;
        req.session.user = userInDB;
        res.json({success: "You're logged in", loggedInUser: userInDB});
      } else {
        res.status(401).json({error: "Wrong Password/Email"});
        return;
      }
    });
};
 
const logOut = (req, res) => {
  delete req.session.user;
  res.json({ success: "You're logged out" })
}

const register = (req, res) => {
  let userToRegister = req.body;

  let query = /*sql*/ `SELECT * FROM users WHERE email = $email`;
  let params = { $email: userToRegister.email };
  db.get(query, params, (err, userExist) => {
    if (userExist) {
      res.status(400).json({ error: "There's already an acount with this email" });
      return;
    }
  });

  userToRegister.password = Encrypt.encrypt(userToRegister.password);
  query = /*sql*/ `INSERT INTO users (userName, email, password) VALUES ($userName, $email, $password)`;
  params = {
    $userName: userToRegister.userName,
    $email: userToRegister.email,
    $password: userToRegister.password,
  };

  db.run(query, params, function (err) {
    if (err) {
      res.status(400).json({ error: err });
      return;
    }

    res.json({ success: "User register successfull", lastID: this.lastID });
  });
};

const deleteUserById = async (req, res) => {
  let user = await db.get(/*sql*/ ` SELECT * FROM users WHERE id = $id`, {
    $id: req.params.id,
  });
  console.log("User: ", user);
  if (!user) {
    res
      .status(400)
      .send(`User with id = ${req.params.id} does not exists`);
    return;
  }

  let query = /*sql*/ `DELETE FROM users WHERE id = $id`;
  let params = { $id: req.params.id };
  let result = await db.run(query, params);
  console.log("results: ", result);
  res.send("You're no longer an member");
};


module.exports = { whoami, login, logOut, register, deleteUserById };
