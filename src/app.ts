import express from "express";
import cors from "cors";

import clienteRoutes from "./routes/cliente.routes";
import categoriaRoutes from "./routes/categoria.routes";
import formaPagamentoRoutes from "./routes/formapagamento.routes";
import garcomRoutes from "./routes/garcom.routes";
import cardapioRoutes from "./routes/cardapio.routes";
import pedidoRoutes from "./routes/pedido.routes";
import itemPedidoRoutes from "./routes/itempedido.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Injeção de Rotas
app.use(clienteRoutes);
app.use(categoriaRoutes);
app.use(formaPagamentoRoutes);
app.use(garcomRoutes);
app.use(cardapioRoutes);
app.use(pedidoRoutes);
app.use(itemPedidoRoutes);

export default app;