import { Request, Response } from "express";
import { GarcomService } from "../services/garcom.service";

export class GarcomController {
  static async listar(req: Request, res: Response) {
    const dados = await GarcomService.listar();
    return res.status(200).json(dados);
  }

  static async inserir(req: Request, res: Response) {
    await GarcomService.inserir(req.body);
    return res.status(201).json({ mensagem: "Garçom cadastrado" });
  }

  static async atualizar(req: Request, res: Response) {
    const id = Number(req.params.id);
    await GarcomService.atualizar(id, req.body);
    return res.status(200).json({ mensagem: "Garçom atualizado" });
  }

  static async excluir(req: Request, res: Response) {
    const id = Number(req.params.id);
    await GarcomService.excluir(id);
    return res.status(200).json({ mensagem: "Garçom removido" });
  }
}