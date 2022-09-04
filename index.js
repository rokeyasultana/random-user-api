const express = require("express");
const cors = require("cors");
const app = express();
const userRoute= require("./routes/user.routes");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Random User Api Running on the Port");
  });

  app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log('Server Is Running on port', PORT);
})

