import { Request, Response } from "express";
import { CardapioService } from "../services/cardapio.service";

export class CardapioController {
  static async listar(req: Request, res: Response) {
    const dados = await CardapioService.listar();
    return res.status(200).json(dados);
  }

  static async inserir(req: Request, res: Response) {
    await CardapioService.inserir(req.body);
    return res.status(201).json({ mensagem: "Item do cardápio cadastrado" });
  }

  static async atualizar(req: Request, res: Response) {
    const id = Number(req.params.id);
    await CardapioService.atualizar(id, req.body);
    return res.status(200).json({ mensagem: "Item do cardápio atualizado" });
  }

  static async excluir(req: Request, res: Response) {
    const id = Number(req.params.id);
    await CardapioService.excluir(id);
    return res.status(200).json({ mensagem: "Item do cardápio removido" });
  }
}