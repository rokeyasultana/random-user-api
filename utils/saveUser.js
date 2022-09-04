const fs = require("fs");
const saveUser = (req, res) => {
  const newUserData = req.body;
  const error = req.error;
  if (error) {
    res.send("error");
  } else {
    fs.readFile("../user.json", "utf-8", (err, jsonString) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "internal error" });
      } else {
        const user = JSON.stringify([...JSON.parse(jsonString), newUserData]);
        fs.writeFile("../user.json", user, (error) => {
          if (error) {
            res.status(500).json({ message: "internal error" });
          } else {
            res.status(201).json({ message: "user created" });
          }
        });
      }
    });
  }
};

module.exports = saveUser;
