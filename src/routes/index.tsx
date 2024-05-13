import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/home/Home";
import Layout from "@pages/layout/Layout";

export default function RouteSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
