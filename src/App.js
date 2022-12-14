import MainDisplay from "./components/feeds/MainDisplay";
import SlideBar from "./components/feeds/SlideBar";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
      <SlideBar />
      <MainDisplay />
      </main>
    </>
  );
}

export default App;
