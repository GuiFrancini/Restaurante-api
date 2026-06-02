import { Router } from "express";
import { PedidoController } from "../controllers/pedido.controller";

const router = Router();
router.get("/pedidos", PedidoController.listar);
router.post("/pedidos", PedidoController.inserir);
router.put("/pedidos/:id", PedidoController.atualizar);
router.delete("/pedidos/:id", PedidoController.excluir);
export default router;