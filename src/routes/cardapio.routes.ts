import { Router } from "express";
import { CardapioController } from "../controllers/cardapio.controller";

const router = Router();
router.get("/cardapios", CardapioController.listar);
router.post("/cardapios", CardapioController.inserir);
router.put("/cardapios/:id", CardapioController.atualizar);
router.delete("/cardapios/:id", CardapioController.excluir);
export default router;