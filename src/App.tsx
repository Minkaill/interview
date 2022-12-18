import Header from "./components/Header";
import Main from './components/Main/index';

function App() {
  return (
    <>
      <Header />
      <div className="App w-3/5 m-auto mt-10">
        <Main />
      </div>
    </>
  );
}

export default App;
