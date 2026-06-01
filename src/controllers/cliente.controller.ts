import { Request, Response } from "express";
import { ClienteService } from "../services/cliente.service";

export class ClienteController {

  static async listar(
    req: Request,
    res: Response
  ) {

    const clientes =
      await ClienteService.listar();

    return res.status(200).json(clientes);
  }

  static async inserir(
    req: Request,
    res: Response
  ) {

    await ClienteService.inserir(
      req.body
    );

    return res.status(201).json({
      mensagem: "Cliente cadastrado"
    });
  }

  static async atualizar(
    req: Request,
    res: Response
  ) {

    const id = Number(req.params.id);

    await ClienteService.atualizar(
      id,
      req.body
    );

    return res.status(200).json({
      mensagem: "Cliente atualizado"
    });
  }

  static async excluir(
    req: Request,
    res: Response
  ) {

    const id = Number(req.params.id);

    await ClienteService.excluir(id);

    return res.status(200).json({
      mensagem: "Cliente removido"
    });
  }
}