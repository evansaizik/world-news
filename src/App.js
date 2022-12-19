import { Fragment, useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import Biz from "./components/business/Biz";
import MainDisplay from "./components/feeds/MainDisplay";
import Results from "./components/feeds/Results";
import SlideBar from "./components/feeds/SlideBar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import { getNews } from '../src/store/store'

function App() {
  const [newsData, getNewsData] = useState([]);

  const getSearchInput = (val) => {
    console.log(val)
  };
  
  useEffect(() => {

    const httpRequest = async() => {
      const response = await fetch('https://inshorts.deta.dev/news?category=');
      const {data} = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      getNewsData(data);
    }
    try {
      httpRequest();
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  return (
    <Fragment>
      <Header />
      <main>
        <SlideBar data={newsData} />
        <div>
          <MainDisplay />
          <Results onClick={getSearchInput} />
        </div>
        <Biz />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
