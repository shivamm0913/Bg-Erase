import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

//App config
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
await connectDB(); // connect lazily, only when needed
//API routes
app.get("/", async (req, res) => {
  res.send("API Working 🚀");
});
// Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
export default app;
