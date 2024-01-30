import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ContextProvider from "./context/GlobalContext";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Outlet />
    </ContextProvider>
  );
}

export default App;
