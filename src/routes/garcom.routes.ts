import { Router } from "express";
import { GarcomController } from "../controllers/garcom.controller";

const router = Router();
router.get("/garcons", GarcomController.listar);
router.post("/garcons", GarcomController.inserir);
router.put("/garcons/:id", GarcomController.atualizar);
router.delete("/garcons/:id", GarcomController.excluir);
export default router;