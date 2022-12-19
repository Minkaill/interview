import Header from "./components/Header";
import Main from "./components/Main/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper h-screen flex flex-col">
      <Header />
      <div className="App w-3/5 m-auto mt-10 flex-auto">
        <Routes>
          <Route path="/interview" element={<Main />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
