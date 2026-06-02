import { db } from "../config/database";

export class FormaPagamentoService {
  static async listar() {
    const [rows] = await db.query("CALL sp_select_formapagamento()");
    return rows;
  }

  static async inserir(pagamento: { forma: string }) {
    await db.query("CALL sp_insert_formapagamento(?)", [pagamento.forma]);
  }

  static async atualizar(id: number, pagamento: { forma: string }) {
    await db.query("CALL sp_update_formapagamento(?,?)", [id, pagamento.forma]);
  }

  static async excluir(id: number) {
    await db.query("CALL sp_delete_formapagamento(?)", [id]);
  }
}