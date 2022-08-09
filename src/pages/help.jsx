import React from "react";

function Help() {
  return (
    <>
      <section>
        <h1>Welcome To RESTy</h1>

        <p>
          <span className="">RESTy</span> is an API tool that help you to test your routes, CRUD methods and API calls.
        </p>

        <br />

        <h4>How can use RESTy ?</h4>

        <ol>
          <li> Enter your route inside the URL space.</li>
          <li> Add your CRUD method.</li>
          <li> Click the Send button.</li>
          <li> If the call have Successful result, It will return the results of your request. If have Unsuccessful calls will throw an error.</li>
        </ol>
      </section>
    </>
  );
}

export default Help;
