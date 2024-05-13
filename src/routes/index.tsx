import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/home/Home";
import Layout from "@pages/layout/Layout";
import { lazyFn } from "@/utils/lazies/Lazy"

export default function RouteSetup() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Authen */}
        <Route path='/login' element={lazyFn(() => import('@components/authen/login'), localStorage.getItem("token") == null, "/")} />
        <Route path='/register' element={lazyFn(() => import('@components/authen/register'), localStorage.getItem("token") == null, "/")} />
      </Routes>
    </BrowserRouter>
  )
}
