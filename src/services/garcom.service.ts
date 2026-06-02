import { db } from "../config/database";

export class GarcomService {
  static async listar() {
    const [rows] = await db.query("CALL sp_select_garcom()");
    return rows;
  }

  static async inserir(garcom: { nome: string; horario: string }) {
    await db.query("CALL sp_insert_garcom(?,?)", [garcom.nome, garcom.horario]);
  }

  static async atualizar(id: number, garcom: { nome: string; horario: string }) {
    await db.query("CALL sp_update_garcom(?,?,?)", [id, garcom.nome, garcom.horario]);
  }

  static async excluir(id: number) {
    await db.query("CALL sp_delete_garcom(?)", [id]);
  }
}