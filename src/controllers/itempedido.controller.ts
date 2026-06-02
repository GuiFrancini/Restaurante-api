import { Request, Response } from "express";
import { ItemPedidoService } from "../services/itempedido.service";

export class ItemPedidoController {
  static async listar(req: Request, res: Response) {
    const dados = await ItemPedidoService.listar();
    return res.status(200).json(dados);
  }

  static async inserir(req: Request, res: Response) {
    await ItemPedidoService.inserir(req.body);
    return res.status(201).json({ mensagem: "Item do pedido cadastrado" });
  }

  static async atualizar(req: Request, res: Response) {
    const id = Number(req.params.id);
    await ItemPedidoService.atualizar(id, req.body);
    return res.status(200).json({ mensagem: "Item do pedido atualizado" });
  }

  static async excluir(req: Request, res: Response) {
    const id = Number(req.params.id);
    await ItemPedidoService.excluir(id);
    return res.status(200).json({ mensagem: "Item do pedido removido" });
  }
}