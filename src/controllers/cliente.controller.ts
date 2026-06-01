import { Request, Response } from "express";
import { ClienteService } from "../services/cliente.service";

export class ClienteController {

  static async listar(
    req: Request,
    res: Response
  ) {

    const clientes =
      await ClienteService.listar();

    res.json(clientes);
  }
}