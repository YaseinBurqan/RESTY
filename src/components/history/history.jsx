import "./history.scss";

function History({ history }) {
  return (
    <div className="history">
      <h4 className="h5">History</h4>

      <p id="method"> {history.method} :</p>
      <p> {history.url}</p>
    </div>
  );
}

export default History;
