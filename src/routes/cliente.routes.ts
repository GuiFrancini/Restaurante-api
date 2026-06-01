import { Router } from "express";
import { ClienteController } from "../controllers/cliente.controller";

const router = Router();

router.get(
  "/clientes",
  ClienteController.listar
);

router.post(
  "/clientes",
  ClienteController.inserir
);

router.put(
  "/clientes/:id",
  ClienteController.atualizar
);

router.delete(
  "/clientes/:id",
  ClienteController.excluir
);

export default router;