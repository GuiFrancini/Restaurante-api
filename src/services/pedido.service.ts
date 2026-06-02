import { db } from "../config/database";

export class PedidoService {
  static async listar() {
    const [rows] = await db.query("CALL sp_select_pedido()");
    return rows;
  }

  static async inserir(pedido: { data: string; valorTotal: number; numeroPessoas: number; formaPagamento: number; cliente: number }) {
    await db.query("CALL sp_insert_pedido(?,?,?,?,?)", [
      pedido.data, pedido.valorTotal, pedido.numeroPessoas, pedido.formaPagamento, pedido.cliente
    ]);
  }

  static async atualizar(id: number, pedido: { data: string; valorTotal: number; numeroPessoas: number; formaPagamento: number; cliente: number }) {
    await db.query("CALL sp_update_pedido(?,?,?,?,?,?)", [
      id, pedido.data, pedido.valorTotal, pedido.numeroPessoas, pedido.formaPagamento, pedido.cliente
    ]);
  }

  static async excluir(id: number) {
    await db.query("CALL sp_delete_pedido(?)", [id]);
  }
}