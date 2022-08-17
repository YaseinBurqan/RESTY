import React from "react";
import "./results.scss";

function Results(props) {
  return (
    <>
      <section>
        <div>
          <h4>Headers</h4>
          <pre>root : {props.data ? JSON.stringify(props.data.header, undefined, 2) : null}</pre>
        </div>

        <div>
          <h4>Results</h4>
          <pre>data : {props.data ? JSON.stringify(props.data.data, undefined, 2) : null}</pre>
        </div>
      </section>
    </>
  );
}

export default Results;
