import { Fragment } from "react";
import Biz from "./components/business/Biz";
import MainDisplay from "./components/feeds/MainDisplay";
import Results from "./components/feeds/Results";
import SlideBar from "./components/feeds/SlideBar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <SlideBar />
        <div>
          <MainDisplay />
          <Results />
        </div>
        <Biz />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
