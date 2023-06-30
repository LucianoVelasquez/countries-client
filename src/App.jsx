import { Route, Routes, useLocation } from "react-router-dom";
import { Detail, FormC, Home, Landing, Editing } from "./Views/index";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && pathname !== "/*" && <Nav />}
      <Routes>
        <Route path="/*" element={<h1>Error</h1>}></Route>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<FormC />} />
        <Route path="/editing" element={<Editing />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
