import MainDisplay from "./components/feeds/MainDisplay";
import Results from "./components/feeds/Results";
import SlideBar from "./components/feeds/SlideBar";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
      <SlideBar />
      <MainDisplay />
      <Results />
      </main>
    </>
  );
}

export default App;
