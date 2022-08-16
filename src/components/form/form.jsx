import React, { useState } from "react";
import "./form.scss";

function Form(props) {
  const [apiUrl, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [method, setMethod] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      url: apiUrl,
      method: method,
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
        </label>
      </form>
      {method === "post" || method === "put" ? <textarea id="body" onInput={handleBody} placeholder="name=body"></textarea> : null}
    </>
  );
}

export default Form;
