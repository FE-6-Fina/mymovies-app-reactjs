import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Detail />
      <Favorite />
    </>
  );
}

export default App;
