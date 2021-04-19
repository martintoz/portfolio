import express, { json } from "express";
import morgan from "morgan";

//IMPORTING ROUTES
import projectRoutes from "./routes/projects";
import taskRoutes from "./routes/tasks";

const app = express();

//MIDDLEWARES
app.use(morgan("dev"));
app.use(json());

//ROUTES
app.use("/api/projects", projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;
