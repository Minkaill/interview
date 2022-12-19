import Header from "./components/Header";
import Main from "./components/Main/index";

function App() {
  return (
    <div className="wrapper h-screen flex flex-col">
      <Header />
      <div className="App w-3/5 m-auto mt-10 flex-auto">
        <Main />
      </div>
    </div>
  );
}

export default App;
