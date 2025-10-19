import "./style.css";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
}
