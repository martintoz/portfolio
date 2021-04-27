import express, { json } from "express";
import morgan from "morgan";

//IMPORTING ROUTES
import projectRoutes from "./routes/projects";

const app = express();

//MIDDLEWARES
app.use(morgan("dev"));
app.use(json());

//ROUTES
app.use("/api/projects", projectRoutes);

export default app;
