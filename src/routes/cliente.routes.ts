import { Router } from "express";
import { ClienteController } from "../controllers/cliente.controller";

const router = Router();

router.get(
  "/clientes",
  ClienteController.listar
);

export default router;