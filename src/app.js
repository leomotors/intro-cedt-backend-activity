import express from "express";
import cors from "cors";

import ItemsRoute from "./routes/itemsRoute.js";

const app = express();

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow request from other origin (Frontend)
app.use(cors());

// use routes
app.use("/items", ItemsRoute);

export default app;
