import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Header } from "./components/header";

function Rotas() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default Rotas;
