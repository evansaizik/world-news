import { displayActions } from "./displaySlice";
import { resultActions } from "./store";
import { statusSliceActions } from "./statusSlice";
import { sportsSliceActions } from "./sportsSlice";

const httpRequest = (category) => {
  return async(dispatch) => {
    const timeout = function (s) {
      return new Promise((_, reject) => {
        return setTimeout(() => {
          reject(new Error('Request Timed out: Request took too long!'));
        }, s * 1000);
      });
    };
    const getNewsData = async() => {
      dispatch(statusSliceActions.setError(false));
      dispatch(statusSliceActions.setLoading(true));
      try {
        const response = await Promise.race([fetch(`https://inshorts.deta.dev/news?category=${category}`), timeout(10)]);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        
        const {data} = await response.json();
        
        if (data.length > 0) {
          dispatch(statusSliceActions.setLoading(false));
          return data;
        } else {
          dispatch(statusSliceActions.setError('No data found!'));
        }
      }
      catch (error) {
        dispatch(statusSliceActions.setError(error.message))
      }
      dispatch(statusSliceActions.setLoading(false));
    } 
    const res = await getNewsData() || [];
    dispatch(resultActions.getData(res));
    dispatch(displayActions.getData(res))
  }
}

export const httpRequests = () => {
  return async(dispatch) => {
    const timeout = function (s) {
      return new Promise((_, reject) => {
        return setTimeout(() => {
          reject(new Error('Request Timed out: Request took too long!'));
        }, s * 1000);
      });
    };
    const getSportsData = async() => {
      // dispatch(statusSliceActions.setError(false));
      // dispatch(statusSliceActions.setLoading(true));
      try {
        const data = await Promise.race([fetch('https://www.scorebat.com/video-api/v3/feed/?token=NDUwNjRfMTY3MjMxMjkzM18zNWE4NWUyMzcwM2ZhMWQxNTMwZGRkYTgzNzFlYTFhZjhlZTA1NzI1'), timeout(10)]);

        if (!data.ok) {
          throw new Error('Something went wrong');
        }
        
        const {response} = await data.json();
        
        if (response.length > 0) {
          // dispatch(statusSliceActions.setLoading(false));
          return response;
        } else {
          // dispatch(statusSliceActions.setError('No data found!'));
        }
      }
      catch (error) {
        // dispatch(statusSliceActions.setError(error.message))
      }
      // dispatch(statusSliceActions.setLoading(false));
    } 
    const res = await getSportsData() || [];
    // console.log(res[0].videos[0].embed)
    dispatch(sportsSliceActions.getData(res));
  }
}
export default httpRequest;