import { Fragment, useEffect, useState } from "react";
import Event from "./components/Events/Event";
import MainDisplay from "./components/feeds/MainDisplay";
import Results from "./components/feeds/Results";
import SlideBar from "./components/feeds/SlideBar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import httpRequest from "./store/httprequest";
import { useDispatch } from "react-redux";

function App() {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const getNewsCategory = (val) => {
    setCategory(val);
  };

  useEffect(() => {
    dispatch(httpRequest(category));
  }, [category, dispatch]);
  
  return (
    <Fragment>
      <Header onClick={getNewsCategory} />
      <main>
        <SlideBar />
        <div>
          <MainDisplay />
          <Results />
        </div>
        <Event />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
