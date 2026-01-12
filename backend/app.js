const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

/* =======================
   MIDDLEWARES
======================= */

// CORS (Frontend: Vite -> localhost:5173)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// JSON body parser
app.use(express.json());

/* =======================
   DATABASE
======================= */

connectDB();

/* =======================
   ROUTES
======================= */

app.use("/api/auth", require("./routes/auth.routes.js"));

/* =======================
   SERVER
======================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
