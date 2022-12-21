import { Fragment, useEffect, useState } from "react";
import Biz from "./components/business/Biz";
import MainDisplay from "./components/feeds/MainDisplay";
import Results from "./components/feeds/Results";
import SlideBar from "./components/feeds/SlideBar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const [newsData, getNewsData] = useState([]);
  const [category, setCategory] = useState('')

  const getNewsCategory = (val) => {
    setCategory(val);
  };

  useEffect(() => {
    const httpRequest = async() => {
      const response = await fetch(`https://inshorts.deta.dev/news?category=${category}`);
      
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
  }, [category])

  return (
    <Fragment>
      <Header onClick={getNewsCategory} />
      <main>
        <SlideBar data={newsData} />
        <div>
          <MainDisplay />
          <Results data={newsData} />
        </div>
        <Biz />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
