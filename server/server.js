import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoute.js";

//App config
const app = express();
const PORT = process.env.PORT || 4000;
await connectDB(); // connect lazily, only when needed

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

//API routes
app.get("/", async (req, res) => {
  res.send("API Working 🚀");
});

app.use("/api/user", userRouter);
app.use("/api/image/", imageRouter);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
export default app;
