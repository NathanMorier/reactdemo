// useFetch.js
import {useState, useEffect} from 'react';

/*
  Notice how everything is now strategically named so that it can be used for multiple cases.
*/
const useFetch = (url) => { // all function names for custom hooks MUST start with 'use', also note the 'url' placed here and elsewhere.
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true); // add this
  const [error, setError] = useState(null); // this is so you can output it instead of just log

  // Take ALL of that useEffect in Home.js and put it here:
  useEffect(() => {
    const abortCont = new AbortController();
    /*
    The setTimeout is simply to test a live loading time, because it'll
    otherwise show extremely quickly since this current setup is local.
    */
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          /*
          This will return conditions of the response, and you can make conditions
          based off of them:
          Response {type: 'cors', url: 'http://localhost:8000/blogs', redirected: false, status: 200, ok: true, …}
          body: (...)
          bodyUsed: true
          headers: Headers {}
          ok: true (THIS ONE IS IMPORTANT)
          redirected: false
          status: 200
          statusText: "OK"
          type: "cors"
          url: "http://localhost:8000/blogs"
          [[Prototype]]: Response
          */
          //console.log(res);
          if(!res.ok) {
            // This will be added to the err.message below.
            // To simulate this, make the path for the fetch wrong.
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false); // now that the data is fetched, loading message false
          setError(null); // set error back to null since data has been fetched
        })
        .catch(err => {
          /*
          This will catch errors and post them to the console, to simulate one,
          we're going to go to the command window that's watching our JSON server
          and turn it off.
          */
          //console.log(err.message);
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false); // remove loading message when error shows
            setError(err.message); // show error message
          }
        })
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return {data, isPending, error} // this return allows us to pass through to the const in Home.js
}

export default useFetch;
