import express, { json } from "express";
import morgan from "morgan";

//IMPORTING ROUTES
import projectRoutes from "./routes/projects";

const app = express();

//MIDDLEWARES
app.use(morgan("dev"));
app.use(json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

//ROUTES
app.use("/api/projects", projectRoutes);

export default app;
