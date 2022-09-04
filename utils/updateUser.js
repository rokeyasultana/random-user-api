const fs = require("fs");

const updateOneUser = (req, res) => {
  const { id } = req.params;
  const newUserData = req.body;
  const { error, user } = req || {};
  if (error) {
    res.status(500).json({ error: "internal server error" });
  } else {
    const updateUser = { ...user, ...newUserData };
    fs.readFile("../user.json", "utf-8", (err, jsonString) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "internal error" });
      } else {
        const allUser = JSON.parse(jsonString);
        const updateUserArr = allUser.filter((user) => user.id != id);
        const updatedUser = JSON.stringify([...updateUserArr, updateUser]);
        fs.writeFile("../user.json", updatedUser, (error) => {
          if (error) {
            res.status(500).json({ message: "internal error" });
          } else {
            res.status(201).json({ message: "user updated" });
          }
        });
      }
    });
  }
};

module.exports = updateOneUser;