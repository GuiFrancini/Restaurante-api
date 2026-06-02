import { Request, Response } from "express";
import { CategoriaService } from "../services/categoria.service";

export class CategoriaController {
  static async listar(req: Request, res: Response) {
    const dados = await CategoriaService.listar();
    return res.status(200).json(dados);
  }

  static async inserir(req: Request, res: Response) {
    await CategoriaService.inserir(req.body);
    return res.status(201).json({ mensagem: "Categoria cadastrada" });
  }

  static async atualizar(req: Request, res: Response) {
    const id = Number(req.params.id);
    await CategoriaService.atualizar(id, req.body);
    return res.status(200).json({ mensagem: "Categoria atualizada" });
  }

  static async excluir(req: Request, res: Response) {
    const id = Number(req.params.id);
    await CategoriaService.excluir(id);
    return res.status(200).json({ mensagem: "Categoria removida" });
  }
}