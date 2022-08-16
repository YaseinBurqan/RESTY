import "./App.scss";
import React, { useState } from "react";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Form from "./components/form/form";
import Results from "./components/results/results";

export default function App() {
  const [data, setData] = useState();
  const [resultData, setResultData] = useState("");

  const callApi = (requestParams) => {
    const data = {
      count: 2,
      results: [
        { name: "fake thing 1", url: "http://fakethings.com/1" },
        { name: "fake thing 2", url: "http://fakethings.com/2" },
      ],
    };
    setResultData();
    setData(data);
  };

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} />
      <div>
        {resultData.method} : {resultData.url}
      </div>
      <Results data={data}></Results>
      <Footer />
    </React.Fragment>
  );
}
