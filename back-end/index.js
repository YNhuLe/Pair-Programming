import express from "express";
import cors from "cors";
import photosRoutes from "./routes/zodiac.js";
import "dotenv/config";
import path from "path";
const port = process.env.PORT ?? 5050;

const app = express();
app.use(cors());

//serve static files
app.use(express.static("public"));
app.use(express.json());

app.use("/photos", photosRoutes);

app.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});
