import { Request, Response } from "express";
import { PedidoService } from "../services/pedido.service";

export class PedidoController {
  static async listar(req: Request, res: Response) {
    const dados = await PedidoService.listar();
    return res.status(200).json(dados);
  }

  static async inserir(req: Request, res: Response) {
    await PedidoService.inserir(req.body);
    return res.status(201).json({ mensagem: "Pedido cadastrado" });
  }

  static async atualizar(req: Request, res: Response) {
    const id = Number(req.params.id);
    await PedidoService.atualizar(id, req.body);
    return res.status(200).json({ mensagem: "Pedido atualizado" });
  }

  static async excluir(req: Request, res: Response) {
    const id = Number(req.params.id);
    await PedidoService.excluir(id);
    return res.status(200).json({ mensagem: "Pedido removido" });
  }
}