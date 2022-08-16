import "./App.scss";
import React, { useState, useEffect } from "react";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Form from "./components/form/form";
import Results from "./components/results/results";

import axios from "axios";

export default function App() {
  const [data, setData] = useState();
  const [resultData, setResultData] = useState("");

  useEffect(() => {
    if (resultData.method === "get") {
      axios
        .get(resultData.url)
        .then((data) => {
          const dataDetails = {
            header: data.headers,
            data: data.data,
            count: data.data.length,
          };
          setData(dataDetails);
        })
        .catch((error) => {
          console.log(error);
          setData("Error");
        });
    }

    if (resultData.method === "post") {
      axios
        .post(resultData.url, resultData.body)
        .then(function (data) {
          const dataDetails = {
            header: data.headers,
            data: data.data,
            count: data.data.length,
          };
          setData(dataDetails);
        })
        .catch((error) => {
          console.log(error);
          setData("Error");
        });
    }

    if (resultData.method === "put") {
      axios
        .put(resultData.url, resultData.body)
        .then((data) => {
          const dataDetails = {
            header: data.headers,
            data: data.data,
            count: data.data.length,
          };
          setData(dataDetails);
        })
        .catch((error) => {
          console.log(error);
          setData("Error");
        });
    }

    if (resultData.method === "delete") {
      axios
        .delete(resultData.url)
        .then((data) => {
          const dataDetails = {
            header: data.headers,
            data: data.data,
            count: data.data.length,
          };
          setData(dataDetails);
        })
        .catch((error) => {
          console.log(error);
          setData("Error");
        });
    }
  }, [resultData]);

  const callApi = (requestParams) => {
    setResultData(requestParams);
    setData({});
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
