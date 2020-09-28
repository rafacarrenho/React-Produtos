import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Produtos from "./Componentes/Produtos";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Contato from "./Componentes/Contato";
import Produto from "./Componentes/Produto";

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/contato">
              <Contato />
            </Route>
            <Route path="/produto/:id">
              <Produto />
            </Route>
            <Route path="/" end>
              <Produtos />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
