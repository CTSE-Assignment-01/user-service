// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const userRoutes = require("./routes/user.routes");

// const mongoDB = "mongodb+srv://root:root@cluster0.spmcifx.mongodb.net/ctse";

// // Connect to MongoDB
// mongoose
//   .connect(mongoDB)
//   .then(() => console.log("MongoDB connection successful"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Enable CORS
// app.use(cors());

// // User routes
// app.use("/users", userRoutes);

// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port  ${PORT}`);
// });

// module.exports = app;



// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const userRoutes = require("./routes/user.routes");
// const bodyParser = require("body-parser");

// const mongoDB = "mongodb+srv://root:root@cluster0.spmcifx.mongodb.net/ctse";

// mongoose
//   .connect(mongoDB)
//   .then(() => console.log("MongoDB connection successful"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use("/users", userRoutes);
// // const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// module.exports = app; // ✅ Only export app

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const bodyParser = require("body-parser");

// MongoDB connection
const mongoDB = "mongodb+srv://root:root@cluster0.spmcifx.mongodb.net/ctse";

mongoose
  .connect(mongoDB)
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Express app setup
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/users", userRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
