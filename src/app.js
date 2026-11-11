import express from "express";
import cors from "cors";

const app = express();

//basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // allow public folder to be accessed by anyone as static assets

//cors configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGINS,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.get("/", (req, res) => {
  res.json({ response: "Hello World!" });
});

//import routes
import healthCheckRouter from "./routes/healthcheck.route.js";
//routes
app.use("/api/v1/healthcheck", healthCheckRouter);

export default app;
