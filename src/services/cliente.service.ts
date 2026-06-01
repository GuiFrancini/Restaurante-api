import { db } from "../config/database";

export class ClienteService {

  static async listar() {

    const [rows] = await db.query(
      "CALL sp_select_cliente()"
    );

    return rows;
  }
}