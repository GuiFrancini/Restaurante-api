import express from "express";
import cors from "cors";

import clienteRoutes from "./routes/cliente.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(clienteRoutes);

export default app;