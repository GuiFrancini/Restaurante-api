import { db } from "../config/database";

export class ClienteService {

  static async listar() {
    const [rows] = await db.query(
      "CALL sp_select_cliente()"
    );

    return rows;
  }

  static async inserir(cliente: {
    cpf: string;
    nome: string;
    dataNascimento: string;
    email: string;
    telefone: string;
  }) {

    await db.query(
      "CALL sp_insert_cliente(?,?,?,?,?)",
      [
        cliente.cpf,
        cliente.nome,
        cliente.dataNascimento,
        cliente.email,
        cliente.telefone
      ]
    );
  }

  static async atualizar(
    id: number,
    cliente: {
      cpf: string;
      nome: string;
      dataNascimento: string;
      email: string;
      telefone: string;
    }
  ) {

    await db.query(
      "CALL sp_update_cliente(?,?,?,?,?,?)",
      [
        id,
        cliente.cpf,
        cliente.nome,
        cliente.dataNascimento,
        cliente.email,
        cliente.telefone
      ]
    );
  }

  static async excluir(id: number) {

    await db.query(
      "CALL sp_delete_cliente(?)",
      [id]
    );
  }
}