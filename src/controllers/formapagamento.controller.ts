import { Request, Response } from "express";
import { FormaPagamentoService } from "../services/formapagamento.service";

export class FormaPagamentoController {
  static async listar(req: Request, res: Response) {
    const dados = await FormaPagamentoService.listar();
    return res.status(200).json(dados);
  }

  static async inserir(req: Request, res: Response) {
    await FormaPagamentoService.inserir(req.body);
    return res.status(201).json({ mensagem: "Forma de pagamento cadastrada" });
  }

  static async atualizar(req: Request, res: Response) {
    const id = Number(req.params.id);
    await FormaPagamentoService.atualizar(id, req.body);
    return res.status(200).json({ mensagem: "Forma de pagamento atualizada" });
  }

  static async excluir(req: Request, res: Response) {
    const id = Number(req.params.id);
    await FormaPagamentoService.excluir(id);
    return res.status(200).json({ mensagem: "Forma de pagamento removida" });
  }
}