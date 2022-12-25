import { Fragment, useEffect, useState } from "react";
import Event from "./components/Events/Event";
import MainDisplay from "./components/feeds/MainDisplay";
import Results from "./components/feeds/Results";
import SlideBar from "./components/feeds/SlideBar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, getNewsData] = useState([]);
  const [category, setCategory] = useState('')

  const getNewsCategory = (val) => {
    setCategory(val);
  };

  useEffect(() => {
    setIsLoading(true);
    const httpRequest = async() => {
      const response = await fetch(`https://inshorts.deta.dev/news?category=${category}`);
      
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      
      const {data} = await response.json();
      getNewsData(data);
      setIsLoading(false);
    }
    try {
      httpRequest();
    } catch (error) {
      console.log(error.message)
      setIsLoading(false);
    }
  }, [category])

  return (
    <Fragment>
      <Header onClick={getNewsCategory} />
      <main>
        <SlideBar data={newsData} />
        <div>
          <MainDisplay />
          <Results data={{newsData, isLoading: isLoading}} />
        </div>
        <Event />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
