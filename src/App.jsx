import "./App.scss";
import React, { useState } from "react";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Form from "./components/form/form";
import Results from "./components/results/results";

export default function App() {
  const [data, setData] = useState({
    response: " ",
  });

  const [resultData, setResultData] = useState({});

  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: "fake thing 1", url: "http://fakethings.com/1" },
        { name: "fake thing 2", url: "http://fakethings.com/2" },
      ],
    };
    setResultData(requestParams);
    setData({ data });
  };

  function handleSubmit(props) {
    const formData = {
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon",
    };
    props.handleApiCall(formData);
  }

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} />
      <div>
        <div>URL : {resultData.url}</div>
        <div>Method : {resultData.method}</div>
      </div>
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}
