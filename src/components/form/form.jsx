import React, { useState } from "react";
import "./form.scss";

function Form(props) {
  const [apiUrl, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [method, setMethod] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: apiUrl,
      body: body,
    };
    props.handleApiCall(formData);
  };

  const inputHandler = (element) => {
    console.log("url= ", document.getElementById("url").value);
    setUrl(document.getElementById("url").value);
  };

  const handleBody = (element) => {
    console.log(document.getElementById("body").value);
    setBody(document.getElementById("body").value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL </span>
          <input id="url" name="url" type="text" onInput={inputHandler} data="url" />
          <button type="submit" data="go">
            GO!
          </button>
        </label>

        <label className="methods">
          <span
            id="get"
            onClick={() => {
              setMethod("get");
            }}
          >
            GET
          </span>
          <span
            id="post"
            onClick={() => {
              setMethod("post");
            }}
          >
            POST
          </span>
          <span
            id="put"
            onClick={() => {
              setMethod("put");
            }}
          >
            PUT
          </span>
          <span
            id="delete"
            onClick={() => {
              setMethod("delete");
            }}
          >
            DELETE
          </span>
          <textarea id="body" name="data" onInput={handleBody} placeholder="Data Details"></textarea>
        </label>
      </form>
    </>
  );
}

export default Form;
