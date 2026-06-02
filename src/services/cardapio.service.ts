import { db } from "../config/database";

export class CardapioService {
  static async listar() {
    const [rows] = await db.query("CALL sp_select_cardapio()");
    return rows;
  }

  static async inserir(cardapio: { nome: string; preco: number; unidade: string; categoria: number }) {
    await db.query("CALL sp_insert_cardapio(?,?,?,?)", [
      cardapio.nome, cardapio.preco, cardapio.unidade, cardapio.categoria
    ]);
  }

  static async atualizar(id: number, cardapio: { nome: string; preco: number; unidade: string; categoria: number }) {
    await db.query("CALL sp_update_cardapio(?,?,?,?,?)", [
      id, cardapio.nome, cardapio.preco, cardapio.unidade, cardapio.categoria
    ]);
  }

  static async excluir(id: number) {
    await db.query("CALL sp_delete_cardapio(?)", [id]);
  }
}