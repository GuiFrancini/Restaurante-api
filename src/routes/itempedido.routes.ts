import { Router } from "express";
import { ItemPedidoController } from "../controllers/itempedido.controller";

const router = Router();
router.get("/itens-pedido", ItemPedidoController.listar);
router.post("/itens-pedido", ItemPedidoController.inserir);
router.put("/itens-pedido/:id", ItemPedidoController.atualizar);
router.delete("/itens-pedido/:id", ItemPedidoController.excluir);
export default router;