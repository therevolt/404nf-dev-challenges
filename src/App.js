import "./App.css";
import img from "./assets/img/404.png";
function App() {
  return (
    <div className="notFound">
      <div className="header">
        404{" "}
        <u>
          <span style={{ fontWeight: "lighter", fontSize: 12 }}>NOT FOUND</span>
        </u>
      </div>
      <div className="main">
        <div className="img">
          <img src={img} alt="notFoundPage" />
        </div>
        <div className="text">
          <span>Opps sorry, we can't find what you're looking for~</span>
          <br />
          <button href="#">↩ Go Back</button>
        </div>
      </div>
      <div className="footer">Create By TheRevolt</div>
    </div>
  );
}

export default App;
