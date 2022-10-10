require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user");
const workoutRoutes = require("./routes/workouts");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then((res) => {
    console.log("Connected to MONGODB");
    app.listen(process.env.PORT, () => {
      console.log("App is listening on " + process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
