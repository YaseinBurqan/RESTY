import "./App.scss";
import React, { useState } from "react";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Form from "./components/form/form";
import Results from "./components/results/results";

 function App() {
  const [data, setData] = useState({
    data: null,
    requestParams: {},
  });
  const [result, setResult] = useState();

  let state = {
    data: null,
    requestParams: {},
  };

  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        {
          name: "fake thing 1",
          url: "http://fakethings.com/1",
        },
        {
          name: "fake thing 2",
          url: "http://fakethings.com/2",
        },
      ],
    };
    setData({ ...data, data, requestParams });
  };

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} setResult={setResult} />
      <div>
        <div>{data.requestParams.method}</div>
        <div>{data.requestParams.url}</div>
      </div>
      <Results result={result} />
      <Footer />
    </React.Fragment>
  );
}

module.exports = App;
