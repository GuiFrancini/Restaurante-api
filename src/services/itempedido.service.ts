import { db } from "../config/database";

export class ItemPedidoService {
  static async listar() {
    const [rows] = await db.query("CALL sp_select_itempedido()");
    return rows;
  }

  static async inserir(item: { quantidade: number; valorUnitario: number; valorTotal: number; pedido: number; garcom: number; cardapio: number }) {
    await db.query("CALL sp_insert_itempedido(?,?,?,?,?,?)", [
      item.quantidade, item.valorUnitario, item.valorTotal, item.pedido, item.garcom, item.cardapio
    ]);
  }

  static async atualizar(id: number, item: { quantidade: number; valorUnitario: number; valorTotal: number; pedido: number; garcom: number; cardapio: number }) {
    await db.query("CALL sp_update_itempedido(?,?,?,?,?,?,?)", [
      id, item.quantidade, item.valorUnitario, item.valorTotal, item.pedido, item.garcom, item.cardapio
    ]);
  }

  static async excluir(id: number) {
    await db.query("CALL sp_delete_itempedido(?)", [id]);
  }
}