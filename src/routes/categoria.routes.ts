import { Router } from "express";
import { CategoriaController } from "../controllers/categoria.controller";

const router = Router();
router.get("/categorias", CategoriaController.listar);
router.post("/categorias", CategoriaController.inserir);
router.put("/categorias/:id", CategoriaController.atualizar);
router.delete("/categorias/:id", CategoriaController.excluir);
export default router;