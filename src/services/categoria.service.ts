import { db } from "../config/database";

export class CategoriaService {
  static async listar() {
    const [rows] = await db.query("CALL sp_select_categoria()");
    return rows;
  }

  static async inserir(categoria: { nome: string }) {
    await db.query("CALL sp_insert_categoria(?)", [categoria.nome]);
  }

  static async atualizar(id: number, categoria: { nome: string }) {
    await db.query("CALL sp_update_categoria(?,?)", [id, categoria.nome]);
  }

  static async excluir(id: number) {
    await db.query("CALL sp_delete_categoria(?)", [id]);
  }
}