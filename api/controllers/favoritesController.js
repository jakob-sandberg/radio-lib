const sqlite3 = require("sqlite3");

const fetch = require("node-fetch");

const path = require("path");
const db = new sqlite3.Database(path.join(__dirname, "../radioLibDB.db"));

const saveLikedChannel = (req, res) => {
  let favChannel = req.body;
  let query = /*sql*/ `
  INSERT INTO likedChannel(channelId, userId)
  VALUES ($channelId, $userId)
  `;
  let params = {
    $channelId: favChannel.channelId,
    $userId: req.session.user.userId
  };
  db.run(query, params, function (err) {
    if (err) {
      res.status(400).json({ error: err });
      return;
    }
    res.json({ success: "Favorite channel has been added" });
  });
};

const saveLikedProgram = (req, res) => {
  // console.log(req.body);
  let { programId } = req.body;
  let query = /*sql*/ `
  INSERT INTO likedProgram(programId, userId)
  VALUES ($programId, $userId)
  `;
  let params = {
    $programId: programId,
    $userId: req.session.user.userId
  };
  db.run(query, params, function (err) {
    if (err) {
      res.status(400).json({ error: err });
      return;
    }
    res.json({ success: "Favorite program has been added" });
  });
};

const getFavChannel = (req, res) => {
  // console.log(req.params);
  let query = /*sql*/ `
  SELECT * FROM likedChannel WHERE userId = $userId
  `;
  let params = { $userId: req.session.user.userId };
  db.all(query, params, (err, favChannel) => {
    if (!favChannel) {
      res.status(400).json({ error: "Something went wrong" });
      return;
    }
    res.json(favChannel);
  });
};

const getFavProgram = (req, res) => {
  // console.log(req.params);
  let query = /*sql*/ `
  SELECT * FROM likedProgram WHERE userId = $userId
  `;
  let params = { $userId: req.session.user.userId  };
  db.all(query, params, (err, favProgram) => {
    if (!favProgram) {
      res.status(400).json({ error: "Something went wrong" });
      return;
    }
    res.json(favProgram);
  });
};

const deleteFavChannel = (req, res) => {
  const { channelId, userId } = req.params; 
  // console.log(userId);
  let query = `DELETE FROM likedChannel WHERE channelId = $channelId AND userId = $userId` ; 
  let params = {
    $channelId: channelId,
    $userId: userId
  };
  db.run(query, params); 
  res.send("Channel has been deleted"); 
}

const deleteFavProgram = (req, res) => {
  const { programId, userId } = req.params; 
  // console.log(userId);
  let query = `DELETE FROM likedProgram WHERE programId = $programId AND userId = $userId` ; 
  let params = {
    $programId: programId,
    $userId: userId
  };
  db.run(query, params); 
  res.send("program has been deleted"); 
}

module.exports = {
  saveLikedChannel,
  saveLikedProgram,
  getFavChannel,
  getFavProgram,
  deleteFavChannel,
  deleteFavProgram
};