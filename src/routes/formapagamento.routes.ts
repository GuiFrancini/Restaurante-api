import { Router } from "express";
import { FormaPagamentoController } from "../controllers/formapagamento.controller";

const router = Router();
router.get("/formas-pagamento", FormaPagamentoController.listar);
router.post("/formas-pagamento", FormaPagamentoController.inserir);
router.put("/formas-pagamento/:id", FormaPagamentoController.atualizar);
router.delete("/formas-pagamento/:id", FormaPagamentoController.excluir);
export default router;