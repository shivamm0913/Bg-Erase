import "dotenv/config";
import express from "express";
import cors from "cors";
import connecDB from "./configs/mongodb.js";

//App config
const app = express();
const PORT = process.env.PORT || 4000;
await connecDB();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
//API routes
app.get("/", (req, res, next) => {
  res.send("API Working");
});

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
export default app;