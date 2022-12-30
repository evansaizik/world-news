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
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null)

  const getNewsCategory = (val) => {
    setCategory(val);
  };

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    const httpRequest = async() => {
      try {
        const response = await Promise.race([fetch(`https://inshorts.deta.dev/news?category=${category}`), timeout(10)]);
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
        
        const {data} = await response.json();

        if (data.length > 0) {
          getNewsData(data);
        } else {
          setError('No search found!');
        }
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }

    const timeout = function (s) {
      return new Promise((_, reject) => {
        return setTimeout(() => {
          reject(new Error('Request Timed out: Request took too long!'));
        }, s * 1000);
      });
    };
    httpRequest();
  }, [category]);

  return (
    <Fragment>
      <Header onClick={getNewsCategory} />
      <main>
        <SlideBar data={newsData} />
        <div>
          <MainDisplay data={{newsData, isLoading}} />
          <Results data={{newsData, isLoading, error}} />
        </div>
        <Event />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
